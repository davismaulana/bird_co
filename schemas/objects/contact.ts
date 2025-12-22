export default {
    name: 'contactSection',
    title: 'Contact Section',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Vous avez des questions'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'calendlyLink',
            title: 'Calendly Link',
            type: 'url',
        },
        {
            name: 'formHeading',
            title: 'Form Heading',
            type: 'string',
            initialValue: 'Laissez-nous un message'
        }
    ],
    preview: {
        select: {
            title: 'heading',
        },
        prepare({ title }) {
            return {
                title: title || 'Contact Section',
                subtitle: 'Contact Info & Form',
            }
        },
    }
}
