import { Component } from '@angular/core';
import { NavController, AlertController, Alert } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  registro = RegisterPage;
  usuario=[];

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage) {
      this.storage.keys()
      .then(keys => {if(keys.some(key => key == 'usuario')){
        this.storage.get('usuario')
      .then(usuario=>{this.usuario=JSON.parse(usuario);})
      }}
    });
  clickRegistro(){
    this.navCtrl.push(this.registro, {usuario:this.usuario});
  }
  clickMensaje(){
    if (this.usuario.length > 0 ){
      const alert = this.alertCtrl.create({
        title: 'Exito',
        subTitle: 'Inicio de sesión exitoso',
        buttons: ['Ok']
      })
      alert.present();
      this.storage.set('usuario', JSON.stringify(this.usuario))
    }
    else{
      console.log("Funciona");
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Sorry bro',
        buttons: ['Ok']
      })
      alert.present();
    }
  }
}
