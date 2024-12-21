

// Toggle visibility of the mission section
function toggleMission() {
const missionSection = document.getElementById("mission-section");
if (missionSection.classList.contains("hidden"))
 {
missionSection.classList.remove("hidden");
} else {
missionSection.classList.add("hidden");
}
}
