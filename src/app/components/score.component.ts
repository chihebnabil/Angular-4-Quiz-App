import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  providers: [QuizService]
})
export class ScoreComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

    ngOnInit() {}
    ngOnDestroy(){}

}