export default {
    data: function() {
        return {
            id: '',
            name: '',
            description: '',
            // errorMessage: '',
            erreurId:'',
            erreurNom:'',
            erreurDesc:'',
            errorColor: ERROR_COLOR_FORM
        }
    },
    methods: {
        addTeam: function() {
            // this.errorMessage = [];
            if(!this.id || !this.name || this.description.length<20){
                if (!this.id) {
                    // this.errorMessage.push('Team Id is required');
                    this.erreurId='Team Id is required';
                }
                else{
                    this.erreurId='';
                }
                if(!this.name){
                //    this.errorMessage.push('Team name is required');
                    this.erreurNom='Team name is required';
                }
                else{
                    this.erreurNom='';
                }
                if(this.description.length <20){
                    // this.errorMessage.push('Team description must be at least 20 characters');
                    this.erreurDesc='Team description must be at least 20 characters';
                 }
                 else{
                    this.erreurDesc='';
                }
                return;
            }

            const Team = { id: this.id, name: this.name, description: this.description };
            console.log('form.addTeam', Team);

            //permet de faire remonter un event au composant parent
            //l'event sera écouté à l'appel du composant enfant via @change-state="function"
            this.$emit('addTeam', Team);

            this.id = '';
            this.name ='';
            this.description = '';
        }
        
    },
    
    /*
     * v-bind:style => permet de lier une propriété HTML (en l'occurence style) à des variables VueJS (modèle), on peut aussi écrire :style
     * @submit.prevent => permet de bloquer le rechargement de la page à la validation du formulaire
     * v-model="variable" => permet de lier la valeur d'un champ (input, textarea etc...) à des variables VueJS (modèle)
     * @click => permet de définir un callback lorsque l'événement clique est déclenché
     */
    template: `<section>
                <h2>Team form</h2>

                <form @submit.prevent class="was-validated">
                    
              
                    <div id="verif-id">
                        <label for="validationCustom01" class="form-label">Id</label><br/>
                        <input type="text" v-model="id"/>
                        <div>
                            {{ erreurId }}
                        </div>
                    </div>

                    <div id="verif-nom">
                        <label for="validationCustom02" class="form-label">Nom</label><br/>
                        <input type="text" v-model="name"/>
                        <div>
                        {{ erreurNom }}
                        </div>

                    </div>

                    <div id="verif-desc">
                        <label for="validationCustom03" class="form-label">Description</label><br/>
                        <textarea v-model="description"/>
                        <div>
                        {{ erreurDesc }}
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit" @click="addTeam">Envoyer</button>
                </form>
                </section>`
}

// Affichage message erreur basique
// <div v-if="errorMessage.length > 0" v-bind:style="{ color: errorColor}">
                    //     <ul>
                    //         <li v-for="(message, index) in errorMessage" :key="index">{{ message }}</li>
                    //     </ul>
                    // </div>