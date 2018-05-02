import { Component, OnInit, Input, Output , EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';
import { ElementDef } from '@angular/core/src/view';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() progreso: number = 70;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
    
  }

  onChanges(newValue: number){

    /*let elemHTML = document.getElementsByName('progreso')[0];
    console.log(this.txtProgress);*/

    if(newValue >= 100){
      this.progreso = 100;
    }else if (newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    /*elemHTML.value = Number(this.progreso);*/
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }
  
  cambiarValor ( valor:number ){

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
