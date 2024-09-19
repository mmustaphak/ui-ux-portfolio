import {createClient} from "@sanity/client"

export const client = createClient({
    projectId: "p1zjsjf8",
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-07-19'
})


