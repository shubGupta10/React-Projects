import config from "../config/config"
import { Client, Account, ID } from "appwrite";



//hum constructor ko use kr rhe taaki auth ke main client function ko laga ske
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }




    //createAccount is a function which basicallly creates a account by taking email, pass and name; 
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique, email, password, name);
            if (userAccount) {
                //here we will call another method
                //yha hum login call kr lenge means agar user ne account create kr liya than he/she can login.
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }






    //now we are going to create a login method that we will use for login the users.

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }






    //let suppose we are on homepage and want to check ki hum login hai yaa nhi then usko check krne ke liye ye method w'll write
    async getCurrentUser() {
        try {
            return await this.account.get();
            //here we are using get() so we can check whether a user login or not.
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error ", error)
        }
        return null;
    }



    //Now we are going to create a logout session , we will take deleteSession() to delete the whole session means logout it.
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: logout :: error ", error);
        }
    }
}

//here we are using authService as a object;
const authService = new AuthService();


//the best thing about this authService is it is an object so we can just access it like 'authService.logout()' , this is really a good practice  
export default authService