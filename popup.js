const setAlarm = event => {
  let minutes = parseInt(event.target.value || 20);
  let minutes2 = minutes + 1/3

  chrome.browserAction.setBadgeText({ text: "ON" });
  chrome.alarms.create("eye-care", {
    delayInMinutes: minutes,
    periodInMinutes: minutes2
  });
  // chrome.storage.sync.set({ minutes: minutes });
  window.close();
};

const clearAlarm = () => {
  chrome.browserAction.setBadgeText({ text: "" });
  chrome.alarms.clearAll();
  window.close();
};

const setSampleAlarm = event => {
  chrome.alarms.create("sample", {
    when: Date.now()
  });
};

document.getElementById("sampleAlarm").addEventListener("click", setSampleAlarm);

document.getElementById("startNow").addEventListener("click", setAlarm);

document.getElementById("10min").addEventListener("click", setAlarm);

document.getElementById("20min").addEventListener("click", setAlarm);

document.getElementById("30min").addEventListener("click", setAlarm);

document.getElementById("40min").addEventListener("click", setAlarm);

document.getElementById("cancelAlarm").addEventListener("click", clearAlarm);
