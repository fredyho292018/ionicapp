import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = 'Fredy';
  constructor(private router: Router, private nav: NavController) {

  }
  segunda() {
    // this.router.navigate(['/segunda', this.valor]);
    this.router.navigateByUrl(`/pagina2/${ this.valor }`);
  }
  segundaNavC() {
   this.nav.navigateForward(`/pagina2/${ this.valor }`);
  }
}
