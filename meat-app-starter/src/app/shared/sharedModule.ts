import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { StarsComponent } from './stars/stars.component';

@NgModule ({
  declarations: [ InputComponent, RadioComponent, StarsComponent ],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule ],
  exports: [ InputComponent, RadioComponent,
            FormsModule, ReactiveFormsModule,
            CommonModule, StarsComponent ]
})

// O declarations contem os componente pertencentes ao módulo.;
// O imports contem outros módulos que este módulo precisa para funcionar da maneira correta;
// exports exporta os módulos que poderão ser usados por quem importar esse módulo.

export class SharedModule { }
