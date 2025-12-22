export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
        },
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'ctaText',
            title: 'CTA Button Text',
            type: 'string',
        },
        {
            name: 'ctaLink',
            title: 'CTA Button Link',
            type: 'string',
        }
    ],
    preview: {
        select: {
            title: 'heading',
            media: 'backgroundImage',
        },
        prepare({ title, media }) {
            return {
                title: title || 'Hero Section',
                subtitle: 'Hero',
                media: media,
            }
        },
    }
}
