import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { UserAccount } from '../models/useraccount/useraccount.model';

@Injectable()
export class UserAccountDetailService {

    private userAccountDetailRef = this.db.list<UserAccount>('useraccount');

    constructor(private db: AngularFireDatabase ){}

    getUserAccountDetail(){
        return this.userAccountDetailRef;
    }

    addUserAccountDetail(useraccount: UserAccount){
        return this.userAccountDetailRef.push(useraccount);
    }

    updateUserAccountDetail(useraccount: UserAccount){
        return this.userAccountDetailRef.update(useraccount.key, useraccount);
    }
    
    removeUserAccountDetail(useraccount: UserAccount){
        return this.userAccountDetailRef.remove(useraccount.key);
    }

    

}