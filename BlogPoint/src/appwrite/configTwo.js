import config from '../config/config.js';
import { Client,  ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    //here we are creating a method for create post and this method will take some paras 
    //we use createDocument() for this.
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId, 
                slug, //yha hum slug le rhe h documentID ki jagah
                      //slug se hi har ek post matlb documentID hoga means slug hame uss post ka ek documentID dega taaki hum uss post ko pehchan sake ki kaun se post hai, ye hum update waale me krenge better tarike se
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost :: error" , error);
        }
    }


    //now we are going to build method to update the post
    async updatePost(slug, {title, content, featuredImage, status})
                   //here we are taking slug outside bcz we need doucmentID to check ki kaunse post ko update krne waale h.
    {

        try {
            return await this.databases.updateDocument(
            config.appwriteDatabaseId, //ye database id lega
            config.appwriteCollectionId, //collection id bhi lega
            slug, //ye lega taaki post pehchan sake
            {
                title,
                content,
                featuredImage, 
                status,
            }
            )
        } catch (error) {
            console.log("appwrite service :: updatePost :: error" , error);
        }
    }


    //now we are creating to delete the post
    //yha hum bs slug lenge
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deletePost :: error", error);
            return false;
        }
    }


    //when we want a single post to work on

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error);
            return false;
        }
    }


    //now here we are going to make a method to get all the post so we can use listDocument() for it but here we want only those post who are active so we use Queries here.
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("appwrite service :: getPosts :: error" , error);
            return false;
        }

    }


    //File Related services 

    //here we are going to make methods to upload file , if user wants to upload file then he/she can use it

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error", error);
            return false;
        }
    }



    //now user can delete file also
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error);
            return false;
        }
    }



    // user can preview the file.
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service