var filter_url = "https://tommyim.github.io/adguard-filter-list/filter.txt";

function copyToClipboard(url) {
    var copyText = url;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}