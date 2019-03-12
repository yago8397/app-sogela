import { Cerveja } from "./cerveja";


export class Promo{
    uid: string;
    preco: string;
    titulo: string;
    dataCad: string;
    dataExp: string;
    imgCerveja: string;
    imgLoja: string;
    cerveja : string;



    constructor(objFirebase : any){
        this.preco = objFirebase.preco
        this.dataCad = objFirebase.dataCad
        this.dataExp = objFirebase.dataExp
        this.imgLoja = objFirebase.imgLoja
        this.imgCerveja = objFirebase.imgCerveja
        this.titulo = objFirebase.titulo
        this.cerveja = objFirebase.cerveja
    }

}