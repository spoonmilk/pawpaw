
/**
 * Retrieves the URL of the current page.
 * @param {chrome.tabs.Tab} tab The object that describes the tab.
 * @returns {Promise<string>} The URL of the current page.
 */
export const getPageUrl = (tab: chrome.tabs.Tab) => {
    return chrome.scripting.executeScript({
        target: { tabId: tab.id || -1},
        func: () => {
            return window.location.href
        }
    }).then((result) => {
        return result[0].result;
    });
}


/**
 * Checks if the URL of the page is congruent with EULA, SLA, TOS, etc.
 * @param {string} tabUrl The URL of the current page.
 * @returns {boolean} True if the URL is congruent with EULA, SLA, TOS, etc.
 */
export const checkPageUrl = (tabUrl: string): boolean => {
    // TODO: More efficient way of doing this? there ought to be.
    for (const flag of commonFlags) {
        return (new RegExp(flag)).test(tabUrl);
    }
    return false;
}

const commonFlags: Array<string> = [
        "*://*/*terms-of-service*",
        "*://*/*terms-and-conditions*",
        "*://*/*terms-of-use*",
        "*://*/*youtube.com/t*",
        "*://*/*privacy-policy*",
        "*://*/*cookie-policy*",
        "*://*/*cookie-notice*",
        "*://*/*privacy-notice*",
        "*://*/*tos*",
        "*://*/*eula*",
        "*://*/*sla*",
        "*://*/*policies*",
        "*://*/*license-agreement*",
        "*://*/*license*",
        "*://*/*license-notice*",
        "*://*/*user-agreement*",
        "*://*/*legal*",
        "*://*/*agreement*"]; 
