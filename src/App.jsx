import './App.css'
import React from 'react'
import animateMerge from './algorithms/MergeSort/animateMerge';


function App() {
  
  const initArray = [294, 304, 499, 53, 403, 125, 323, 399, 472, 66, 241, 406, 476, 148, 63, 424, 12, 248, 365, 126, 308, 352, 174, 315, 259, 48, 232, 25, 84, 400, 322, 141, 479, 187, 228, 17, 21, 109, 163, 37, 160, 254, 383, 257, 42, 455, 483, 20, 284, 283, 35, 331, 11, 367, 76, 40, 64, 363, 497, 252, 281, 420, 34, 278, 387, 133, 83, 292, 217, 113, 75, 390, 415, 338, 61, 356, 205, 215, 56, 316, 112, 500, 384, 191, 144, 368, 156, 468, 65, 447, 296, 130, 255, 431, 278, 452, 80, 484, 393, 139]
  const [speed, setSpeed] = React.useState(3)
  const [arraySize, setArraySize] = React.useState(100)
  const [mainArray, setArray] = React.useState(initArray)
  const [isVisualizing, setIsVisualizing] = React.useState(false)

  function generateArray() {
    let newArray = []
    for (let i=0; i<arraySize; i++) {
      let randomNum = generateRandomNum(10, 500)
      if (newArray.includes(randomNum) === false) {
        newArray.push(randomNum)
      }else {
        randomNum = generateRandomNum(10, 500)
        newArray.push(randomNum)
      }
    }
    setArray(newArray)
  }

  function reset() {
    location.reload()
  }

  function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function speedFuncHandler(speed) {
    const animSpeed = speed * -1
    setSpeed(animSpeed)
  }

  function sizeFuncHandler (size) {
    setArraySize(size)
    generateArray()
  }

  function mergeSortHelper() {
    setIsVisualizing(true)
    setTimeout(() => {
      animateMerge(mainArray, speed)
    }, 5)
  }

  function quickSortHelper() {
    // To be Added
  }

  function selectionSortHelper() {
    // To be Added
  }



  return (
    <div className="App">

      <div className='nav'>
        <div className='title'>Sorting Visualizer</div>
        <div className='controls'>
          <div className='ctrl0'>
            {isVisualizing === false && <div id="sBtn" onClick={generateArray}>New Array</div>}
            {isVisualizing === true && <div id='sBtnOn' onClick={reset}>Reset</div>}
            
          </div>
          <div className='ctrl1'>
            <div id='sliderInput'>
              <label>Speed</label>
              {isVisualizing === false && <input type="range" onChange={(event)=>{speedFuncHandler(event.target.value)}} name="speed" id="speed_input" min="-300" max="-3"></input>}
              {isVisualizing === true && <input type="range" onChange={()=>{}} value="0"></input>}
            </div>
            <div id='sliderInput'>
              <label>Size</label>
              {isVisualizing === false && <input type="range" onChange={(event) => {sizeFuncHandler(event.target.value)}} name="size" id="size-input" min="5" max="140"></input>}
              {isVisualizing === true && <input type="range" onChange={()=>{}} value="0"></input>}
            </div>
          </div>

          <div className='ctrl2'>
            {isVisualizing === false && <div id='algoBtn' onClick={mergeSortHelper}>Merge Sort</div>}
            {isVisualizing === false && <div id='algoBtn' style={{cursor: "not-allowed"}}>Quick Sort</div>}
            {isVisualizing === false && <div id="algoBtn" style={{cursor: "not-allowed"}}>Selection Sort</div>}

            {isVisualizing === true && <div id='algoBtnNotAvailable'>Merge Sort</div>}
            {isVisualizing === true && <div id='algoBtnNotAvailable'>Quick Sort</div>}
            {isVisualizing === true && <div id='algoBtnNotAvailable'>Selection Sort</div>}
          </div>

        </div>
      </div>
      <div className='hero'>
        <div className='bars'>
        {mainArray.map((value, ind) => {
          const styles = {height: `${value}px`, backgroundColor: 'turquoise'}
          return <div className='array-bar'
          style={styles}
          key={ind}
          ></div>
        })}
        </div>
      </div>
    </div>
  )
}

export default App
