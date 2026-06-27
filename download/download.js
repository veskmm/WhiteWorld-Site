const DataFile = "27 July"
const DataFileForm = new Date('2026-06-27')

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('downloadBtn');
    button.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = "../bild/White World Launcher.exe";
        link.click();
    });

    const Data = document.getElementById('dataP');
    Data.textContent = Data.textContent + DataFile;
    const DayAgo = document.getElementById('dayAgoP');

    const pastDate = DataFileForm;
    const now = new Date();
    const daysPassed = getDaysDifference(pastDate, now);

    DayAgo.textContent = daysPassed + DayAgo.textContent;
});

function getDaysDifference(date1, date2) {
  const diffMs = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
}