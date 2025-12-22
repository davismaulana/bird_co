import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../lib/sanity'
import PageBuilder from './PageBuilder'
import LoadingScreen from './LoadingScreen'

interface PageData {
    title: string
    pageBuilder: any[]
}

const SanityPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const [data, setData] = useState<PageData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPage = async () => {
            setIsLoading(true)
            try {
                // Default to 'home' if no slug, or handle routing logic elsewhere
                const querySlug = slug || 'home'
                const result = await client.fetch(
                    `*[_type == "page" && slug.current == $slug][0]`,
                    { slug: querySlug }
                )
                setData(result)
            } catch (error) {
                console.error('Failed to fetch page:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchPage()
    }, [slug])

    if (isLoading) return <LoadingScreen onLoaded={() => { }} />

    if (!data) return <div className="text-center py-20">Page not found</div>

    return (
        <div className="sanity-page">
            {/* You might want to render a dynamic Header/Footer or wrap this in Layout */}
            <PageBuilder blocks={data.pageBuilder} />
        </div>
    )
}

export default SanityPage
