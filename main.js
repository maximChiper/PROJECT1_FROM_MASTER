// const disapear = document.querySelector('.bank-card')
// disapear.style.display='none'

const logo1 = document.querySelector('.logo')
const logo2 = document.querySelector('.logo2')
const logo3 = document.querySelector('.logo3')

setTimeout(()=>{
    logo1.style.display ='none'
    logo2.style.display = 'block'
},4000)
setTimeout(()=>{
    logo2.style.display ='none'
    logo3.style.display = 'block'
},8000)
setTimeout(()=>{
    logo3.style.display ='none'
    logo1.style.display = 'block'
},12000)



document.querySelector('#nrs-on-card').oninput= ()=>{
    const nrsOnCard = document.querySelector('#nrs-on-card')
    const output =  document.querySelector('#card-nr')
    nrsOnCard.value = output.value
}
