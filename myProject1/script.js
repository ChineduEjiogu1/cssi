const selectedTiles = [];
let tilesIds = [];
const patternTiles = [];

let playingTile = document.querySelectorAll(".playingtile");

playingTile.forEach((e)=>{
	e.addEventListener("click",colorChange);
});

// function that is executed on click,
function colorChange(e){
    if (! e.target.classList.contains('Class')){
      lost();
		}
		else if(document.getElementById(item)== ('Class')){
			e.target.classList.add("cOnClick");
		}

}
//Turns everything green after winning.
function win()
{
	let patternLength = 25;

	for(let c = 0, item = 0,i = 0; c < patternLength; c++)
	{
	item = tilesIds[c];
    document.getElementById(item).classList.add('rightOnClick');
    

    }

}
// Wait Function
function timer(ms) 
{
    return new Promise(res => setTimeout(res, ms));
}
// Generates the random blocks you have to click
 async function randGene()
 {
    for(let q = 1; q<=25; q++)
    {
        tilesIds.push('playTile' + q);
    }

    let patternLength = Math.floor(Math.random()*3)+7;

    for(let c = 0, item = 0,q = 0; c <= patternLength; c++)
    {
        q = Math.floor(Math.random()*tilesIds.length);
        items = tilesIds[q];
        tilesIds.splice(q,1);
        patternTiles.push(items);
        console.log(c);
        document.getElementById(items).classList.add('colorOnClick');
				document.getElementById(items).classList.add('Class');
        await timer(2500);
				fading()
    }
    console.log("patternTiles inside randGene: ",patternTiles)
}
// called when a block that does not that the ClassList: Class
async function lost()
{
       let patternLength = 25;

    //    document.querySelectorAll(".fail").forEach((e)=>{
    //        (e).style.backgroundColor = "red"
    //    });

       for(let c = 0,items = 0 ,i = 0; c < patternLength; c++)
       {
           items = tilesIds[c];
           document.getElementById(items).classList.add('failOnClick');
           await timer(100);
 }
}

// Timer for the game to start
setTimeout(randGene, 5000);

// Timer for blocks to dissapear right after appearing.
async function fading() // previously tile
{
    console.log("start fading function");
    for(let i = 0; i <= 9; i++)
    {
        item = patternTiles[i];
        document.getElementById(items).classList.remove("colorOnClick");
        await timer(3000);
    }
}