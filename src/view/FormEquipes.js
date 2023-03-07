export default {
    data: function() {
        return {
            id: '',
            name: '',
            errorMessage: '',
            errorColor: ERROR_COLOR
        }
    },
    methods: {
        addTeam: function() {
            this.errorMessage = [];
            if(!this.id || !this.name){
                if (!this.id) {
                    this.errorMessage.push('Team Id is required');
                }
                if(!this.name){
                   this.errorMessage.push('Team name is required');
                }
                return;
            }

            const Team = { id: this.id, name: this.name };
            console.log('form.addTeam', Team);

            //permet de faire remonter un event au composant parent
            //l'event sera écouté à l'appel du composant enfant via @change-state="function"
            this.$emit('addTeam', Team);

            this.title = '';
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
                        <label>Id</label><br/>
                        <input type="text" v-model="id"/>
                    </div>

                    <div>
                        <label>Nom</label><br/>
                        <input v-model="name"/>
                    </div>

                    <input type="submit" value="Envoyer" @click="addTeam"/>
                </form>
            </section>`
}