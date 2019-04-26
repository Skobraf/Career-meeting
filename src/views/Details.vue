<template>
    <div class="details">
        <div class="detail-head">
         <Detailtitle v-bind:title ="items.secteur" />
         <div class="selected-item">
               <select  class="select-item" name="filieres" @change="handleChange">
                <option
                    class="option-item"
                    v-for="filiere,index in filiereSelected[0].filiere"
                    :key="index"
                    :selected="(items.filiereChecked == filiere.nameFiliere) ? 'selected' : false"
                    :value="filiere.nameFiliere"
                    >
                    {{filiere.nameFiliere}}
                </option>
            </select>
         </div>
          
        </div>
        <div class="filiere-detail">
            <ul>
                <li v-for="laMetier,index in selectedOption[0].metier"
                    v-bind:key="index"
                    v-on:click="seen = true"
                    @click="handleMe(laMetier.nameMetier)"
                    >
                    <span v-bind:class="{active: items.etudeChecked.some( r=> laMetier.diplome.indexOf(r) >= 0)}"></span>
                    <i v-bind:class="{arrowLeft: laMetier.nameMetier == indice}"></i>
                    <MetierInfo
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
            console.log(this.indice);
        }
    },
    components: {
        Detailtitle,
        MetierInfo
    }
}
</script>
<style lang="scss">
    .details{
        padding-top: 20px;
    }
    .selected-item {
            display: flex;
            border-radius: 12px;
            width: 360px;
            height: 57px;
            margin: 0 auto;
            background: #2E263E;
            border: none;
            margin-top: 4px;
            &::before {
                content: '';
                background-color: rgba(204, 0, 102, 0);
                border: 1px solid #fff;
                height: 40px;
                width: 49px;
                border-radius: 75px;
                margin: 8px;
        }
    }
    .select-item {
        display: flex;
        border-radius: 12px;
        font-size: 24px;
        color: white;
        font-weight: 600;
        width: 360px;
        height: 57px;
        margin: 0 auto;
        background: #2E263E;
        border: none;
        option {
            font-size: 14px;
            color: black;
            background: #CDCBD1;
        }
    }
    ul {
        padding-left: 12px;
        &::before {
            content: '';
            position: absolute;
            border: 0.5px solid white;
            margin-left: 36px;
            margin-top: -23px;
            height: 340px;
        }
    }
    li {
        display: flex;
        height: 100px;
        &::before {
            content: '';
            background-color: rgba(204, 0, 102, 0);
            border: 1px solid #fff;
            position: absolute;
            height: 31px;
            width: 31px;
            border-radius: 75px;
            margin-top: 16px;
            margin-left: 20px;
        }
    }
     span{
        background-color: #8E8E8E;
        height: 23px;
        width: 23px;
        top: 21px;
        left: 25px;
        position: relative;
        border-radius: 75px;
        margin-right: 30px;
     }
    .active {
        background:#A3C961;
    }
    .arrowLeft {
        width: 0;
        height: 0;
        position: relative;
        bottom: -23px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #f9be00;
    }
    
</style>


