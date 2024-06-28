import React from 'react'
import Hero from '@/components/Hero';
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client';
import BlogContent from '@/components/BlogContent';

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
    categories[]->
} | order(_createdAt asc)`;
 

export default async function page(){
const posts = await client.fetch(query)
  
  return (
    <div>

      <Hero/>
      <BlogContent posts={posts} />

    </div>
  )
}
