document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('adsSkipped', (result) => {
        const adsSkippedElement = document.getElementById('adsSkipped');
        adsSkippedElement.textContent = `Total ads skipped: ${result.adsSkipped || 0}`;
    });

    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function () {
        window.close();
    });
});
