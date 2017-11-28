function getClickHandler(info, tab){
	chrome.tabs.create({
		"url":"http://www.jobkorea.co.kr/Search/?stext=" + encodeURIComponent(info.selectionText)
	});
}
﻿
chrome.contextMenus.create({
    "title": "JOBKOREA에서 '%s' 검색",
    "contexts": ["selection"],
    "onclick": getClickHandler
});
