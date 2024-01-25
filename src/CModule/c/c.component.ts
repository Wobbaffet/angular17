import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {

  constructor(private service:ServiceService) {
    console.log("X FROM C component",this.service.x);
    this.service.metoda('From Component C');
   }

  ngOnInit() {
  }

}
