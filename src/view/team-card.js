export default {
    props: {
        id: String,
        name: String,
        description: String
    },
    template: `
        <article>
            <span :title="id" style="cursor: pointer">
                {{ id }}
            </span>
            <p>{{ name }}</p>
            <p>{{ description }}</p>
        </article>
    `
}