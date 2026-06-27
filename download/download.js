document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('downloadBtn');
    button.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = "../bild/White World Launcher.exe";
        link.click();
    });
});