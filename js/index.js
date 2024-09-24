document.getElementById('donation-btn')
.addEventListener('click', function(event){
event.preventDefault()
const addDonate = getInputFieldValueById('donation-input');
const totalBalance = getTextFieldValueById('donation-balance');



if(isNaN(addDonate) || addDonate < 0){
    alert("Faild to donate. money amount is not correct")
    return;
}
if(addDonate > totalBalance){
    alert('You have not money')
    return;
}

if(typeof addDonate === "number"){
const peopleDonate = getTextFieldValueById('people-donate');
const newBalance = totalBalance - addDonate;
const newBalanceTow = peopleDonate + addDonate;
document.getElementById('donation-balance').innerText = newBalance;
document.getElementById('people-donate').innerText = newBalanceTow;
document.getElementById("my_modal_3").showModal();
// history
const div = document.createElement('div')
div.classList.add('p-8')
div.classList.add( 'border-2')
div.classList.add( 'rounded-xl')
div.classList.add( 'mb-5')
// const newDate = new Date()
div.innerHTML =`
<h1 class="text-2xl">${addDonate} 6500 Taka is Donate for Flood at Noakhali, Bangladesh</h1>
<p class="text-2xl bg-[#f5f2f2ca]">Date: ${new Date()}</p>
`
document.getElementById('history-container').appendChild(div);


}

})
// card 1 end

// card 2 start
document.getElementById('donation-btn-tow')
.addEventListener('click', function(event){
    event.preventDefault()
    const addDonateTwo = getInputFieldValueById('donation-input-tow');
    const globalBalance = getTextFieldValueById('donation-balance');

    if(isNaN(addDonateTwo) || addDonateTwo < 0){
     
        alert("Faild to donate")
        return;
    }
    if(addDonateTwo > globalBalance){
        alert('You have not money')
        return;
    }


    if(typeof addDonateTwo === "number"){
const peopleDonateTwo = getTextFieldValueById('people-donate-two')
const newDonateBalance = globalBalance - addDonateTwo;
const newDonateBalanceTwo = peopleDonateTwo + addDonateTwo;
document.getElementById('donation-balance').innerText = newDonateBalance;
document.getElementById('people-donate-two').innerText = newDonateBalanceTwo;
document.getElementById("my_modal_3").showModal();
// history
const div = document.createElement('div')
div.classList.add('p-8')
div.classList.add( 'border-2')
div.classList.add( 'rounded-xl')
div.classList.add( 'mb-5')
div.innerHTML =`
<h1 class="text-2xl">${addDonateTwo} Taka is Donate for Flood Relief in Feni,Bangladesh</h1>
<p class="text-2xl bg-[#f5f2f2ca]">Date: ${new Date()}</p>
`
document.getElementById('history-container').appendChild(div);

    }

})
//card 2 end

// card 3 start
document.getElementById('donation-btn-three')
.addEventListener('click', function(event){
    event.preventDefault()
    const addDonateThree = getInputFieldValueById('donation-input-three');
const totalDonationBalance = getTextFieldValueById('donation-balance')
const globalBalanceThree = getTextFieldValueById('donation-balance');

if(addDonateThree > totalDonationBalance){
    alert('You have not money')
    return;
}

if(totalDonationBalance < 0){
    alert("You have no money to donate")
return;
}

    if(isNaN(addDonateThree) || addDonateThree < 0){
        alert("Faild to donate")
        return;
    }
    


    if(typeof addDonateThree === "number"){
const peopleDonateThree = getTextFieldValueById('people-donate-three')
const newDonateBalanceT = globalBalanceThree - addDonateThree;
const newDonateBalanceThree = peopleDonateThree + addDonateThree;
document.getElementById('donation-balance').innerText = newDonateBalanceT;
document.getElementById('people-donate-three').innerText = newDonateBalanceThree;
document.getElementById("my_modal_3").showModal();
// history
const div = document.createElement('div')
div.classList.add('p-8')
div.classList.add( 'border-2')
div.classList.add( 'rounded-xl')
div.classList.add( 'mb-5')
// const newDate = new Date()
div.innerHTML =`
<h1 class="text-2xl">${addDonateThree} Taka is Donated for Aid for Injured in the Quota Movement</h1>
<p class="text-2xl bg-[#f5f2f2ca]">Date: ${new Date()}</p>
`
document.getElementById('history-container').appendChild(div);

    }

})
// go to FAQ page
document.getElementById('blog').addEventListener('click', function(){
window.location.href = "/question.html"
})

// history page
document.getElementById('history-btn')
.addEventListener('click', function(event){
event.preventDefault();

showSectionById('history-page')
const historyBtn = document.getElementById('history-btn')
const donateBtn = document.getElementById('donations-btn')
historyBtn.classList.add('bg-[#B4F461]')
donateBtn.classList.remove('bg-[#B4F461]')
})
// donation
document.getElementById('donations-btn')
.addEventListener('click', function(event){
event.preventDefault();

showSectionById('donation-page')
const historyBtn = document.getElementById('history-btn')
const donateBtn = document.getElementById('donations-btn')
historyBtn.classList.remove('bg-[#B4F461]')
donateBtn.classList.add('bg-[#B4F461]')


})