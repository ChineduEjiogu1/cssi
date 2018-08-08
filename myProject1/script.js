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


// function randGene()
// {
//     for(let i = 1; i<=25; i++)
//     {
//         tilesIds.push('playTile' + i);
//     }

//     let patternLength = Math.floor(Math.random()*3)+7;

//     for(let c = 0, item = 0,i = 0; c < patternLength; c++)
//     {   
//         i = Math.floor(Math.random()*tilesIds.length);
//         item = tilesIds[i];
//         tilesIds.splice(i,1);
//         patternTiles.push(item);
//     }

//     patternTiles.forEach((e)=>{
//         document.getElementById(e).classList.add('colorOnClick');
//     })

// }
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
 }
  
 async function randGene()
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
        console.log(c);
        document.getElementById(item).classList.add('colorOnClick');
        await timer(1500);
    }
 
 }
// Timer for the game to start
setTimeout(randGene, 5000);

// Timer for the pattern colors to change 
let patternInterval = document.querySelectorAll("#playTile");

function fading(tile)
{
    tile.classList.toggle('colorOnClick');
    setInterval(1000);
    tile.classList.toggle('colorOnClick');
    
} 

function patternChangeTime()
{
    for(let i = 0; i < patternTiles.length; i++)
    {
        fading(patternTiles[i]);
    }
}



