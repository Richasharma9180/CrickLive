export class Comentary{
    batsmanOnStrike:String;
    nonStrikeBatsman:String;
    newBaller:String;
    balls: number;
    overs:number;
    possibilityOfRuns:number;
    wickets: number;
    catchBy: String;
    comentary:String;
  
    constructor(batsmanOnStrike:String,nonStrikeBatsman:String,newBaller:String,balls: number,overs:number,
      possibilityOfRuns:number,wickets: number,catchBy: String,comentary:String) 
       {
           this.batsmanOnStrike = batsmanOnStrike;
           this.nonStrikeBatsman = nonStrikeBatsman;
           this.newBaller = newBaller;
           this.balls = balls;
           this.overs = overs;
           this.possibilityOfRuns = possibilityOfRuns;
           this.wickets = wickets;
           this.catchBy = catchBy;
           this.comentary = comentary;
       }

       setBatsManOnStrike(batsman1:string)
       {
          this.batsmanOnStrike=batsman1;
       }

       getBatsManOnStrike()
       {
           return this.batsmanOnStrike;
       }
       setNonStrikeBatsman(batsman2:String){
        this.nonStrikeBatsman = batsman2;
        console.log(this.getNonStrikeBatsman);
       }

       setNewBaller(baller:String){
        this.newBaller = baller;
        console.log(this.getNewBaller);
       }

       setOvers(over:number)
       {
         this.overs=over;
         console.log(this.overs);
       }

       setPossibleRuns(runs:number){
        this.possibilityOfRuns = runs;
        console.log(this.possibilityOfRuns);
       }

       setWickets(wicket:number){
         this.wickets = wicket;
       }

       setComentary(comentary:string){
         this.comentary = comentary;
       }

       setBalls(ball:number){
        this.balls = ball;
        }

       getBalls(){
          return this.balls;
        }

    

      getNonStrikeBatsman(){
       return this.nonStrikeBatsman;
      }

      getNewBaller(){
        return this.newBaller;
      }

      getOvers()
      {
        return this.overs;
      }

       getPossibleRuns(){
       return this.possibilityOfRuns;
      }

      getComentary(){
       return this.comentary;
     }
}


