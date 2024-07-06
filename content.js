let adsSkipped = 0;

// Function to skip ads
function skipAds() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton) {
        skipButton.click();
        adsSkipped++;
        updateAdsSkippedCount();
    }

    const closeButton = document.querySelector('.ytp-ad-overlay-close-button, .ytp-ad-overlay-close-container');
    if (closeButton) {
        closeButton.click();
        adsSkipped++;
        updateAdsSkippedCount();
    }
}

// Function to update ads skipped count in local storage and send to background
function updateAdsSkippedCount() {
    chrome.storage.local.set({ 'adsSkipped': adsSkipped });
    chrome.runtime.sendMessage({ 'adsSkipped': adsSkipped });
}

// Initial ads skipped count
chrome.storage.local.get('adsSkipped', (result) => {
    adsSkipped = result.adsSkipped || 0;
    updateAdsSkippedCount();
});

// Periodically check for ads to skip
setInterval(skipAds, 1000);
