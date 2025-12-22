export default {
    name: 'team',
    title: 'Team Section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            initialValue: "À l'origine du réseau de bras droit"
        },
        {
            name: 'introText',
            title: 'Intro/Philosophy Text',
            type: 'text',
            description: 'Text appearing below the heading',
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'teamMember',
                    title: 'Team Member',
                    fields: [
                        { name: 'name', type: 'string', title: 'Name' },
                        { name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } },
                        {
                            name: 'description',
                            title: 'Description (Bio)',
                            type: 'array',
                            of: [{ type: 'text', rows: 3 }]
                        },
                        { name: 'alumni', type: 'string', title: 'Alumni (Company)' },
                        { name: 'diploma', type: 'string', title: 'Diploma/Education' },
                        { name: 'linkedinUrl', type: 'url', title: 'LinkedIn URL' },
                    ]
                }
            ]
        },
        {
            name: 'bottomText',
            title: 'Bottom Text',
            type: 'text',
            description: 'Text appearing at the bottom of the section',
        }
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Team Section',
                subtitle: 'Team',
            }
        },
    }
}
