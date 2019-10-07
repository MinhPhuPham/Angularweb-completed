import { Answer } from './answer'
export class Question {
    Id: number;
    Text: string;
    Mark: number;
    AnswerId: number;
    answer:Answer[];
    answered:boolean;

    constructor(data: any) {
        data = data || {};
        this.Id = data.Id;
        this.Text = data.Text;
        this.Mark=data.Mark;
        this.AnswerId=data.AnswerId;
        this.answer = [];
        data.answer.forEach(o => {
            this.answer.push(new Answer(o));
        });
    }
}
