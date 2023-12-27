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
        chrome.storage.sync.set({'total': 0, 'limit': 0})
        close()
    })
});