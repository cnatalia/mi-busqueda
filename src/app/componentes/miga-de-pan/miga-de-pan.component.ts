import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-miga-de-pan',
  templateUrl: './miga-de-pan.component.html',
  styleUrls: ['./miga-de-pan.component.scss']
})
export class MigaDePanComponent implements OnInit {

  @Input() categorias = [];
  @Input() isArray;



  constructor() { }

  ngOnInit(): void {
   
  }



}
