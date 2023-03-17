export default {
    methods: {
        exportTeams : function(event) {
            const card_teams = document.querySelectorAll('#container_teams .card_team');
            let teams = [];
        
            card_teams.forEach(element => {
                let team = new Object();
                team.id = element.querySelector('#id').textContent;
                team.name = element.querySelector('#name').textContent;
                team.description = element.querySelector('#description').textContent;
                teams.push(team);
            });
            if(teams.length > 0) {  
                let json = JSON.stringify(teams);
                console.log('Export teams => ',json);

                // Création du fichier à télécharger avec son
                const blob = new Blob([json], {type: 'application/json'});
                const url = URL.createObjectURL(blob);
            
                // Création lien + clic auto
                const link = document.createElement('a');
                link.href = url;
                link.download = 'data.json';
                document.body.appendChild(link);
                link.click();
                
                // Suppression lien
                URL.revokeObjectURL(url);
                document.body.removeChild(link);
            } else {
                console.log('Export teams => Vide')
            }
        }
    },

    template: `<button class="btn btn-outline-primary" id="export_button" @click="exportTeams">Exporter</button>`
}