import { defineField, defineType } from "sanity";


export default defineType( {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        defineField(
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength : 96
            }
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: "author"},
        }),
        defineField({
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{type: "reference", to: {type: "category"} }],
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "blockContent",
        }),
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mianImage",
        },
        prepare(selection){
            const {author} = selection;
            return{ ...selection, subtitle: author && `by ${author}`  }
        },
    },
});
