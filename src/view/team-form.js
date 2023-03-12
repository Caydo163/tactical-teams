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
            const errorId = document.getElementById("error_id");
            const errorName = document.getElementById("error_name");
            const errorDesc = document.getElementById("error_desc");
            const borderId = document.getElementById("border_id");
            const borderName = document.getElementById("border_name");
            const borderDesc = document.getElementById("border_desc");

            if(!this.id || !this.name || this.description.length<20){
                if (!this.id) {
                    errorId.style.display = "flex";
                    borderId.classList.add("error-form");
                }
                else{
                    errorId.style.display = "none";
                    borderId.classList.remove("error-form");
                }
                if (!this.name) {
                    errorName.style.display = "flex";
                    borderName.classList.add("error-form");
                }
                else{
                    errorName.style.display = "none";
                    borderName.classList.remove("error-form");
                }
                if (this.description.length<20) {
                    errorDesc.style.display = "flex";
                    borderDesc.classList.add("error-form");
                }
                else{
                    errorDesc.style.display = "none";
                    borderDesc.classList.remove("error-form");
                }
               
                return;
            }
            this.formSubmitted = true
            const Team = { id: this.id, name: this.name, description: this.description };
            console.log('form.addTeam', Team);

            //permet de faire remonter un event au composant parent
            //l'event sera écouté à l'appel du composant enfant via @change-state="function"
            this.$emit('addTeam', Team);

            this.id = '';
            this.name ='';
            this.description = '';
            errorId.style.display = "none";
            errorName.style.display = "none";
            errorDesc.style.display = "none";
            borderId.classList.remove("error-form");
            borderName.classList.remove("error-form");
            borderDesc.classList.remove("error-form");
            
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
                        <input id="border_id" type="text" v-model="id"/>
                        <div id="error_id" style="display:none; color:#dc3545;">
                            Team Id is required
                        </div>
                    </div>

                    <div id="verif-nom">
                        <label for="validationCustom02" class="form-label">Nom</label><br/>
                        <input id="border_name" type="text" v-model="name"/>
                        <div id="error_name" style="display:none; color:#dc3545;">
                            Team name is required
                        </div>

                    </div>

                    <div id="verif-desc">
                        <label for="validationCustom03" class="form-label">Description</label><br/>
                        <textarea id="border_desc" v-model="description"/>
                        <div id="error_desc" style="display:none; color:#dc3545;">
                            Team description must be at least 20 characters
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