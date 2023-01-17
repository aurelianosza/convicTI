import { User } from '../models/user.model';

class Authetication {

    async loginWithEmailAndPassword(email: string, password: string) : Promise<User>
    {
        const user = await User.findAll({
            limit  : 1,
            where : {
                email : email
            }
        });

        if(user.length == 0)
        {
            throw new Error('Has no email registered on system.');
        }

        if(user[0].password != User.DEFAULT_PASSWORD)
        {
            throw new Error('Password is wrong.');
        }

        return Promise.resolve(user[0]);


    }


}
