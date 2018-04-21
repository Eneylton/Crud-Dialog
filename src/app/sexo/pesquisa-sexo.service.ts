import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

export class SexoFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 7;
}

@Injectable()
export class PesquisaSexoService {

  sexosDeleteURL = 'http://localhost:8080/sexos'

  sexosUrl = 'http://localhost:8080/sexos/sexoPaginacao';

  constructor(private http: Http) { }

  pesquisar(filtro: SexoFiltro): Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.sexosUrl}`, { headers, search: params })
    .toPromise().then(response => {
        const responseJson = response.json();
        const sexos = responseJson.content;
        const resultado = {
        sexos,
        total: responseJson.totalElements
        };
    return resultado;
    })

  }

  remover(codigo:number): Promise<void> {
    const headers = new Headers();
    return this.http.delete(`${this.sexosDeleteURL}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }
}
