export default {
    name: 'gallery',
    title: 'galerie',
    type: 'document',
    fields: [
        {
            name: 'titre',
            title: 'Titre',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },
    ],
}