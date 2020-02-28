const message = {
  type: "basic",
  iconUrl: "icon.png",
  title: "eye-do-care reminder",
  message:
    "Take a 20-second break by focusing your eyes on something 20 feet away",
  buttons: [{ title: "Give those eyes a rest." }]
};

chrome.alarms.onAlarm.addListener(alarm => {
  console.log(`${alarm.name} alarm fired!`);
  alert("Time to rest your eyes for 20 seconds!")
  chrome.notifications.create(message);
  //communicate to content.js:
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {message: "alarm"});
  });
});

//if relying on notifications to set the next alarm:
// chrome.notifications.onClosed.addListener(() => {
//   chrome.storage.sync.get(["minutes"], item => {
//     if (item.minutes) {
//       chrome.browserAction.setBadgeText({ text: "ON" });
//       chrome.alarms.create({ delayInMinutes: item.minutes });
//     }
//   });
// });

// //allow extension to run without having to refresh/reload:
// chrome.webNavigation.onHistoryStateUpdated.addListener(() => {
//   chrome.tabs.executeScript(null, { file: "content.js" });
// });
