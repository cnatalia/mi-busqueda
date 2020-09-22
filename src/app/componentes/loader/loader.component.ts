/* tslint:disable */
import { Component, OnInit } from '@angular/core';

import { LoaderState } from '../../servicios/loader/loader';
import { LoaderService } from '../../servicios/loader/loader.service';


@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

	private stack: LoaderState[] = [];

	constructor(private loaderService: LoaderService) { }

	get show(): boolean { return this.stack.length > 0; }

	ngOnInit() {
		this.loaderService.loaderState.subscribe(
			(state: LoaderState) => {
				if (state.show) {
					this.stack.push(state);
				} else {
					this.stack.pop();
				}
			}
		);
	}
}
