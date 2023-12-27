$(function(){
    chrome.storage.sync.get(['total', 'limit'], function(result){
        if(result){
            $('#total').text(result.total || 0)
            $('#limit').text(result.limit || 0)
        }
    })

    $('#addExpense').click(function(){
        chrome.storage.sync.get(['total', 'limit'], function(result){
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
                if(newTotal > result.limit){
                    var limitNotificationOptions = {
                        type: 'basic',
                        iconUrl: 'images/icon48.png',
                        title: 'Limit exceeded!',
                        message: 'Oops!! It appears that you have reached your limit.'
                    }
                    chrome.notifications.create('limitNotification', limitNotificationOptions)
                }
            } else{
                alert('Enter a expense')
            }
        })
    })
});