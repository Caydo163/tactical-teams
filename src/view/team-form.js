export default {
    data: function() {
        return {
            id: '',
            name: '',
            description: '',
            errorMessage: '',
            errorColor: ERROR_COLOR
        }
    },
    methods: {
        addTeam: function() {
            this.errorMessage = [];
            if(!this.id || !this.name || !this.description){
                if (!this.id) {
                    this.errorMessage.push('Team Id is required');
                }
                if(!this.name){
                   this.errorMessage.push('Team name is required');
                }
                if(!this.description){
                    this.errorMessage.push('Team description is required');
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

                <form @submit.prevent>
                    <div v-if="errorMessage.length > 0" v-bind:style="{ color: errorColor}">
                        <ul>
                            <li v-for="(message, index) in errorMessage" :key="index">{{ message }}</li>
                        </ul>
                    </div>
              
                    <div>
                        <label for="validationCustom01" class="form-label">Id</label><br/>
                        <input type="text" class="form-control" id="validationCustom01" v-model="id" required/>
                        <div class="invalid-feedback">
                            Veuillez fournir un id
                        </div>
                    </div>

                    <div>
                        <label for="validationCustom02" class="form-label">Nom</label><br/>
                        <input type="text" class="form-control" id="validationCustom02" v-model="name" required/>
                        <div class="invalid-feedback">
                            Veuillez fournir un nom
                        </div>

                    </div>

                    <div>
                        <label for="validationCustom03" class="form-label">Description</label><br/>
                        <textarea class="form-control" id="validationCustom03" v-model="description" required/>
                        <div class="invalid-feedback">
                            Veuillez fournir une descripion
                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit" @click="addTeam">Envoyer</button>
                </form>
            </section>`
}