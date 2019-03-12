export class Cerveja{
    litro: string;
    marca: string;
    img: string;
    uid: string;

    constructor(objFirebase : any){
        this.litro = objFirebase.litro
        this.marca = objFirebase.marca
        this.img = objFirebase.img
    }
}