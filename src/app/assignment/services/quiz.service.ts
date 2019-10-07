import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  get(url:string){
    return this.http.get(url);
  }
  getAll(){
    return[
      { id: 'quizs-data/ADAV.ts', name:'ADAV'},
      { id: 'quizs-data/ADBS.ts', name:'ADBS'},
      { id: 'quizs-data/ADTE.ts', name:'ADTE'},
    ]
  }
}
