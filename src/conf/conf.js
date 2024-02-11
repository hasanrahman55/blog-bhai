const conf ={
    appwriteEndPoint:String(import.meta.env.VITE_appwrite_ENDPOINT),
    appwritePrjectId:String(import.meta.env.VITE_appwrite_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_appwrite_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_appwrite_COLLECTION_ID),
    appwriteEndBucketId:String(import.meta.env.VITE_appwrite_BUCKET_ID),
    

}


export default conf;