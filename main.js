// import calcWin from './utils.js'

let app = document.querySelector('div.wrapper div.app'),
     scoreX = document.querySelector('div.wrapper div.score span[id=X]'),
     scoreO = document.querySelector('div.wrapper div.score span[id=O]')


let rectArr = []
let rect = new Rect(0,0,150,150)

let tilesPath = [
        [1,0,1],
        [0,1,0],
        [1,0,1]
     ]

let posX = 0
let posY = 0
let count = 0
for(let i=0;i<tilesPath.length;i++)
{
  let rect = []
  for(let j=0;j<tilesPath[i].length;j++)
  {
    count++
    rect.push(new Rect(posX,posY,150,150,count))
    posX+=150
  }
  rectArr.push(rect)
  posX = 0
  posY+=150
}


for(let i=0;i<tilesPath.length;i++)
{
  for(let j=0;j<tilesPath[i].length;j++)
  {
    rectArr[i][j].draw( (tilesPath[i][j] == 1 ? '#ccc':'#fff'))
  }
}


// Getting all the tiles in the canvas
let tiles = app.querySelectorAll('div')

// Adding an event listener to each of the tile

let winT = [123,26,31,19,9,61,7,8,9]

let flip = false
tiles.forEach((element,i)=>{
  element.addEventListener('click',(e)=>{

    if(element.textContent != '') return


     if(flip){
      winT[i] = 0
      element.textContent = 'O'
      element.id = '0'
      flip = !flip
    }
    else
       {
         winT[i] = 1
          element.textContent = 'X'
          element.id = '1'
          flip = !flip
      }
      let toWin = calcWin(winT)

      if(toWin){
        (e.target.innerHTML == 'X' ? scoreX.innerText = Number(scoreX.innerText) + 1 : scoreO.innerText = Number(scoreO.innerText) + 1)

        setTimeout(clearTiles,1500)
        fillWinT(winT)
      }

  })

  // When you hover on any of the tile
})










