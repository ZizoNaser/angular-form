import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'af-form',
  templateUrl: './form-dd.component.html',
  styles: []
})
export class FormDdComponent implements OnInit {

  private emailValidPattern:string  = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";


  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName' : new FormControl('', Validators.required),
      'email'    : new FormControl('', [Validators.required, Validators.pattern(this.emailValidPattern)]),
      'password' : new FormControl('', Validators.required),
      'address1' : new FormControl(),
      'address2' : new FormControl(),
      'city'     : new FormControl('', Validators.required),
      'state'    : new FormControl(),
      'zip'      : new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

}
