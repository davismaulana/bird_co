export default {
    name: 'taskShowcase',
    title: 'Task Showcase / Services',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            initialValue: 'De la stratégie à l\'exécution'
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
        },
        {
            name: 'tasks',
            title: 'Tasks/Services',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'serviceItem',
                    title: 'Service Item',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'iconActive', type: 'image', title: 'Active Icon' },
                        { name: 'iconInactive', type: 'image', title: 'Inactive Icon' },
                        {
                            name: 'visualType',
                            title: 'Visual Mockup Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'KPI Dashboard', value: 'kpiDashboard' },
                                    { title: 'Liquidity Chart', value: 'liquidityChart' },
                                    { title: 'Financial Report', value: 'financialReport' },
                                    { title: 'Transactional Support', value: 'transactionalSupport' },
                                    { title: 'Due Diligence', value: 'dueDiligence' },
                                    { title: 'On-Site Intervention', value: 'onSiteIntervention' },
                                    { title: 'Custom Image', value: 'customImage' },
                                ]
                            }
                        },
                        {
                            name: 'customImage',
                            title: 'Custom Visual Image',
                            type: 'image',
                            hidden: ({ parent }) => parent?.visualType !== 'customImage'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Service Showcase',
                subtitle: 'Services',
            }
        },
    }
}
