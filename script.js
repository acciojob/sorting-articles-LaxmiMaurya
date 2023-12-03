//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to sort articles without considering "a, an, the"
    function sortArticles(bands) {
        return bands.sort((a, b) => {
            const ignoreWords = ["a", "an", "the"];
            const cleanA = removeIgnoredWords(a, ignoreWords);
            const cleanB = removeIgnoredWords(b, ignoreWords);
            return cleanA.localeCompare(cleanB);
        });
    }

    // Function to remove ignored words from an article
    function removeIgnoredWords(article, ignoreWords) {
        const words = article.split(' ');
        return words.filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
    }

    // Get the sorted list of articles
    const sortedBands = sortArticles(bands);

    // Display the sorted articles in the HTML
    const articleList = document.getElementById('band');
    sortedBands.forEach(article => {
        const li = document.createElement('li');
        li.textContent = article;
        articleList.appendChild(li);
    });
});