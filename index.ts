let sketch = function(p: any){
    let calculator = new Calculator(p)
    p.setup = function(){
        p.createCanvas(600,750);
    } ;
    p.draw = function(){
        p.background(10);
        calculator.show()
    };
    p.mousePressed = function(){
        calculator.click(p.mouseX,p.mouseY);
    }
};

let myp5 = new p5(sketch);