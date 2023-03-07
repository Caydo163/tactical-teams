export default {
    props: {
        id : String,
        name : String,
        description : String
    },

    methods : {
        showDescription : function(desc) {
            return (desc.length > 20) ? desc.substr(0,20) + ' ...' : desc;
        }
    },

    template: `
        <div class="card rounded-4 m-4" style="width: 15rem;">
            <div class="card-body p-3">
                <h5 class="card-title">{{ name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i>{{ id }}</i></h6>
                <p class="card-text">{{ showDescription(description) }}</p>
                <div class="d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-primary text-right">Voir plus</button>
                </div>
            </div>  
        </div>
    `
}