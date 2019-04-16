
 export class Mobile{

    constructor(public mobileId:number,public mobileName:string,public mobileCost:number){}
    printMobileDetails(){
        console.log(
            `Mobile Id:${this.mobileId},
            Mobile Name:${this.mobileName}
            Mobile Cost:${this.mobileCost}`
        )
    }

}