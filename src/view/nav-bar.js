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
            
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav" >
                    <li class="nav-item" v-for="link in links">
                        <a class="nav-link" aria-current="page" @click="changePage">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}