import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PesquisaSexoComponent } from './pesquisa-sexo/pesquisa-sexo.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    ButtonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PesquisaSexoComponent],exports:[PesquisaSexoComponent]
})
export class SexoModule { }
