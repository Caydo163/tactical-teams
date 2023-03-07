export default {
    props: {
        links : Array,
    },

    template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" :href="links[0]">
                <img src="#" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Tactical Teams
            </a>
            
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav" v-for="link in links">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" :href="link.url">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}