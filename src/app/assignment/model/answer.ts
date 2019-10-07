export class Answer {
    Id: number;
    Text: String;
    selected:boolean;
    constructor(data: any){
        data = data || {};
        this.Id =data.Id;
        this.Text =data.Text;
    }
}