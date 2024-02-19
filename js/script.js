function getSection(){
    document.getElementById("paribahan-section").scrollIntoView({behavior: 'smooth'});
    
}

const allbtn = document.getElementsByClassName('add-btn');
let totalBooked = 0;
let leftSeats = 16;
let seatCount = 0;
for(const btn of allbtn){
    btn.addEventListener('click', function(){
        if(seatCount < 4){
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
        bgText.setAttribute("disabled", true);

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
        seatCount++;
        console.log(seatCount);

        if(seatCount === 3){
            document.getElementById('apply-btn').addEventListener('click', function(){
                const couponValue = document.getElementById('coupon').value;
                // const couponStrTrim = couponValue.slpit(' ').join(' ').trim();
                if(couponValue === 'NEW15'){
                    const discount = document.getElementById('discount');
                    const p1 = document.createElement('p')
                    p1.classList.add('py-2');
                    p1.innerText ='Discount Price:';
                    discount.appendChild(p1);
                    const p2 = document.createElement('p')
                    p2.classList.add('py-2');
                    
                    const totalDiscountText = document.getElementById('total-price').innerText;
                    const totalDiscountValue = parseInt(totalDiscountText);
                    const calculateDiscount = 0.15*totalDiscountValue;
                    p2.innerText = calculateDiscount;
                    discount.appendChild(p2);
                    const grandTotalFinal = document.getElementById('grand-total').innerText;
                    const grantTotalFinalValue = parseInt(grandTotalFinal);
                    const grandFinal = grantTotalFinalValue - calculateDiscount;
                    document.getElementById('grand-total').innerText = grandFinal;

                    const remove = document.getElementById('coupon');
                    const applyDisable = document.getElementById('apply-btn');
                    const applyInputDisable = document.getElementById('coupon');
                    applyDisable.setAttribute('disabled', true);
                    applyInputDisable.setAttribute('disabled', true);
                    
                    remove.value = '';


                }
                else if(couponValue === 'Couple 20'){
                    const discount = document.getElementById('discount');
                    const p1 = document.createElement('p')
                    p1.classList.add('py-2');
                    p1.innerText ='Discount Price:';
                    discount.appendChild(p1);
                    const p2 = document.createElement('p')
                    p2.classList.add('py-2');
                    
                    const totalDiscountText = document.getElementById('total-price').innerText;
                    const totalDiscountValue = parseInt(totalDiscountText);
                    const calculateDiscount = 0.2*totalDiscountValue;
                    p2.innerText = calculateDiscount;
                    discount.appendChild(p2);
                    const grandTotalFinal = document.getElementById('grand-total').innerText;
                    const grantTotalFinalValue = parseInt(grandTotalFinal);
                    const grandFinal = grantTotalFinalValue - calculateDiscount;
                    document.getElementById('grand-total').innerText = grandFinal;

                    const remove = document.getElementById('coupon');
                    const applyDisable = document.getElementById('apply-btn');
                    const applyInputDisable = document.getElementById('coupon');
                    applyDisable.setAttribute('disabled', true);
                    applyInputDisable.setAttribute('disabled', true);
                    
                    remove.value = '';


                }
                else{
                    alert('You are not eligible.')
                }
            })
        }

        const phone = document.getElementById('phone');
        phone.addEventListener('keyup', function(){
            if(isNaN(phone.value)){
                return;
            }
            else{
                document.getElementById('next-btn').addEventListener('click', function(){
                    const modal = document.getElementById('my_modal_1');
                    my_modal_1.showModal();
                    phone.value = '';
                })
            }
        })


        }
        else{
            alert('You have booked 4 seats.')
        }


        // if(totalBooked >= 1){
        //     const disable = document.getElementById(pressedBtnText);
        //  //    console.log(disable);
        //     disable.disabled = true;
        //  }



        
        

        


    })
}
