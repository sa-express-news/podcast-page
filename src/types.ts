export interface Podcast {
    image: string,
    title: string,
    description: string,
    links: {
        url: string,
        name: string
    }[]
}