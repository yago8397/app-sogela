import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Promo} from '../../model/promo';
import firebase from 'firebase';


/**
 * Generated class for the MensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Promo',
  templateUrl: 'Promo.html',
})
export class PromoPage {
  
  settings = {timestampsInSnapshots: true};

  formGroup: FormGroup;  //Armazena dados do formulário
                         //necessário import ReactiveFormsModule em app.module.ts
                         firestore = firebase.firestore();
  promocao: Promo[] = []; //armazena mensagens

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
   
    private formBuilder: FormBuilder) {  // Uso de formulários
      this.firestore.settings(this.settings);
    // inicia o formulario
    this.formGroup = this.formBuilder.group({
      usuario : ['', [Validators.required]],
      mensagem : ['', [Validators.required]],
      id :['']
    })
  }


  ionViewDidLoad(){
    this.getList();
  }


  getList(){
    var ref = firebase.firestore().collection('promo');

    ref.get().then(the=>{
      the.forEach(doc => {
        
        //console.log(doc.data());
        let obj = new Promo(doc.data());
        obj.uid = doc.id;
        this.promocao.push(obj);
       
      })

      console.log(this.promocao)
      
    })

  }

  detalhe(uid : Promo){
    this.navCtrl.push('DetalhePage',{'uid' : uid});
  }  

}
