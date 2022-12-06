import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent {
  text: String = '';

  constructor() {
    this.text = 'Button was clicked';
  }

  generateClicked() {
    console.log(this.text);
  }
}
