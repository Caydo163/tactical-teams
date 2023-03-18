export default {
    props: {
        allTeams : Array,
    },

    data: function() {
        return {
            teamA : '',
            teamB : '',
            scoreA : 0,
            scoreB : 0,
        }
    },
    methods: {
        appelApi: async function() {
            if(this.teamA !== '' && this.teamB !== '') {
                console.log(`${this.teamA} (${this.scoreA}) - ${this.teamB} (${this.scoreB})`);
                let request = await ResultService.postResult();
                console.log(request);
            } 
        }
        
    },
    
    template: `
        <form @submit.prevent class="form m-5 w-50">
            <div class="row">
                <div class="col">
                    <label for="teamA" class="form-label">Team A</label><br/>
                    <select class="form-select" aria-label="Default select example" name="teamA" v-model="teamA">
                        <option value="" selected disabled>Choisissez une équipe</option>
                        <option v-for="team in allTeams" :value="team.id">{{team.name}} ({{team.id}})</option>
                    </select>
                </div>

                <div class="col">
                    <label for="teamB" class="form-label">Team B</label><br/>   
                    <select class="form-select" aria-label="Default select example" name="teamB" v-model="teamB">
                        <option value="" selected disabled>Choisissez une équipe</option>
                        <option v-for="team in allTeams" :value="team.id">{{team.name}} <i>({{team.id}})</i></option>
                    </select>
                </div>
            </div>

            <div class="row mt-3">
                <div id="verif-nom" class="col">
                    <label for="scoreA" class="form-label">Score Team A</label>
                    <input type="number" class="form-control" min="0" max="999" v-model="scoreA" id="scoreA">
                </div>

                <div id="verif-nom" class="col">
                    <label for="scoreB" class="form-label">Score Team B</label>
                    <input type="number" class="form-control" min="0" max="999" v-model="scoreB" id="scoreB">
                </div>
            </div>

            <div class="row mt-4 justify-content-center">
                <button class="col-3 btn btn-danger" type="submit" @click="appelApi">Envoyer</button>
            </div>
        </form>
    `
}