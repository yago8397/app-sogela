import { Cerveja } from "./cerveja";


export class Promo{
    uid: string;
    preco: string;
    titulo: string;
    dataExp: string;
    imgCerveja: string;
    imgLoja: string;
    cerveja : string;
    loja: string;



    constructor(objFirebase : any){
        this.preco = objFirebase.preco
        this.dataExp = objFirebase.dataExp
        this.imgLoja = objFirebase.imgLoja
        this.imgCerveja = objFirebase.imgCerveja
        this.titulo = objFirebase.titulo
        this.cerveja = objFirebase.cerveja
        this.loja = objFirebase.loja
    }

}