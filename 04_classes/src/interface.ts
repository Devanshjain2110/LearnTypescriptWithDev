interface takePhoto {
    cameraMode: string
    filter : string
    burst : number
}

interface story{
    createStory() : void
}

class Instagram implements takePhoto, story {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
      
    ){ }

    public createStory(){
            console.log("Story was created ")
    }
}