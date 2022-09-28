import mergeSort from "./mergeSort";


export default function animateMerge(array, speed) {
    const animate_speed_ms = speed
    let animations = mergeSort(array)

    for (let i=0; i<animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar')
        const colorChange = i % 3 !== 2
        
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0? "red": "turquoise"

                if (barOneIdx !== barTwoIdx) {
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color
                        barTwoStyle.backgroundColor = color
                    }, animate_speed_ms * i)
                }


    
            }else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`
                }, animate_speed_ms * i)
            }
        }
    }

