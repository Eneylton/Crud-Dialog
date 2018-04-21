import { ErrorHandlerService } from './../../core/error-handler.service';
import { PesquisaSexoService } from './../pesquisa-sexo.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SexoFiltro } from '../pesquisa-sexo.service';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Sexo } from '../../core/model';

@Component({
  selector: 'app-pesquisa-sexo',
  templateUrl: './pesquisa-sexo.component.html',
  styleUrls: ['./pesquisa-sexo.component.css']
})
export class PesquisaSexoComponent {
  sexo : Sexo;
  totalRegistros = 0;
  filtro = new SexoFiltro();
  exbindoFormularioContato = false;
  sexos = [];

  @ViewChild('tabela') grid;

  constructor(
    private sexoService: PesquisaSexoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService

  ) { }

  prepararNovoContato() {
    this.exbindoFormularioContato = true;
    this.sexo = new Sexo();

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.sexoService.pesquisar(this.filtro).then(resultado => {
    this.totalRegistros = resultado.total;
    this.sexos = resultado.sexos;
    });

  }


  excluir(codigo: number) {
  this.sexoService.remover(codigo).then(() => {

      if (this.grid.first === 0){
        this.pesquisar();
      }else{

        this.grid.first = 0;
      }

      this.toasty.success('Aluno excluído com sucesso!');
    });
}

confirmarExclusao(aluno: any) {
  this.confirmation.confirm({
    message: 'Tem certeza que deseja excluir?',
    accept: () => {
      this.excluir(aluno);
    }
  });
}

aoMudarPagina(event: LazyLoadEvent) {
  const pagina = event.first / event.rows;
  this.pesquisar(pagina);
}


}
