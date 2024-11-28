document.getElementById("moveStopLossButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: moveStopLossToBreakEven
    });
  });
});

function moveStopLossToBreakEven() {
  // Logic to interact with TradingView's interface.
  // This will likely involve DOM manipulation or API calls to TradingView
  // to access and modify the Stop Loss.

  // Example:
  console.log("Move Stop Loss to Break Even - TradingView integration logic goes here.");
}
