var filter_url = "https://tommyim.github.io/adguard-filter-list/filter.txt";

async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied the text: " + text);
    } catch (error) {
        alert("Error copying text: ", error);
    }
}