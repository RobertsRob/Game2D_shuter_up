var ctx = myCanvas.getContext("2d");

let player = new Player();


function start()
{
    setInterval(update, 25); //25
}

function update()
{
    ctx.clearRect( 0, 0, myCanvas.width, myCanvas.height );
    player.draw();
    player.update();
}