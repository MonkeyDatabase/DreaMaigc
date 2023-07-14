import { createContentLoader } from 'vitepress'

interface Post {
    url: string,
    title: string,
    description: string,
    tag: string,
    create_date: Date,
    excerpt: string | undefined
}

export default createContentLoader('posts/*/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw.map(
            ({url, frontmatter, excerpt}) => ({
                url,
                title: url.split(/[/.]/).slice(-2, -1)[0],
                description: frontmatter.description,
                tag: url.split('/').slice(-2, -1)[0],
                create_date: frontmatter.create_date,
                excerpt
            })
        ).sort((a, b) => b.create_date - a.create_date)
    }
})

