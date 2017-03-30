import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [QuizService]
})
export class AppComponent {
  
}
