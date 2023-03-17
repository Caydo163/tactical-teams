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
            let request = await ResultService.postResult();
            console.log(request);
        }
        
    },
    
    template: `
    <section>
        <form @submit.prevent class="form">
            <div class="row">
                <div class="col">
                    <label for="teamA" class="form-label">Team A</label><br/>
                    <select class="form-select" aria-label="Default select example" name="teamA" v-model="teamA">
                        <option value="" selected disable>Choisissez une équipe</option>
                        <option v-for="team in allTeams" value="{{ team.id }}">{{team.name}} ({{team.id}})</option>
                    </select>
                </div>

                <div class="col">
                    <label for="teamB" class="form-label">Team B</label><br/>   
                    <select class="form-select" aria-label="Default select example" name="teamB" v-model="teamB">
                        <option value="" selected disable>Choisissez une équipe</option>
                        <option v-for="team in allTeams" value="{{ team.id }}">{{team.name}} <i>({{team.id}})</i></option>
                    </select>
                </div>
            </div>

            <div class="row">
                <div id="verif-nom" class="col">
                    <label for="scoreA" class="form-label">Score Team A</label>
                    <input type="number" class="form-control" min="0" max="999" id="scoreA">
                </div>

                <div id="verif-nom" class="col">
                    <label for="scoreB" class="form-label">Score Team B</label>
                    <input type="number" class="form-control" min="0" max="999" id="scoreB">
                </div>
            </div>

            <div class="row">
                <button class="col btn btn-primary" type="submit" @click="appelApi">Envoyer</button>
            </div>
        </form>
    </section>
    `
}