import { Component, OnInit } from '@angular/core';
// firebase
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = '';
  password = '';
  constructor(
    public angularFireAuth: AngularFireAuth,
    public alerCont: AlertController,
    public router: Router
      ) { }

  ngOnInit() {
  }
   async login() {
    const { usuario, password } = this;
    try {
        const res = await this.angularFireAuth.auth.signInWithEmailAndPassword(usuario + '@codedamn.com', password);
        this.router.navigate(['/home']);
    } catch (error) {
        console.dir(error);

      // tslint:disable-next-line:triple-equals
      if ( error.code == 'auth/operation-not-allowed') {
          console.log('User no found');
      } else {
        this.showAlert('Error!', error.message);
      }
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
