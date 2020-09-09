export class Article {

  votes: number;
  title: string;
  link: string;

  constructor(votes: number, title: string, link: string){
    this.votes = votes;
    this.title = title;
    this.link = link;
  }

  voteUp(): void {
    ++this.votes;
  }
  voteDown(): void{
    if (this.votes === 0){
      return;
    }
    else{
      --this.votes;
    }
  }

}
