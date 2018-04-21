import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SexoModule } from './../sexo/sexo.module';
import { CoreModule } from './../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import { PrincipalModule } from '../principal/principal.module';
import { PesquisaSexoComponent } from './../sexo/pesquisa-sexo/pesquisa-sexo.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from '../principal/principal/principal.component';
import { PesquisaSexoService } from '../sexo/pesquisa-sexo.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    PrincipalModule,
    SexoModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [TopoComponent,
                 ConteudoComponent,
                 MenuComponent,
                 FooterComponent],
  exports:[TopoComponent,
           MenuComponent,
           ConteudoComponent,
           FooterComponent]
})
export class TempletModule { }
