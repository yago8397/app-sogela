export class Loja{
    endereco: string;
    horaFunc: string;
    nome: string;
    telefone: string;
    uid: string;
    img: string;

    constructor(objFirebase : any){
        this.endereco = objFirebase.endereco
        this.horaFunc = objFirebase.horaFunc
        this.nome = objFirebase.nome
        this.telefone = objFirebase.telefone
        this.img = objFirebase.img
        
    }
}