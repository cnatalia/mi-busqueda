import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vista-rapida',
  templateUrl: './vista-rapida.component.html',
  styleUrls: ['./vista-rapida.component.scss']
})
export class VistaRapidaComponent implements OnInit {

  @Input() imagen;
  @Input() precio;
  @Input() titulo;
  @Input() envioGratis;
  @Input() ciudad;
  @Input() id;

  constructor() {
    console.log(this.precio);
  }

  ngOnInit(): void {
  }

}
