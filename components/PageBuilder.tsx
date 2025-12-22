import React from 'react'
import Team from '../components/Team'
import TaskShowcase from '../components/TaskShowcase'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

// Map Sanity schema types to React components
const Components: Record<string, React.ComponentType<any>> = {
    team: Team,
    taskShowcase: TaskShowcase,
    contactSection: Contact,
    hero: Hero,
    // Add others as we migrate them
}

interface PageBuilderProps {
    blocks: any[]
}

const PageBuilder: React.FC<PageBuilderProps> = ({ blocks }) => {
    if (!blocks || !Array.isArray(blocks)) return null

    return (
        <>
            {blocks.map((block) => {
                const Component = Components[block._type]
                if (!Component) {
                    console.warn(`No component found for block type: ${block._type}`)
                    return null
                }
                // Pass all block data as props to the component
                return <Component key={block._key} {...block} />
            })}
        </>
    )
}

export default PageBuilder
