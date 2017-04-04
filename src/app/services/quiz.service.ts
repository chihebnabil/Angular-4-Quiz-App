import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuizService {
    constructor(private http: Http) {
    }

    getQuestion() {
        return this.http.get("https://opentdb.com/api.php?amount=40")
            .map(res => res.json()).subscribe(
            data => {
                // shuffle questions
                for (var i = 0; i < data.length - 1; i++) {
                    var j = i + Math.floor(Math.random() * (data.length - i));

                    var temp = data[j];
                    data[j] = data[i];
                    data[i] = temp;
                }
                localStorage.setItem("q", JSON.stringify(data))
                localStorage.setItem("qNumber", JSON.stringify(data.results.length))
            },
            err => console.error(err)
            )
       
    }




}
