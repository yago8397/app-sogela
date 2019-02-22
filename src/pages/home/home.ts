import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user : any;
  @ViewChild('usuario')email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController, 
  public toasCtrl : ToastController,
  public firebaseauth : AngularFireAuth,
  public storageService : StorageService) {

  }

  login(){
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(()=>{
      this.mensagem('Login efetuado com sucesso!')
    })
    .catch((erro: any)=>{
      this.mensagem('Login incorreto!')
    });

  }

  cadastro(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(()=>{
      this.mensagem('Login efetuado com sucesso!')
    })
    .catch((erro: any)=>{
      this.mensagem('Cadastro incorreto!')
    });

  }

  mensagem(texto : string){
    let msg = this.toasCtrl.create({
      duration : 1000,
      position: 'botton'
    })
    msg.setMessage(texto);
    msg.present();
  }



}
