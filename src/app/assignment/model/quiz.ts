import {QuizConfig} from './quiz-config';
import {Question} from './question';

export class Quiz {
    Id: String;
    Name: string;
    config: QuizConfig;
    questions: Question[];

    constructor(data: any) {
        if (data) {
            this.Id = data.Id;
            this.Name = data.Name;
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}