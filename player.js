class Player extends gameObject
{
    constructor(x, y, w, h, color, img )
    {
        super(50, 50, 30, 30, "red");
    }
    update()
    {
        super.update();
    }
    draw()
    {
        super.draw();
    }
    playerMove(where)
    {
        if(where == "down"){this.setPos(this.x, this.y+3);}
        if(where == "up"){this.setPos(this.x, this.y-3);}
        if(where == "left"){this.setPos(this.x-3, this.y);}
        if(where == "right"){this.setPos(this.x+3, this.y);}

        if(where == "down_left"){this.setPos(this.x-3, this.y+3);}
        if(where == "up_left"){this.setPos(this.x-3, this.y-3);}
        if(where == "down_right"){this.setPos(this.x+3, this.y+3);}
        if(where == "up_right"){this.setPos(this.x+3, this.y-3);}
    }
}