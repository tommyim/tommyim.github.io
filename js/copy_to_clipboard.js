const FILTER_URL = "./adguard-filter-list/filter.txt";
const FILTER_SRS_URL = "./adguard-filter-list/filter.srs";

async function copyToClipboard(text) {
    try {
        const absoluteUrl = new URL(text, window.location.href).href;
        await navigator.clipboard.writeText(absoluteUrl);;
        alert(`Copied the text: ${absoluteUrl}`);
    } catch (error) {
        console.error("Error copying text:", error);
        alert("Failed to copy text. Please try again.");
    }
}
