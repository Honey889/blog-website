import { PortableText, groq } from 'next-sanity';
import React from 'react'
import { Post } from '../../../../../types';
import { client, urlFor } from '@/lib/createClient';
import Container  from '@/components/Container';
import Image from 'next/image';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { RichText } from '@/components/RichText';

interface Props {
  params: {
    slug: string;
  }
}

export const generateStaticParams = async()=>{
  const query = groq`*[_type == 'post']{
  slug
  }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current );
  return slugRoutes?.map((slug) => ({
    slug,
  }))
};

const slugPage = async({params: {slug}}: Props) => {
 const query = groq`*[_type == 'post' && slug.current == $slug][0]{
 ...,
 body,
 author->
 }`;
 const post: Post = await client.fetch(query, {slug});


 
  
  return (
    <Container className='mb-10'>
      <div className='flex items-center mb-10'>
        <div className='w-full md:w-2/3'>
          <Image src={urlFor(post?.mainImage).url()}
          height={500}
          width={500}
          alt='main image'
          className='object-cover w-full'/>
        </div>
        <div className='w-1/3
         hidden md:inline-flex flex-col items-center gap-5 px-4'>
        <Image src={urlFor(post?.author?.image).url()}
        alt='author image'
        height={200}
        width={200}
        className='w-32 h-32 rounded-full object-cover'
        />
        <p className='text-2xl text-[#5442ae] font-semibold uppercase'>{post?.author.name}</p>
        <p className='text-center tracking-wide text-sm'>{post?.author.description}</p>
        <div className='text-black hidden md:inline-flex items-center gap-4 '>
        <BsYoutube className='text-2xl text-red-600 duration-200'/>
       <BsFacebook className='text-2xl text-blue-500 duration-200'/>
       <BsGithub className='text-2xl text-gray-600 duration-200' />
       <BsLinkedin className='text-2xl text-blue-400 duration-200'/>
       <BsInstagram className='text-2xl text-pink-600 duration-200'/>
        </div>
    </div>
      </div>

      <div>
        <PortableText value={post?.body} components={RichText}/>
      </div>
    </Container>
  )
}

export default slugPage
