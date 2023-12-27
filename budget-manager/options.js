$(function(){
    chrome.storage.sync.get('limit', function(result){
        if(result.limit){
            $('#limit').val(result.limit)
        }
    })

    $('#setLimit').click(function(){
        let limit = $('#limit').val()
        if(limit){
            chrome.storage.sync.set({'limit': limit})
            close()
        } else{
            alert('Enter a limit')
        }
    })

    $('#resetData').click(function(){
        chrome.storage.sync.remove(['total', 'limit'], function(){
            var resetNotificationOptions = {
                type: 'basic',
                iconUrl: 'images/icon48.png',
                title: 'Values reseted!',
                message: 'Your values have been reset to their default settings.'
            }
            $('#limit').val('')
            chrome.notifications.create('resetNotification', resetNotificationOptions)
        });
    })
});