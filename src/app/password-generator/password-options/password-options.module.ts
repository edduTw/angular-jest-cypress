import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PasswordOptionsModule {
  public long: number = 0;

  public charts: boolean = true;

  public symbol: boolean = true;

  public numbers: boolean = true;
}
