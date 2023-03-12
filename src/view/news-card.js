export default {
    props: {
        title : String,
        date : String,
        link : String
    },

    methods : {
        dateConverter : function(date_string) {
            const date = new Date(date_string);
            const day = (date.getDate() < 10) ? '0'+date.getDate() : date.getDate();
            const month = (date.getMonth() < 10) ? '0'+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
            const hour = (date.getHours() < 10) ? '0'+date.getHours() : date.getHours();
            const minute = (date.getMinutes() < 10) ? '0'+date.getMinutes() : date.getMinutes();
            return [day,month,date.getFullYear()].join('/') + ' ' + [hour, minute].join('h');
        }
    },

    template: `
        <div class="card rounded-4 m-4" style="width: 15rem;">
            <div class="card-body p-3">
                <h5 class="card-title">{{ title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i>{{ dateConverter(date) }}</i></h6>
                <div class="d-md-flex justify-content-md-end">
                    <a type="button" class="btn btn-outline-primary text-right" :href="link" target="_blank">Voir l'article</a>
                </div>
            </div>  
        </div>
    `
}