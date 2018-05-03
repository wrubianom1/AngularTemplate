import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {


  labelPaginaActual: string = '';

  constructor(private router: Router, public title: Title, public meta: Meta) {

    this.getDataRoute().subscribe( data => {
      console.log(data);
      this.labelPaginaActual = data.titulo;
      title.setTitle(data.titulo);
      let metaType: MetaDefinition = {
        name: 'description',
        content: this.labelPaginaActual
      };
      meta.updateTag(metaType);

    });

  }

  ngOnInit() {
  }


  getDataRoute() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd)
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null)
    .map( (evento: ActivationEnd) => evento.snapshot.data);

  }


}
