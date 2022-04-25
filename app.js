const smallCups = document.querySelectorAll('.cup-small')
const listers = document.querySelector('.liters')
const percantage = document.getElementById('percantage')
const remained = document.getElementById('remained')


updateBigCup()

smallCups.forEach((cup , idx) =>{
    cup.addEventListener('click' , () => hightlightCups(idx))
})


function hightlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup , idx2) =>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')

        }

    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percantage.style.visibility = 'hidden'
        percantage.style.height = 0
    }else{
        percantage.style.visibility = 'visible'
        percantage.style.height = `${fullCups / totalCups * 330}px`
        percantage.innerText = `${fullCups / totalCups * 100}%`
    }
    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        // listers.innerText = `${250 * fullCups / 1000}`
        listers.innerHTML = `${2 -(250 * fullCups / 1000)}`
    }
}