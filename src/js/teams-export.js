// document.querySelector('#export_button').addEventListener('click', () => {
//     console.log('click');
//     const card_teams = document.querySelectorAll('#container_teams div');
//     let teams = [];

//     card_teams.forEach(element => {
//         let name = element.querySelector('#name').textContent;
//         let id = element.querySelector('#id').textContent;
//         let description = element.querySelector('#description').textContent;
//         teams.push({"id" : id, "name" : name, "description" : description});
//     });
    
//     console.log('teams => ',teams);
// });

function exportTeams() {
    const card_teams = document.querySelectorAll('#container_teams .card_team');
    let teams = [];

    card_teams.forEach(element => {
        let team = new Object();
        team.id = element.querySelector('#id').textContent;
        team.name = element.querySelector('#name').textContent;
        team.description = element.querySelector('#description').textContent;
        teams.push(team);
    });

    let json = JSON.stringify(teams);
    console.log('teams => ',teams);

    // Création du fichier à télécharger avec son url
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
}