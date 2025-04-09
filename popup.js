document.getElementById("activateButton").addEventListener("click", function() {
    const statusElement = document.getElementById("status");
    statusElement.textContent = "Activating...";
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length === 0) {
            statusElement.textContent = "Error: No active tab found";
            return;
        }
        
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: modifyPageVisibility
        }, function() {
            if (chrome.runtime.lastError) {
                statusElement.textContent = "Error: " + chrome.runtime.lastError.message;
            } else {
                statusElement.textContent = "Tab activated successfully!";
                setTimeout(() => window.close(), 1500);
            }
        });
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