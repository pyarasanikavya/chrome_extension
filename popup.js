document.getElementById("getTitleBtn").addEventListener("click", () => {
    // Query the current active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        document.getElementById("titleDisplay").textContent = currentTab.title;
    });
});
