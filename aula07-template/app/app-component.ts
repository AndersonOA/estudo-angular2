import {Component} from 'angular2/core';

@Component({
  selector: 'meu-app',
  templateUrl: 'app/views/app.html'
})
export class AppComponent {
	// ATRIBUTOS
    // interpolação
    public olaFulano: string = 'Olá, Fulano';
    public mostrarMensagem: boolean = true;
    public nome: string = 'Fulano';
    public nome2: string = 'Ciclano';

    obterJuros(): number {
        return 100;
    }

    // atribuições
    dizerOi(): void {
        alert(this.olaFulano);
    }

    mostrarTexto($event): void {
        alert($event.target.value);
    }

    mudarMostrarMensagem(): void {
        this.mostrarMensagem = !this.mostrarMensagem;
    }
    

    // one way e two way binding
    atualizarNome($event): void {
        this.nome = $event.target.value;
    }

    // css class
    

    // *ngIf
    

    // *ngFor
    

    // MÉTODOS
    // interpolação
    

    // eventos
    


    // atribuições
    

    // one way e two way binding
    

    // css class
    

    // *ngIf
    
}
