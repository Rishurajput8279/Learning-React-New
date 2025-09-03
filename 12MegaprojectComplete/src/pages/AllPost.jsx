import React, { use } from 'react'
import { useState,useEffect } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard,Container } from '../components/index';
import { set } from 'react-hook-form';
function AllPost() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{},[])
    appwriteService.getPosts().then([]).then((posts)=>{
        if(posts ){
            setPosts(posts.documents);
        }
    });
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flew-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1'>
                        <PostCard post={post}></PostCard>
                    </div>
                ))}

            </div>
        </Container>
    </div>
  )
}

export default AllPost