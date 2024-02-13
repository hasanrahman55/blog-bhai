import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteEndPoint).setProject(conf.appwritePrjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })

            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;

        }

    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            console.log("getCurrentuser  error");

        }
        return null;
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailSessions(email, password)

        } catch (error) {
            throw error;
        }
    }


  async  logOut(){
    try {
     return await  this.account.deleteSessions();
        
    } catch (error) {
      console.log("logout error");
    }

    }
}


const authService =new AuthService();
export default authService;
