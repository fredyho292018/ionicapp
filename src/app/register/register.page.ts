import { Component, OnInit } from '@angular/core';
// firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuario = '';
  password = '';
  cpassword = '';
  constructor(
    public angularFireAuth: AngularFireAuth,
    public alerCont: AlertController,
    public router: Router
    ) { }

  ngOnInit() {
  }
  async register() {
    const { usuario, password, cpassword } = this;
    // tslint:disable-next-line:triple-equals
    if (password != cpassword) {
      this.showAlert('Error!', 'Las contraseñas no coinciden');
      return console.error('Las contraseñas no coinciden');
    }
    try {

      const res = await this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario + '@codedamn.com', password);
      this.showAlert('Success!', 'Bienvenido');
      console.log(res);
      this.router.navigate(['/home']);

    } catch (error) {
      this.showAlert('Error!', error.message);
      console.dir(error);
    }
  }
  async showAlert( header: string, message: string) {
    const aler = await this.alerCont.create(
      {
        header,
        message,
        buttons: ['ok']
      }
    );
    await aler.present();
  }
}
