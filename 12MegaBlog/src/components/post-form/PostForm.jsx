import React, { use } from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appWriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({Post}) {
    const {register, handleSubmit, watch, setValue, control , getValues} = useForm({
        defaultValues:{
            title: Post?.title || '',
            slug: Post?.slug || '',
            content: Post?.content || '',
            status: Post?.status || 'active',

        },
    })
    const navigate = useNavigate()
    const userData = useSelector((state) => state.user.userData)

    const Submit = async (data) => {
        if(Post){
            const file = data.image[0] ? appWriteService.uploadFile(data.image[0]):  null;
            if(file){
                appWriteService.deleteFile(Post.featureImage)
            }
            const dbPost= await appWriteService.updatePost
            (postMessage.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            })
            if(dbPost)  {
                 navigate(`/post/${dbPost.slug}`)
            }
            
        }
        else{
            const file= await appWriteService.uploadFile(data.image[0])
                    
        }
    }
  return (
    
  )
}

export default PostForm