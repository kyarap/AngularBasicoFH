import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Iroman','Hulk','Thor','Doctor Strenge'];

  nomHeroeBorrado:string='';



  borrarHeroe(){
      console.log("borrando....");
      //const heroeBorrado= this.heroes.shift();
   
     // console.log("heroeBorrado: ....|"+ heroeBorrado);
      //Si es vacio envie espacio vacio
     this.nomHeroeBorrado =  this.heroes.shift() || '';
  }




}
