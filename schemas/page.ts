export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'pageBuilder',
            title: 'Page Sections',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'team' },
                { type: 'taskShowcase' },
                { type: 'contactSection' },
            ],
        },
    ],
}
