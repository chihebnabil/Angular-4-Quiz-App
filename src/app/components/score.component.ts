import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'score',
  templateUrl: './score.component.html'
})
export class ScoreComponent implements OnInit, OnDestroy {
  score : any;
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

    ngOnInit() {
      this.score = localStorage.getItem('score')
    }
    ngOnDestroy(){}

}