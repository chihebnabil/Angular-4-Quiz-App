import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Question}  from "./Question"

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    providers : [QuizService]
})

export class QuizComponent implements OnInit, OnDestroy {

q:Question[];
sub : any;
id: number;
counter : number;
score : number;
qNumber : number;

constructor ( private QuizService : QuizService , private route: ActivatedRoute){
  
}

nextQuestion(){
  // console.log(this.qNumber)  
}


ngOnInit() {
 
     this.sub = this.route.params.subscribe(params => {
       // (+) converts string 'id' to a number
      this.id = +params['id'];
      this.QuizService.getQuestion(params['id'])
      .subscribe(
          data => {
          this.q = data.filter((x, idx, obs) => idx == this.id - 1)
          this.qNumber = data.length
          },
          err => console.error(err)
         )
      
    });

  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

