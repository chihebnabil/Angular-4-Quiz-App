import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'score',
  templateUrl: 'score.component.html'
})
export class ScoreComponent implements OnInit, OnDestroy {



    ngOnInit() {}
    ngOnDestroy(){}

}