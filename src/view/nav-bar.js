export default {
    props: {
        links : Array,
    },

    template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" :href="link[0]">
                <img src="#" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Tactical Teams
            </a>
            
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" :href="links[0]">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="links[1]">Teams</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="links[2]">Results</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}