const selectedTiles = [];
let tilesIds = [];
const patternTiles = [];

let playingTile = document.querySelectorAll(".playingtile");

playingTile.forEach((e)=>{
	e.addEventListener("click",colorChange);
});

function colorChange(e){
    e.target.classList.add("colorOnClick")
    selectedTiles.push(this.id);
};


function randGene()
{
    for(let i = 1; i<=25; i++)
    {
        tilesIds.push('playTile' + i);
    }

    let patternLength = Math.floor(Math.random()*3)+7;

    for(let c = 0, item = 0,i = 0; c < patternLength; c++)
    {   
        i = Math.floor(Math.random()*tilesIds.length);
        item = tilesIds[i];
        tilesIds.splice(i,1);
        patternTiles.push(item);
    }

    patternTiles.forEach((e)=>{
        document.getElementById(e).classList.add('colorOnClick');
    })

}