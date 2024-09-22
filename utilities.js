
function getInnerText(id){
    return document.getElementById(id).innerText;
}

function getValue(id){
    return document.getElementById(id).value;
}

function getId(id){
    return document.getElementById(id);
}


function donateBtn(id,input,amount,balance,card){
    getId(id).addEventListener('click',function(){
    
        let donationAmount = getValue(input);
        const totalBalance = parseFloat(getInnerText(balance));

        if(donationAmount <=0 || isNaN(donationAmount) || (donationAmount>totalBalance)){
            alert("Invalid Donation Amount");
            getId(input).value = "";
            return;
        }
        else{
            
            const prevAmount = parseFloat(getId(amount).innerText) ;
            donationAmount= parseFloat(donationAmount);

            let sum= prevAmount + donationAmount;
            getId(amount).innerText = sum;
            getId(input).value = "";
            getId(balance).innerText = totalBalance - donationAmount ;

            getId('modal').classList.remove('hidden');
            getId('modal').classList.add('flex');


           let city = "";
           if(card === "noakhaliCard"){
             city = "Flood Relief in Noakhali, Bangladesh";
           }
           else if(card === "feniCard"){
            city = "famine-2024 at Feni, Bangladesh";
           }
           else{
            city = "Aid for Injured in the Quota Movement, Bangladesh";
           }

        
            
            
          
            const date = new Date(); 
            getId('historyDiv').classList.add('flex','items-center' ,'flex-col','gap-3');
            getId('historyDiv').innerHTML += `<div class="flex flex-col gap-3 w-11/12 border border-gray-200 p-4 rounded-lg shadow-lg">

             <p class="font-bold text-lg lg:text-2xl ">${donationAmount} Taka is Donated for ${city}</p>

                <p class="bg-slate-100"> ${date} </p>

            </div>`

            


    }
    })
}

