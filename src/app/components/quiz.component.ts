import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'quiz',
  templateUrl: 'quiz.component.html',
  providers: [QuizService]
})

export class QuizComponent implements OnInit, OnDestroy {

  q: any;
  sub: any;
  id: number;
  cQuestion: number;
  score: number;
  qNumber: number;


  constructor(private QuizService: QuizService, private route: ActivatedRoute, private router: Router) {
    this.score = 0;
  }


  VerifyAnswer(o, e) {
    if (o == this.q.r) {
      this.score = this.score + 10
    }
    if (this.id == this.qNumber) {
      // when the last Question 
      this.router.navigate(['/score']);
    } else {
      // navigate to next Question
      this.router.navigate(['/' + (this.id + 1)]);
    }
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      // (+) converts string 'id' to a number
      // fetch the file and get next Question
      this.id = +params['id'];

      if (localStorage.getItem('q') !== null) {
        var data = JSON.parse(localStorage.getItem('q'))
        this.qNumber = parseInt(localStorage.getItem('qNumber'))
        this.q = data[this.id - 1]
      } else {
        this.QuizService.getQuestion(this.id)
        var data = JSON.parse(localStorage.getItem('q'))
        this.qNumber = parseInt(localStorage.getItem('qNumber'))
        this.q = data[this.id - 1]
      }

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

