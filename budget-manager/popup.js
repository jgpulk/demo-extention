$(function(){
    chrome.storage.sync.get('total', function(result){
        if(result.total){
            $('#total').text(result.total)
        }
    })

    $('#addExpense').click(function(){
        chrome.storage.sync.get('total', function(result){
            let newTotal = 0;
            if(result.total){
                newTotal += parseInt(result.total)
            }

            let amountInput = $('#amount').val()
            if(amountInput){
                newTotal += parseInt(amountInput)
                chrome.storage.sync.set({'total': newTotal})
                $('#total').text(newTotal)
                $('#amount').val('')
            } else{
                alert('Enter a expense')
            }
        })
    })
});