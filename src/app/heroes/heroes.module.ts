import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ], 
    //Cosas que sean sorpresas con el tema de los modulos
    //estan invisibles pero dentro del modulo es visuble

        //export: publicas o visibles
    exports: [
        ListadoComponent
    ],
    //aqui van los modulos unicamente
    imports:[
        CommonModule   

    ]
})
export class HeroesModule {

}