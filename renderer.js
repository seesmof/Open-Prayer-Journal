const saveButton = document.getElementById("saveButton");
const prayerEntry = document.getElementById("prayerEntry");
const prayerList = document.getElementById("prayerList");

saveButton.addEventListener("click", () => {
  const prayerText = prayerEntry.value;
  if (prayerText) {
    const prayerItem = document.createElement("div");
    prayerItem.textContent = prayerText;
    prayerList.appendChild(prayerItem);
    prayerEntry.value = "";
  }
});
