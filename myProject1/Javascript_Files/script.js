const selectedTiles = []; // selected tiles array
let tilesIds = [];  // Tile ids array
const patternTiles = []; // Pattern array
const lostTiles = []; // Tiles that are incorrect and not in the pattern, tiles the users has not yet selected

let playingTile = document.querySelectorAll(".playingtile");

//changes tile colorOnclick
playingTile.forEach((e)=>{
	e.addEventListener("mouseup",colorChange);
});

//changes colorOnClick to red on all tiles if you click on the wrong tile
function colorChange(e){
    console.log("patternTiles inside colorChange: ",patternTiles)
    console.log("classList: ",e.target.classList)
    //console.log("classList: ",e.target.classList == patternTiles)

    if (! e.target.classList.contains('colorOnClick'))
    {
     lost();
    }
    else
    {
        //document.getElementById(e.target.id).classList.remove("fadeColor");
        document.getElementById(e.target.id).classList.replace("fadeColor","colorOnClick");
        console.log(e.target.id);
        if(patternTiles.indexOf(e.target.id)!== -1)
        {
            patternTiles.splice(patternTiles.indexOf(e.target.id),1);
        }
        console.log(patternTiles);

        if(patternTiles.length === 0)
        {
            win();
        }
    }
}

// Random generate Function for pattern and wrong tiles turning red
function timer(ms) 
{
    return new Promise(res => setTimeout(res, ms));
}

 async function randGene()
 {
    for(let q = 1; q<=25; q++)
    {
        tilesIds.push('playTile' + q);
    }

    let patternLength = Math.floor(Math.random()*3)+7;

    for(let c = 0, item = 0,q = 0; c < patternLength; c++)
    {
        q = Math.floor(Math.random()*tilesIds.length);
        items = tilesIds[q];
        console.log(items);
        tilesIds.splice(q,1);
        patternTiles.push(items);
        console.log(c);
        document.getElementById(items).classList.add('colorOnClick');
        await timer(2400);
        fading()
        console.log(patternTiles);
    }
    console.log("patternTiles inside randGene: ",patternTiles)
 }

 // Timer for the game to start
 setTimeout(randGene, 5000);

// Timer for blocks to disappear right after appearing.
async function fading()
{
    console.log("start fading function");
    for(let i = 0; i <= patternTiles.length; i++)
    {
        item = patternTiles[i];
        //document.getElementById(items).classList.add("colorOnClick");
        document.getElementById(items).classList.add("fadeColor");
        await timer(2400);
    }
}
//When you click on the wrong tile thats not in the pattern randomly generated
// it turns red
async function lost()
{
    tilesIds = [];
    for(let i = 1; i<=25; i++)
    {
        tilesIds.push('playTile' + i);
    }

    for(let q = 0; q<=24; q++)
    {
        console.log(tilesIds[q]);
    }

    let patternLength = 25;

    for(let c = 0, item = 0,i = 0; c < patternLength; c++)
    {
        item = tilesIds[c];
        lostTiles.push(item);
        console.log(c);
        document.getElementById(item).classList.add('failOnClick');
        await timer(0);
    }
    console.log("patternTiles inside randGene: ",patternTiles)
}

async function win()
{
    tilesIds = [];
    for(let i = 1; i<=25; i++)
    {
        tilesIds.push('playTile' + i);
    }

    for(let q = 0; q<=24; q++)
    {
        console.log(tilesIds[q]);
    }

    let patternLength = 25;

    for(let c = 0, item = 0,i = 0; c < patternLength; c++)
    {
        item = tilesIds[c];
        lostTiles.push(item);
        console.log(c);
        document.getElementById(item).classList.add('rightOnClick');
        await timer(10);
    }
    console.log("patternTiles inside randGene: ",patternTiles)
}
