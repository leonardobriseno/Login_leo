import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  usuario =[];
  correo;
  password;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
              public storage: Storage,
              this.storage.keys()
              .then(keys => {if(keys.some(key => key == 'usuario')){
                this.storage.get('usuario')
                .then(usuario=>{this.usuario=JSON.parse(usuario);})
      {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  clickagregar(){
    if (this.correo.length > 0 && this.password.length  0){
        this.usuario.push({
          password:this.password.correo,
          correo:this.correo})
          this.usuario = this.navParams.get('usuario');
          this.navCtrl.pop();
    }
    else{
      console.log("Falta llenar espacios")
      const alert=this.alertCtrl.create({
        title: "Zaaaa!", subTitle: "Llene todos los espacios por favor", buttons: ['Ok']
      })
      alert.present();
    }
  }
}
