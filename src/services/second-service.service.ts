import { Injectable } from '@angular/core';
import { ServiceService } from './service.service';
import { BModule } from '../Bmodule/b/b.module';

@Injectable({providedIn:null})
export class SecondServiceService {

constructor(private service:ServiceService) {


  console.log('X from second service is ',this.service.x);

 }

 getX(){console.log('GET FROM X',this.service.x)}

}
