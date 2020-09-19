import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DatosMemoriaService {

  // tslint:disable-next-line:variable-name
  private _form: FormGroup;

  public get form(): FormGroup { return this._form; }

  constructor() {
    this._form = new FormGroup({});
  }

  public pushFormGroup(group: FormGroup, groupName: string): FormGroup {
    if (this._form.get(groupName)) {
      const formGroup = this._form.get(groupName) as FormGroup;

      for (const key in group.controls) {
        if (!formGroup.controls[key]) {
          formGroup.controls[key] = group.controls[key];
        }
      }
    } else {
      this._form.addControl(groupName, group);
    }
    const newGroup = new FormGroup({});
    const fGroup = this._form.get(groupName) as FormGroup;
    // tslint:disable-next-line:forin
    for (const key in group.controls) {
      newGroup.addControl(key, fGroup.get(key));
    }
    return newGroup;
  }
}

