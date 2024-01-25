import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b.component';
import { ServiceService } from '../../services/service.service';
import { ServiceInheritedService } from '../../services/service-inherited.service';
import { CModule } from '../../CModule/c/c.module';

@NgModule({
  imports: [
    CommonModule,
    CModule
  ],
   exports:[BComponent],
   declarations: [BComponent],

})
export class BModule { }
