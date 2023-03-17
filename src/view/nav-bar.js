export default {
    props: {
        links : Array,
    },

    methods: {
        changePage : function(event) {
            let index = this.links.indexOf(event.target.textContent);
            let pages = document.querySelectorAll('#app div.onglet');

            pages.forEach(page => { page.classList.remove('show'); })
            pages[index].classList.add('show');
            
            let links = document.querySelectorAll('nav li');
            links.forEach(link => { link.classList.remove('active'); })
            links[index].classList.add('active');
        }
    },

    template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="#" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Tactical Teams
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item" v-for="link in links">
                        <a class="nav-link" aria-current="page" @click="changePage">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}