
function calcWin(t)
{
  console.log(t)
  // Calculate a win for the horizontal line
  if(t[0] + t[1] + t[2] == 3 || t[0] + t[1] + t[2] == 0) return true

  else if (t[3] + t[4] + t[5]  == 3 || t[3] + t[4] + t[5] == 0 ) return true

  else if (t[6] + t[7] + t[8] == 3 || t[6] + t[7] + t[8] == 0 ) return true

  //Calculate a win for the vertical line
  else if (t[0] + t[3] + t[6] == 3 || t[0] + t[3] + t[6] == 0 ) return true

  else if (t[1] + t[4] + t[7] == 3 || t[1] + t[4] + t[7] == 0 )  return true

  else if (t[2] + t[5] + t[8] == 3 || t[2] + t[5] + t[8] == 0 ) return true

  // Calculate a win for the diagonal line
  else if (t[0] + t[4] + t[8] == 3 || t[0] + t[4] + t[8] == 0 ) return true

  else if (t[2] + t[4] + t[6] == 3 || t[2] + t[4] + t[6] == 0 ) return true

  else return false

}


Array.prototype.compare=function(arr){
  for(let i=0;i<this.length;i++)
  {
    if(this[i] == arr[i]) continue
    else return false
  }
  return true
}


class Rect{
  constructor(x,y,width,height)
  {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  draw(color='orange'){
    let tile = document.createElement('div')
    tile.style.top=this.y + 'px'
    tile.style.left= this.x + 'px'
    tile.style.width = this.width + 'px'
    tile.style.height = this.height + 'px'
    tile.style.background = color
    app.appendChild(tile)
  }
}


function clearTiles()
{
  for(let i=0;i<9;i++)
  {
    app.querySelectorAll('div')[i].innerHTML = ''
  }
}


function fillWinT(winT)
{

  function randMinMax(min,max){
     return Math.ceil((Math.random() * (max - min)) + min)
  }

  for(let i=0;i<winT.length;i++)
  {
    winT[i] = randMinMax(123,999)
  }
}



