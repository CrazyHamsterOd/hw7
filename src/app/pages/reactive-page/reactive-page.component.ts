import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.css']
})
export class ReactivePageComponent implements OnInit {
  public formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.pattern('[0-9a-zA-Z!@#$%^&*]*')),
      phone: new FormControl('', Validators.pattern('^((8|\\+3)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'))
    });
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  public submit(form: any): void {
    console.log(form);
  }


}
