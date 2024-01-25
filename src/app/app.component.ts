import { Component, Inject } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ServiceInheritedService } from '../services/service-inherited.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'angular17';

  /**
   *
   */
  constructor(private service:ServiceService) {
    
    this.service.x=2;
    this.service.metoda('from component A');
    
  }
}
