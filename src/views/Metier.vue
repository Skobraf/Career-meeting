<template>
    <div class="metier"> 
        <div class="filier-list">
            <h2>Choisis un filiere</h2>
            <ul class="tg-list">
                <li class="tg-list-item" v-for="filiere,index in secteurs[$route.params.secteurId].filiere">
                        <label class='tgl-btn' :for='index'>
                         </label>
                        <input
                            type="radio"
                            v-bind:value="filiere.nameFiliere"
                            v-model="filiereChecked"
                            class='tgl tgl-flat'
                            :id='index'
                            name='group'
                            >{{ filiere.nameFiliere }} 
                            <label class='tgl-btn' :for='index'></label>
                                  
                </li>
            </ul>
        </div>
        <hr>
        <div class="etude-list">
            <h1>Quel est ton niveau d'etudes?</h1>
            <ul>
                <li v-for="diplome,index in diplomes">
                        <input
                            type="checkbox"
                           v-bind:value="diplome.nameDiplome"
                           v-model="etudeChecked"
                           class='tgl tgl-flat'
                           :id="diplome.nameDiplome"
                        >
                        <label class='tgl-btn' :for='diplome.nameDiplome'></label>
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

<style lang="scss">

.tg-list-item{
	margin: 0 20px;
}

.tgl{
	display: none;
	// add default box-sizing for this scope
	&, &:after, &:before,
	& *, & *:after, & *:before,
	& + .tgl-btn{
		box-sizing: border-box;
		&::selection{
			background: none;
		}
	}
	+ .tgl-btn{
		outline: 0;
		display: block;
		width: 37px;
		height: 17px;
		position: relative;
		cursor: pointer;
     user-select: none;
		&:after, &:before{
			position: relative;
			display: block;
			content: "";
			width: 38%;
			height: 100%;
		}
		&:after{
			left: 0;
		}
		&:before{
			display: none;
		}
	}
	&:checked{
		+ .tgl-btn{
			&:after{
				left: 50%;
			}
		}
	}
}

// themes
// colores
$inside_color: #888888;
$outside_color:#454545;
$active_color: #A3C961;
.tgl-flat{
	+ .tgl-btn{
		    padding: 1px;
            transition: all .2s ease;
            background: $inside_color;
            border: 1px solid #ffffff;
            border-radius: 2em;
		&:after{
			transition: all .2s ease;
			background:  $outside_color;
			content: "";
			border-radius: 1em;
		}
	}
	&:checked{
		+ .tgl-btn{
			border: 1px solid #ffffff;
            background: $outside_color;
			&:after{
				left: 62%;
				background: $active_color;
			}
		}
	}
}
</style>


