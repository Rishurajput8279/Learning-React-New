import conf from "../conf/conf.js";


import { Client, ID , Databases,Storage,Query } from "appwrite";

export class Services{
    client = new Client();

    databases;
    bucket;
    constructor (){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title, slug, content, featuredImage, status, userID}) {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID
                }
            )
        }
        catch(error) {
            console.log("AppWrite Service:: createPost :: Error", error);

        }
    }
    async updatePost(slug, {title, content, featuredImage, status, userID}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }
        catch(error){
            console.log("AppWrite Service:: updatePost :: Error", error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log("AppWrite Service:: deletePost :: Error", error);
            return false;
        }
    }
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatebaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("AppWrite Service:: getPost :: Error", error);
        }
        return false;
    }
    async getPosts(queries = [Query.equal('status', 'active')]) {
        try{
            return await this.databases.listDocuments(
                conf.appwriteCollectionId,
                conf.appwriteDatebaseId,
                queries
                // [
                //     Query.equal('status', 'active')
                // ]
            )
        }
        catch(error){
            console.log("AppWrite Service:: getPosts :: Error", error);
            return false;
        }
    }
    // file uppload methord
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("AppWrite Service:: uploadFile :: Error", error);
            return false;
        }   
    }
    async deleteFile(fileID){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileID
            )
            return true;
        }
        catch(error){
            console.log("AppWrite Service:: deleteFile :: Error", error);
            return false;
        }
    }
    getFilePreview(fileID) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
    }


}

const services = new Services();


export default services;


