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




const cardNumber = document.querySelector('#nrs-on-card')
let txtCardNumber = document.querySelector("#card-nr");

txtCardNumber.addEventListener("input", (e)=> {
    let cardNumber = txtCardNumber.value;

    // Do not allow users to write invalid characters
    let formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);

    // Split the card number is groups of 4
    let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join(' ');
    }

    console.log("'"+ cardNumber + "' to '" + formattedCardNumber + "'");

    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumber !== formattedCardNumber) {
        txtCardNumber.value = formattedCardNumber;
    }
})
txtCardNumber.addEventListener('input', (ev)=> {
    const inputValue = ev.target.value
    cardNumber.value = inputValue
})

const cardName = document.querySelector('#card-name')
const cardNameOnCard = document.querySelector("#name-on-card")

cardName.addEventListener('input', (ev)=>{
    const inputValue = ev.target.value
    cardNameOnCard.value = inputValue
})


const yearMonthOnCard = document.querySelector('#year-mounth-on-card')
const month  = document.querySelector('#month')


const year = document.querySelector('#year')

 year.addEventListener('input', (ev)=>{
    const inputValue2 = ev.target.value
     inputOnyear +=inputValue2
})
let inputOnyear = ''
month.addEventListener('input', (ev)=>{
    const inputValue = ev.target.value
    yearMonthOnCard.value = inputValue+'/'+inputOnyear
})
