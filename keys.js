addEventListener( "keydown", keyPress );
addEventListener( "keyup", keyPress );

let up = false;
let down = false;
let right = false;
let left = false;

function keyPress(key)
{
    // alert(key.keyCode);
    if(key.keyCode == 87)//W
    {
        player.playerMove("up");
    }
    if(key.keyCode == 83)//S
    {
        player.playerMove("down");
    }
    if(key.keyCode == 65)//A
    {
        player.playerMove("left");
    }
    if(key.keyCode == 68)//D
    {
        player.playerMove("right");
    }

    if(key.keyCode == 87 && key.keyCode == 65)//W
    {
        player.playerMove("up_left");
    }
    if(key.keyCode == 83 && key.keyCode == 65)//S
    {
        player.playerMove("down_left");
    }
    if(key.keyCode == 87 && key.keyCode == 68)//A
    {
        player.playerMove("down_right");
    }
    if(key.keyCode == 83 && key.keyCode == 68)//D
    {
        player.playerMove("up_right");
    }
}