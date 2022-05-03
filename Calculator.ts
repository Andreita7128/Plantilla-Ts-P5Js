class Calculator{

    p: any
    constructor(p: any){
        this.p = p;
    }

    show(){
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++) {
                this.p.stroke(250);
                this.p.fill(10);
                this.p.rectMode(this.p.CENTER)
                this.p.rect((150*i) + 75,(150*j) + 75,150,150);
            }
        }
    }

    click(mx:number, my:number){
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++) {
                if(this.p.dist(mx,my,150*i,150*j)<75){
                    console.log(`click${i},${j}`);
                }
            }
        } 
    }
}