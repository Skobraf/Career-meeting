<template>
    <div class="metier">
        
        <div class="filier-list">
            <h2>Choisis un filiere</h2>
            <ul>
                <li v-for="filiere in secteurs[$route.params.secteurId].filiere">
                    <label class="swit">
                        <input
                            type="radio"
                            v-bind:value="filiere.nameFiliere"
                            v-model="filiereChecked"
                            >
                        <span class=" round"></span>
                            {{ filiere.nameFiliere }}
                    </label>
                   
                </li>
            </ul>
        </div>
        <hr>
        <div class="etude-list">
            <h1>Quel est ton niveau d'etudes?</h1>
            <ul>
                <li v-for="diplome in diplomes">
                    <label class="switch">
                        <input
                            type="checkbox"
                           v-bind:value="diplome.nameDiplome"
                           v-model="etudeChecked"
                        >
                        <span class="slider round"></span>
                    </label>
                    {{ diplome.nameDiplome }}
                </li>
            </ul>
        </div>
        <button @click="handleClick" :disabled="etudeChecked.length == 0 || filiereChecked == ''">click me</button>
    </div>
</template>
    
<script>


export default {
    name: 'metier',
    computed: {
        secteurs() {
            return this.$store.state.secteur;
        },
        diplomes() {
            return this.$store.state.diplome;
        }
    },
    data() {
        return {
            filiereChecked: '',
            etudeChecked:[]
        }
    },
    methods: {
        handleClick() {
            let items = {
                filiereChecked: this.filiereChecked,
                etudeChecked: this.etudeChecked,
                secteur: this.secteurs[this.$route.params.secteurId].nameSecteur

            }
            this.$store.dispatch("handleClick", items);
            this.$router.push('/details');
        }
    }
}
</script>

<style>
    .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  /* width: 0;
  height: 0; */
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
