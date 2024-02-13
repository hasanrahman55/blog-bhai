import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf"

export class Service {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteEndPoint).setProject(conf.appwritePrjectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }


    async createBlog({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.database.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featureImage, status, userId })

        } catch (error) {
            console.log(error);
        }
    }

    async updateBlog(slug, { title, content, featureImage, status }) {
        try {
            return await this.database.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featureImage, status })

        } catch (error) {
            console.log(error);
        }
    }

    async deleteBlog(slug) {
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            console.log(error);

            return false;
        }
    }


    async getBlog(slug) {
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            console.log(error);

            return false;
        }
    }

    async getBlogs(queries =[Query.equal("status","active")]){

        try {
            return this.database.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
            
        } catch (error) {
            console.log(error);

            return false;
            
        }

    }


    async uploadFile(file){
        try {
               return await this.storage.createFile(conf.appwriteEndBucketId,ID.unique(),file)
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(conf.appwriteEndBucketId,fileId)
            return true;
            
        } catch (error) {
            console.log(error);
        }

    }

     filePreview(fileId){
        try {
          return   this.storage.getFilePreview(conf.appwriteEndBucketId,fileId)
            
        } catch (error) {
            console.log(error);
        }
    }

}


const service = new Service();

export default service;