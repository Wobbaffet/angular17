import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from './c.component';
import { ServiceService } from '../../services/service.service';
import { ServiceInheritedService } from '../../services/service-inherited.service';

@NgModule({
  imports: [CommonModule],
  exports:[CComponent],
  declarations: [CComponent],
  providers:[{provide:ServiceService, useClass:ServiceInheritedService}]
})
export class CModule { }
