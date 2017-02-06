import {Component} from 'angular2/core';
import {CepPipe} from './cep-pipe';

@Component({
  selector: 'meu-app',
  template: `
  	<h1>Angular 2 - Aula 4 Filtros</h1>
  	<p>Caixa alta: {{texto | uppercase}}</p>
  	<p>Caixa baixa: {{texto | lowercase}}</p>
  	<p>Valor: {{valor | currency: 'BRL':true}}</p>
  	<p>Data: {{dataAtual | date: 'dd/MM/yyyy'}}</p>
  	<p>
  		Data dinâmica: {{dataAtual | date:formatar}}
  		<button (click)="mudarFormato()">Mudar Formato</button>
  	</p>
  	<p>Cep: {{cep | cep}}</p>
  	`,
  	pipes: [CepPipe]
})
export class AppComponent{
	texto: string = 'Curso de Angular 2';
	valor: number = 1049.99;
	dataAtual: Date = new Date();
	formato: boolean = true;
	cep: string = '81020235';

	get formatar() {
		return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
	}

	mudarFormato() {
		this.formato = !this.formato;
	}
}
