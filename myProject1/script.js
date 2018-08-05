let playing_tile = document.querySelectorAll("playingtile");

function colorChange()
{
    document.getElementsByClassName("playingtile").style.backgroundColor = "blue";
    
    for(let i = 0; i < playing_tile.length; i++)
    {
    playing_tile[i].addEventListener("click",colorChange,false);
    }
}


playing_tile.forEach((e)=>{
e.addEventListener("click",colorChange);
})

function colorChange(e){
    e.target.style.backgroundColor("blue")
}

