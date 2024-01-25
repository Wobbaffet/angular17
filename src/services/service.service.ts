import { Injectable } from '@angular/core';
import { BModule } from '../Bmodule/b/b.module';
import { Type } from '@angular/compiler';

@Injectable()
export class ServiceService {


  public x=1;
constructor() { 
  console.log('Service constructor');
}

metoda(component:String){
  console.log("I am origina metod",component);
}

}
