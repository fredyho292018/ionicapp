import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  argumeto = '';
  constructor(private activateRo: ActivatedRoute) {

  }

  ngOnInit() {
    this.argumeto = this.activateRo.snapshot.paramMap.get('id');
    console.log(this.argumeto);
  }

}
