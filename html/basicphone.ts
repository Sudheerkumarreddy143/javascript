import { Mobile} from "./example";
 export class BasicPhone extends Mobile{

    constructor(public mobileId:number,public mobileName:string,public mobileCost:number){

        super(mobileId,mobileName,mobileCost);
    }
    printMobileDetails(){
        super.printMobileDetails();
        var mobileType="basic Phone";

        console.log(`     mobile type:${mobileType}`);
        
    }

 }