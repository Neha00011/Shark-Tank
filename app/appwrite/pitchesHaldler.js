import { Account, Client, Databases, ID, Permission, Role, Storage } from "appwrite";
import conf from "../conf/conf";


export class AppwritePitches {
    client = new Client();
    account;
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPitchesDatabase(DocumentID) {
        try {
            return await this.databases.getDocument(
                conf.appwriteUserDatabaseID,
                conf.appwriteCollectionId,
                DocumentID
            );
            
        } catch (error) {
            console.log(`Appwrite Get Pitches Database Error: ${error}`);
        }
    }
}

const appwritePitches = new AppwritePitches();

export default appwritePitches;