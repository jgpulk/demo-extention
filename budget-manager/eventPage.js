var contextMenuItem = {
    id: "addExpense",
    title: "Add a expense",
    contexts: ["selection"]
}

chrome.contextMenus.create(contextMenuItem)

function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == 'addExpense' && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total', 'limit'], function(result){
                let newTotal = 0;
                if(result.total){
                    newTotal += parseInt(result.total)
                }
                newTotal += parseInt(clickData.selectionText)
                chrome.storage.sync.set({'total': newTotal}, function(){
                    if(newTotal > result.limit){
                        var limitNotificationOptions = {
                            type: 'basic',
                            iconUrl: 'images/icon48.png',
                            title: 'Limit exceeded!',
                            message: 'Oops!! It appears that you have reached your limit.'
                        }
                        chrome.notifications.create('limitNotification', limitNotificationOptions)
                    }
                })
            })
        }
    }
})