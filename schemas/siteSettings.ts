export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'primaryColor',
            title: 'Primary Color',
            type: 'string',
            description: 'Hex color code (e.g. #FF0000)',
        },
        {
            name: 'secondaryColor',
            title: 'Secondary Color',
            type: 'string',
            description: 'Hex color code',
        },
        {
            name: 'fontFamily',
            title: 'Font Family',
            type: 'string',
            options: {
                list: [
                    { title: 'Inter', value: 'Inter, sans-serif' },
                    { title: 'Roboto', value: 'Roboto, sans-serif' },
                    { title: 'Outfit', value: 'Outfit, sans-serif' },
                    { title: 'Playfair Display', value: 'Playfair Display, serif' },
                ],
                layout: 'radio'
            }
        }
    ],
}
