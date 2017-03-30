import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';
import {Question}  from "../components/Question"

@Injectable()
export class QuizService{
    constructor(private http : Http){
    }

    getQuestions(){
        return this.http.get("assets/q.json").map(res => res.json())
    }
    getQuestion(id): Observable<Question[]> {
        return this.http.get("assets/q.json")
        .map(res => res.json())
       
    }
}