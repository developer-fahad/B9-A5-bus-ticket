function getSection(){
    document.getElementById("paribahan-section").scrollIntoView({behavior: 'smooth'});
    
}

const allbtn = document.getElementsByClassName('add-btn');
let totalBooked = 0;
let leftSeats = 40;
for(const btn of allbtn){
    btn.addEventListener('click', function(){
        totalBooked += 1;
        document.getElementById('total-booked').innerText =totalBooked;
        leftSeats -= 1;
        document.getElementById('left-seats').innerText = leftSeats;

        const pressedBtn = btn;
        // console.log(pressedBtn);
        const pressedBtnText = pressedBtn.innerText;
        // console.log(pressedBtnText);
        const bgText = document.getElementById(pressedBtnText);
        // console.log(bgText);
        bgText.classList.add('bg-green-300');

        const li = document.createElement('li');

        
        const seatName = pressedBtnText;
        console.log(seatName);
        const seatPrice = document.getElementById("seat-price").innerText;
        const createTextNode = document.createTextNode("Economy");

        const selectedSeat = document.getElementById("dynamic")
        // const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p');
        p2.appendChild(createTextNode);
        const p3 = document.createElement('p');
        p3.innerText = seatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        selectedSeat.appendChild(li);
        // console.log(selectedSeat);

        const totalPriceText = document.getElementById('total-price').innerText;
        console.log(totalPriceText);
        const totalPriceValue = parseInt(totalPriceText);
        

        const ticketPriceText = document.getElementById('seat-price').innerText;
        const ticketPriceValue = parseInt(ticketPriceText);

        const totalSum = totalPriceValue + ticketPriceValue;
        console.log(totalSum);

        document.getElementById('total-price').innerText = totalSum;

        const grandTotalText = document.getElementById('grand-total').innerText;
        const grandTotalValue = parseInt(grandTotalText);
        console.log(grandTotalValue);
        const grandSum = grandTotalValue + ticketPriceValue;
        document.getElementById('grand-total').innerText = grandSum;
        console.log(grandSum);

        



        
        if(totalBooked >= 1){
           const disable = document.getElementById(pressedBtnText);
        //    console.log(disable);
           disable.disabled = true;
        }

        


    })
}
