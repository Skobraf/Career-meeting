<template>
    <div class="details">
        <div class="detail-head">
         <Detailtitle v-bind:title ="items.secteur" />
            <select name="filieres" @change="handleChange">
                <option
                    v-for="filiere,index in filiereSelected[0].filiere"
                    :key="index"
                    :selected="(items.filiereChecked == filiere.nameFiliere) ? 'selected' : false"
                    :value="filiere.nameFiliere"
                    >
                    {{filiere.nameFiliere}} et {{ index }}
                </option>
            </select>
        </div>
        <hr>
        <div class="filiere-detail">
            <ul>
                <li v-for="laMetier,index in selectedOption[0].metier"
                    v-bind:key="index"
                    v-on:click="seen = true"
                    @click="handleMe(laMetier.nameMetier)"
                    >
                    <MetierInfo
                        v-bind:class="{active: items.etudeChecked.some( r=> laMetier.diplome.indexOf(r) >= 0)}"
                        v-bind:metiert="laMetier"
                        v-bind:indice="indice"
                        />
                    </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Detailtitle from '../components/DetailTitle.vue';
import MetierInfo from '../components/MetierInfo.vue';
export default {
    name: 'details',
    data() {
        return {
            selectedOption: [],
            indice: ''
        }
    },
    computed: {
        items() {
            return this.$store.state.items
        },
        metier() {
            return this.$store.state.metier
        },
        filiereSelected() {
            return this.$store.state.secteur.filter(
                    (nomSect) => (
                        nomSect.nameSecteur == this.items.secteur
                        ));
        }
    },
    created() {
        this.selectedOption = this.metier.filter(e => e.nameFiliere == this.items.filiereChecked )
    },
    methods: {
        handleChange(e) {
            const nomMetier = e.target.options[e.target.options.selectedIndex].value;
             if(e.target.options.selectedIndex > -1) {
                // PUSH THE NEW DATA EVERY TIME A NEW ELEMENT IS SELECTED
                this.selectedOption = this.metier.filter(e => e.nameFiliere == nomMetier )
        }
        },
        handleMe(index){
            this.indice = index;
        }
    },
    components: {
        Detailtitle,
        MetierInfo
    }
}
</script>
<style>
</style>


