let playing_tile = document.getElementsByClassName("playingtile");

function colorChange()
{
    document.getElementsByClassName("playingtile").style.backgroundColor = "blue";
    
    for(let i = 0; i < playing_tile.length; i++)
    {
    playing_tile[i].addEventListener("click",colorChange,false);
    }
}

