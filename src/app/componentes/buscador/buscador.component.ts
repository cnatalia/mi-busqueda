import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { pipe, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { PrediccionResponse } from '../../modelos/prediccion-response';
import { AutocompletarService } from '../../servicios/autocompletar/autocompletar.service';
import { ConsultarProductosService } from '../../servicios/consultar-productos/consultar-productos.service';

export enum KEY_CODE {
  DOWN_ARROW = 40,
  UP_ARROW = 38
}


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  public form: FormGroup;
  public items;
  public categorias;
  public mostar: boolean;
  public buscarParametro;
  public prediccion;
  public mostrarPrediccion = true;
  highlightedItem = -1;
  itemList;

  public text = 'no clicks yet';

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.prediccion = false;
    }
  }


  constructor(
    private consultaService: ConsultarProductosService,
    private activatedRoute: ActivatedRoute,
    private autocompleteService: AutocompletarService,
    private route: Router,
    private eRef: ElementRef
  ) {

    this.form = new FormGroup({
      buscador: new FormControl('')
    });

    this.buscador.valueChanges.subscribe(val => {
      // tslint:disable-next-line:max-line-length
      this.mostrarPrediccion = true;
      if (val !== '') {
        this.autocompleteService.getTimesInEmployment(val).subscribe(valor => {
          this.itemList = valor.suggested_queries;
          this.prediccion = valor.suggested_queries;
        });
      }
    });
  }

  get buscador(): AbstractControl { return this.form.get('buscador'); }

  ngOnInit(): void {

  }

  public buscarEsteValor(valor) {

    this.buscador.setValue(valor);
    this.mostrarPrediccion = false;
    this.route.navigate(['/items'], { queryParams: { search: this.buscador.value } });
  }

  public buscar() {

    if (this.buscador.value) {
      this.route.navigate(['/items'], { queryParams: { search: this.buscador.value } });

    }
  }



  inputTextKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.highlightedItem = this.highlightedItem + 1 >= this.itemList.length ? 0 : this.highlightedItem + 1;

    } else if (event.key === 'ArrowUp') {

      this.highlightedItem = this.highlightedItem - 1 < 0 ? this.itemList.length - 1 : this.highlightedItem - 1;

    } else if (event.key === 'Enter' && this.itemList.length > 0) {
      // Enter, select the element

      const element = this.itemList[this.highlightedItem].q;
      this.buscador.setValue(element);
      this.mostrarPrediccion = false;

    }
  }


}
