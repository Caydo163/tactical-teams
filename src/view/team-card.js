export default {
    props: {
        id : String,
        name : String,
        description : String
    },

    methods : {
        showDescription : function(desc) {
            return (desc.length > 20) ? desc.substr(0,20) + ' ...' : desc;
        },
        editCard : function() {
            document.querySelector('#id').value = this.id;
            document.querySelector('#name').value = this.name;
            document.querySelector('#desc').value = this.description;
            document.querySelector('#add_or_edit').value = 'edit';
        }
    },

    template: `
        <div class="card rounded-4 m-4 card_team" style="width: 15rem;">
            <div class="card-body p-3">
                <h5 class="card-title" id="name">{{ name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i id="id">{{ id }}</i></h6>
                <p class="card-text" id="description">{{ showDescription(description) }}</p>
                <div class="d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-danger text-right" @click="editCard">Editer</button>
                </div>
            </div>  
        </div>
    `
}