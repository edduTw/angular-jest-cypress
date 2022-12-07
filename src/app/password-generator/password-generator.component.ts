import { Component, OnInit } from '@angular/core';
import { PasswordOptionsModule } from './password-options/password-options.module';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {
  constructor() {
    this.text = 'Button was clicked';
  }

  public password: string = '';

  public passwordOptions: PasswordOptionsModule = new PasswordOptionsModule();

  private passCont!: HTMLInputElement;

  // eslint-disable-next-line class-methods-use-this
  ngOnInit(): void {}

  text: String = '';

  resultado: number = 0;

  generatePassword() {
    if (this.passwordOptions.long < 0) {
      alert('La longitud de la contraseña debe ser mayor a 0');
      return false;
    }

    if (!(this.passwordOptions.charts || this.passwordOptions.numbers || this.passwordOptions.symbol)) {
      alert('Es necesario elegir al menos una opcion de tipo de contraseña');
      return false;
    }

    if (this.passwordOptions.long >= 100) {
      alert('La cantidad de caracteres ingresada es demasiado grande!');
      return false;
    }

    this.password = '';
    // eslint-disable-next-line no-plusplus
    for (let c = 0; c < this.passwordOptions.long; c++) {
      this.password += this.getPasswordChar();
    }

    return true;
  }

  getPasswordChar(): string {
    // se genera un numero al azar entre 1 y 4, dicho numero representa el tipo de caracter a insertar
    const option: number = Math.round(Math.random() * (4 - 1) + 1);
    const ch: string = '';

    // eslint-disable-next-line default-case
    switch (option) {
      case 1:
        if (!this.passwordOptions.charts) {
          // si no se seleccionaron las mayusculas
          return this.getPasswordChar();
        }
        return this.getCaracter(this.letras).toUpperCase();
        break;

      case 2:
        if (!this.passwordOptions.numbers) {
          // si no se seleccionaron numeros
          return this.getPasswordChar();
        }
        return this.getNumero();
        break;

      case 4:
        if (!this.passwordOptions.symbol) {
          // si no se seleccionaron simbolos
          return this.getPasswordChar();
        }
        return this.getCaracter(this.simbolos);
        break;
    }
    return ch;
  }

  onSumar(): void {
    if (this.resultado < 25) {
      this.resultado += 1;
    }
  }

  onResta(): void {
    if (this.resultado > 0) {
      this.resultado -= 1;
    }
  }

  generateClicked() {
    console.log(this.text);
  }

  private letras: string = 'abcdefghijklmnñopqrstuvwxyz';

  private simbolos: string = '!$%&/()=?^_-:;@*º|#~{[]}';

  // eslint-disable-next-line class-methods-use-this
  getCaracter(chs: string): string {
    const chsCount = chs.length - 1;
    const chsSelect = Math.round(Math.random() * (chsCount - 0) + 0);
    return chs[chsSelect];
  }

  // eslint-disable-next-line class-methods-use-this
  private getNumero(): string {
    return String(Math.round(Math.random() * (9 - 0) + 0));
  }
}
