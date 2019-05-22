import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'af-form',
  templateUrl: './form-dd.component.html',
  styles: []
})
export class FormDdComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName' : new FormControl(),
      'email'    : new FormControl(),
      'password' : new FormControl(),
      'address1' : new FormControl(),
      'address2' : new FormControl(),
      'city'     : new FormControl(),
      'state'    : new FormControl(),
      'zip'      : new FormControl(),
      'gender'   : new FormControl(),
    });
    
  }

}
