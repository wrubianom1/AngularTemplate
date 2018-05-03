import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor() {

    // se reintenta dos veces el proceso en caso de que falle y arroje error
    this.suscription = this.regresarObservable()
    .subscribe (
      numero => console.log('Lega aldo del nex', numero),
      error => console.log('Error en el obs', error),
      () => console.log('El observador  termino'),
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('La pagina se va a destruir');
    this.suscription.unsubscribe();
  }


  regresarObservable(): Observable<any> {

    return new Observable( observer => {
      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1 ;
        let salida = {
          valor: contador
        };
        observer.next( salida );

        /*if ( contador === 3 ) {
          clearInterval(intervalo);
          observer.complete( );
        }*/

        // if ( contador === 2 ) {
        // observer.error('Ocurrio un error Auxilio');
        // }

      }, 500);

    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor ;
    })
    .filter( (valor, index) => {
      if ( (valor % 2 ) === 1  ) {
        // impar
        return true;
      } else {
        // par
        return false;
      }


    });
  }


}
