import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = 'project-id-placeholder'
const dataset = 'production'

// Basic check if the user has configured the project
const isConfigured = projectId !== 'project-id-placeholder'

export const client = isConfigured
    ? createClient({
        projectId,
        dataset,
        useCdn: true,
        apiVersion: '2023-05-03',
    })
    : {
        fetch: async () => {
            console.warn('Sanity Project ID is not configured. Please set it in lib/sanity.ts')
            return null
        }
    } as any

const builder = isConfigured ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
    if (!builder || !source) return { image: () => '' } // Fallback for missing config or image
    return builder.image(source)
}
