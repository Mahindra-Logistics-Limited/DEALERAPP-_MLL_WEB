import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root',
})


export class ApiUrls {

    mainUrl= 'http://mpoddmob.devmll.com/';


    authenticateUsers = 'api/login/authenticateUsers';


}
