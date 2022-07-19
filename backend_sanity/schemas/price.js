export default {
    name: 'price',
    title: 'Tarifs',
    type: 'document',
    fields: [
        {
            name: 'titre',
            title: 'Titre',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'prix',
            title: 'Prix',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
}