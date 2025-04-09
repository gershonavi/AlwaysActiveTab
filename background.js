// Handle toolbar icon clicks when popup is not defined
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: modifyPageVisibility
    });
});

function modifyPageVisibility() {
    // Override visibility properties
    Object.defineProperty(document, "visibilityState", {
        get: function() { return "visible"; }
    });
    
    Object.defineProperty(document, "hidden", {
        get: function() { return false; }
    });
    
    // Prevent visibility change events
    document.addEventListener("visibilitychange", function(e) {
        e.stopImmediatePropagation();
    }, true);
    
    // Also handle focus/blur events
    window.addEventListener("blur", function(e) {
        e.stopImmediatePropagation();
    }, true);
    
    window.addEventListener("focus", function(e) {
        e.stopImmediatePropagation();
    }, true);
    
    // For page lifecycle API
    if (typeof document.wasDiscarded !== 'undefined') {
        Object.defineProperty(document, "wasDiscarded", {
            get: function() { return false; }
        });
    }
    
    console.log("Always Active Tab: Page visibility override activated");
}