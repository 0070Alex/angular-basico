import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[]=['Spiderman', 'Ironman','Hulk','Thor'];
  
  heroBorra:string = '';
  
  borrarHeroe(){
    this.heroBorra = this.heroes.shift() || '';
    
  }

}
