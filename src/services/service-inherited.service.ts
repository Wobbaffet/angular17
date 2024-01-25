import { Injectable } from '@angular/core';

@Injectable()
export class ServiceInheritedService {

constructor() { }


metoda(component:String){
  console.log('Inherited metod',component);
}
}
