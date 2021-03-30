import { Component, OnInit } from '@angular/core';
import { Eletronic } from 'src/app/models/eletronic';
import { Observable } from 'rxjs';
import { EletronicsService } from 'src/app/services/eletronic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eletronic-detail',
  templateUrl: './eletronic-detail.component.html',
  styleUrls: ['./eletronic-detail.component.css']
})
export class EletronicDetailComponent implements OnInit {

  electronic$:Observable<Eletronic>

  constructor(
     private electronicsService:EletronicsService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    let i:number = +this.route.snapshot.paramMap.get('index')
    this.electronic$ = this.electronicsService.get(i)
  }

  back(){
    this.router.navigate(['/..'],{relativeTo: this.route})
  }

}
