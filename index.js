
// history button clicked

getId('historyBtn').addEventListener('click', function(){
    
    getId('card-container').classList.add('hidden');
    getId('donationBtn').classList.remove('bg-primary', 'font-bold');
    getId('donationBtn').classList.add('bg-white', 'border','border-gray-200');
    getId('historyBtn').classList.add('bg-primary','font-bold');
    getId('historyDiv').classList.remove('hidden');
    

})


// Donation button clicked


getId('donationBtn').addEventListener('click', function(){
    
    getId('card-container').classList.remove('hidden');
    getId('donationBtn').classList.add('bg-primary');
    getId('donationBtn').classList.remove('bg-white');
    getId('historyBtn').classList.remove('bg-primary');
    getId('donationBtn').classList.add('font-bold');
    getId('historyBtn').classList.remove('font-bold');

    getId('historyDiv').classList.add('hidden');
    

})


// Donate button clicked


donateBtn('NoakhaliDonateBtn', 'inputNoakhali', 'donationAmountNoakhali', 'balance', 'noakhaliCard');

donateBtn('feniDonateBtn', 'feniInput', 'donationAmountFeni', 'balance','feniCard');

donateBtn('quotaDonationBtn', 'quotaInput', 'donationAmountQuota', 'balance', 'quotaCard');


getId('closeModal').addEventListener('click',function(){
    getId('modal').classList.add('hidden');
})






