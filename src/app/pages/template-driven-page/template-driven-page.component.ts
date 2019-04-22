import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-page',
  templateUrl: './template-driven-page.component.html',
  styleUrls: ['./template-driven-page.component.css']
})
export class TemplateDrivenPageComponent {
  public submit(form: NgForm): void {
    console.log(form);
  }
}
