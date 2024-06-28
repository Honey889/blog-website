// // sanity/pet.ts
// export default {
//     name: 'category',
//     type: 'document',
//     title: 'Category',
//     fields: [
//         {
//             name: 'name',
//             type: 'string',
//             title: 'Name'
//         }
//     ]
// }


import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})