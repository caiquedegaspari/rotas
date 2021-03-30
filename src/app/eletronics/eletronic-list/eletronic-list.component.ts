import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Eletronic } from 'src/app/models/eletronic';
import { EletronicsService } from 'src/app/services/eletronic.service';

@Component({
  selector: 'app-eletronic-list',
  templateUrl: './eletronic-list.component.html',
  styleUrls: ['./eletronic-list.component.css']
})
export class EletronicListComponent implements OnInit {

  electronics$:Observable<Eletronic[]>

  constructor( private eletronicService:EletronicsService) { }

  ngOnInit(): void {
    this.electronics$ = this.eletronicService.eletronics$
  }

}
