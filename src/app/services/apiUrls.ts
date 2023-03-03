import {Injectable} from "@angular/core";


@Injectable({
    providedIn: 'root',
})


export class ApiUrls {

    mainUrl= 'http://mpoddmobuat.devmll.com/';
    // mainUrl = 'http://localhost:3000/';


    authenticateUsers = 'api/login/authenticateUsers';


    // Consignment List

    getAllConsignmentTestList= 'api/consignment/getAllConsignmentTest'
    getConsignmentStatus= 'api/consignment/getConsignmentStatus'
    allConsignmentNotifications= 'api/consignment/getAllConsignmentNotification'


}
