import { Component, Inject, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { ServiceInheritedService } from '../../services/service-inherited.service';
import { SecondServiceService } from '../../services/second-service.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
 providers:[SecondServiceService]
})
export class BComponent implements OnInit {

  constructor(private service:ServiceService,
              private second_service:SecondServiceService) { 

       console.log('X IN B component',this.service.x);
     
      this.service.metoda('From Component B');
    
  }

  ngOnInit() {
  }

}
