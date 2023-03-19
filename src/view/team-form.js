export default {
    data: function() {
        return {
            id: '',
            name: '',
            description: '',
            erreurId:'',
            erreurNom:'',
            erreurDesc:'',
            errorColor: ERROR_COLOR_FORM
        }
    },
    methods: {
        addTeam: function() {
            const errorId = document.querySelector('#error_id');
            const errorName = document.querySelector('#error_name');
            const errorDesc = document.querySelector('#error_desc');
            const borderId = document.querySelector('#id');
            const borderName = document.querySelector('#name');
            const borderDesc = document.querySelector('#desc');

            if(!this.id || isNaN(this.id) || this.name.length<5 || this.description.length<20){
                if (!this.id || isNaN(this.id)) {
                    errorId.style.display = "flex";
                    borderId.classList.add("error-form");
                }
                else{
                    errorId.style.display = "none";
                    borderId.classList.remove("error-form");
                }
                if (!this.name.length<5) {
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

            this.clearForm();
            
        },

        clearForm: function() {
            const errorId = document.querySelector('#error_id');
            const errorName = document.querySelector('#error_name');
            const errorDesc = document.querySelector('#error_desc');
            const borderId = document.querySelector('#id');
            const borderName = document.querySelector('#name');
            const borderDesc = document.querySelector('#desc');
            
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
                <form @submit.prevent class="row justify-content-center">
                    <div class="row justify-content-center py-4">
                        <h3 class="col-8 p-0">Ajouter une équipe</h3>
                    </div>

                    <div id="verif-id" class="col-md-3">
                        <label for="id" class="form-label">Id</label><br/>
                        <input id="id" type="text" v-model="id" class="form-control"/>
                        <div class="error_msg" id="error_id">
                            L'identifiant est obligatoire et doit être un entier
                        </div>
                    </div>

                    <div id="verif-nom" class="col-md-5">
                        <label for="name" class="form-label">Nom</label><br/>
                        <input id="name" type="text" v-model="name" class="form-control"/>
                        <div class="error_msg" id="error_name">
                            Le nom est obligatoire et doit faire au moins 5 caractère
                        </div>

                    </div>

                    <div id="verif-desc" class="col-md-8">
                        <label for="desc" class="form-label">Description</label><br/>
                        <textarea id="desc" v-model="description" class="form-control"/>
                        <div class="error_msg" id="error_desc">
                            La description est obligatoire et doit faire au moins 20 caractère
                        </div>
                    </div>
                    <input type="hidden" id="add_or_edit" value="add"/>
                    <div class="row justify-content-center mt-4">
                        <a class="col-1 align-items-center justify-content-center"><i class="bi bi-trash3" id="icon_delete" @click="clearForm"></i></a>
                        <button class="col-7 btn btn-danger" type="submit" @click="addTeam">Envoyer</button>
                    </div>
                </form>
                </section>`
}