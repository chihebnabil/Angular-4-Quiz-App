import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [QuizService]
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(private QuizService: QuizService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.QuizService.getQuestion()
  }
  ngOnDestroy() { }

}