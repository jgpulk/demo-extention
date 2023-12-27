var contextMenuItem = {
    id: "addExpense",
    title: "Add a expense",
    contexts: ["selection"]
}

chrome.contextMenus.create(contextMenuItem)
