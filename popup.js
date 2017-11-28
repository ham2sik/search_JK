function searchEvent() {
    var query = document.getElementById("stext").value;
    if (query !== "") {
        chrome.tabs.create({
            'url': "http://www.jobkorea.co.kr/Search/?stext=" + query
        });
    } else {
        window.location.reload();
    }
}

function init() {
    document.getElementById('common_search_btn').addEventListener('click', searchEvent);
    document.getElementById("stext").addEventListener("keypress", function(pressKey) {
        if (pressKey.keyCode === 13) {
            searchEvent();
        }
    }, false);
    document.getElementById("stext").focus();
}

document.addEventListener('DOMContentLoaded', init, false);
