let playingTile = document.querySelectorAll(".playingtile");

playingTile.forEach((e)=>{
	e.addEventListener("click",colorChange);
});

function colorChange(e){
    e.target.classList.toggle("colorOnClick")
};


function randGene()
{

}