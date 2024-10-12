import { getPageUrl, checkPageUrl } from './site-url';

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        if (tab.url) {
            getPageUrl(tab);
        }
    }
})

chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url) {
            getPageUrl(tab);
        }
    })
})
//// TODO: Fix this. Service worker shits the bed when uncommented. 
//`// chrome.webNavigation.onCompleted.addListener(
//`//     () => {
//`//        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//`//            if (tabs.length > 0 && checkPageUrl(tabs[0].url)) {
//`//                chrome.action.openPopup();
//`//                console.log("opening popup...");
//`//            }
//`//        })
//`//     }
//` )
