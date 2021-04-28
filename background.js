chrome.browserAction.onClicked.addListener(function(tab) {
    var urls_top_15 = [
        "https://www.netflix.com/watch/70274107",
        "https://www.netflix.com/watch/70274126",
        "https://www.netflix.com/watch/70274101",
        "https://www.netflix.com/watch/70274123",
        "https://www.netflix.com/watch/70274175",
        "https://www.netflix.com/watch/70274053",
        "https://www.netflix.com/watch/70274034",
        "https://www.netflix.com/watch/70274098",
        "https://www.netflix.com/watch/70274104",
        "https://www.netflix.com/watch/70274198",
        "https://www.netflix.com/watch/70274155",
        "https://www.netflix.com/watch/70274128",
        "https://www.netflix.com/watch/70274077",
        "https://www.netflix.com/watch/70274167",
        "https://www.netflix.com/watch/70274127"
    ];
    var urls_top_50 = [
        // Season 1
        "https://www.netflix.com/watch/70274020",
        "https://www.netflix.com/watch/70274014?trackId=200257859",
        "https://www.netflix.com/watch/70274003?trackId=200257859",
        // Season 2
        "https://www.netflix.com/watch/70274033?trackId=200257859",
        "https://www.netflix.com/watch/70274035?trackId=200257859",
        "https://www.netflix.com/watch/70274042?trackId=200257859",
        "https://www.netflix.com/watch/70274027?trackId=200257859",
        "https://www.netflix.com/watch/70274034?trackId=200257859",
        // Season 3
        "https://www.netflix.com/watch/70274065?trackId=200257859",
        "https://www.netflix.com/watch/70274069?trackId=200257859",
        "https://www.netflix.com/watch/70274046?trackId=200257859",
        "https://www.netflix.com/watch/70274060?trackId=200257859",
        "https://www.netflix.com/watch/70274050?trackId=200257859",
        "https://www.netflix.com/watch/70274053?trackId=200257859",
        // Season 4
        "https://www.netflix.com/watch/70274076?trackId=200257859",
        "https://www.netflix.com/watch/70274092?trackId=200257859",
        "https://www.netflix.com/watch/70274070?trackId=200257859",
        "https://www.netflix.com/watch/70274077?trackId=200257859",
        "https://www.netflix.com/watch/70274093?trackId=200257859",
        "https://www.netflix.com/watch/70274081?trackId=200257859",
        // Season 5
        "https://www.netflix.com/watch/70274112?trackId=200257859",
        "https://www.netflix.com/watch/70274096?trackId=200257859",
        "https://www.netflix.com/watch/70274116?trackId=200257859",
        "https://www.netflix.com/watch/70274094?trackId=200257859",
        "https://www.netflix.com/watch/70274095?trackId=200257859",
        "https://www.netflix.com/watch/70274117?trackId=200257859",
        "https://www.netflix.com/watch/70274104?trackId=200257859",
        "https://www.netflix.com/watch/70274102?trackId=200257859",
        "https://www.netflix.com/watch/70274101?trackId=200257859",
        "https://www.netflix.com/watch/70274107?trackId=200257859",
        // Season 6
        "https://www.netflix.com/watch/70274118?trackId=200257859",
        "https://www.netflix.com/watch/70274139?trackId=200257859",
        "https://www.netflix.com/watch/70274134?trackId=200257859",
        "https://www.netflix.com/watch/70274126?trackId=200257859",
        "https://www.netflix.com/watch/70274142?trackId=200257859",
        // Season 7
        "https://www.netflix.com/watch/70274165?trackId=200257859",
        "https://www.netflix.com/watch/70274148?trackId=200257859",
        "https://www.netflix.com/watch/70274166?trackId=200257859",
        // Season 8
        "https://www.netflix.com/watch/70274190?trackId=200257859",
        "https://www.netflix.com/watch/70274168?trackId=200257859",
        "https://www.netflix.com/watch/70274170?trackId=200257859",
        "https://www.netflix.com/watch/70274175?trackId=200257859",
        // Season 9
        "https://www.netflix.com/watch/70274198?trackId=200257859",
        // Season 10
        "https://www.netflix.com/watch/70274217?trackId=200257859",
        "https://www.netflix.com/watch/70274216?trackId=200257859",
        "https://www.netflix.com/watch/70274230?trackId=200257859",
        "https://www.netflix.com/watch/70274222?trackId=200257859",
        "https://www.netflix.com/watch/70274225?trackId=200257859",
        "https://www.netflix.com/watch/70274231?trackId=200257859"
    ];
    var urls = urls_top_50;
    var min = 0;
    var max = urls.length;
    var random_index = Math.floor(Math.random() * (max - min) ) + min;
    var url = urls[random_index];
    let domain = (new URL(tab.url));
    domain = domain.hostname.replace('www.','');
    if (domain == "netflix.com") {
        chrome.tabs.update(tab.id, {url: url});
    } else {
        chrome.tabs.create({ url: url});
    }
});