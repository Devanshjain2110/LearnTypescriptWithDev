abstract class takePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia() : void 
  getReel() : number {
    return 9
  }
}

class Insta extends takePhoto{
    constructor(public cameraMode: string, public filter: string, public burst : number){
        super ( cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}

const devs = new Insta("front", "paris",23)
devs.getReel()
