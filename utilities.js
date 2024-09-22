
function getInnerText(id){
    return document.getElementById(id).innerText;
}

function getValue(id){
    return document.getElementById(id).value;
}

function getId(id){
    return document.getElementById(id);
}


function donateBtn(id,input,amount,balance){
    getId(id).addEventListener('click',function(){
    
        let donationAmount = getValue(input);
        const totalBalance = parseFloat(getInnerText(balance));

        if(donationAmount <=0 || isNaN(donationAmount) || (donationAmount>totalBalance)){
            alert("Wrong Credentials");
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

            



    }
    })
}

