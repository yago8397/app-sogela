import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Promo } from '../../model/promo';
import firebase from 'firebase';
import { Cerveja } from '../../model/cerveja';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  promo: Promo;
  cerveja : Cerveja;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.promo = this.navParams.get('uid');
  }

  ionViewDidLoad() {

      var ref = firebase.firestore().doc(this.promo.cerveja);
  
      ref.get().then(doc=>{       
          console.log(doc.data());
      })
  
    }
    
    

  
  }

