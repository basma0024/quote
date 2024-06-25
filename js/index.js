

var quotes = [
    "“So many books, so little time.” ― Frank Zappa",
    "“A room without books is like a body without a soul.” ― Marcus Tullius Cicero",
    "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
    "“Always forgive your enemies; nothing annoys them so much.” ― Oscar Wilde",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The way to get started is to quit talking and begin doing.",
    "“It is better to be hated for what you are than to be loved for what you are not.”  ― Andre Gide, Autumn Leaves",
    "“Your memory feels like home to me.So whenever my mind wanders, it always finds its way back to you.” ― Ranata Suzuki",
    "“Life is what happens to us while we are making other plans.”  ― Allen Saunders",
    "“Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this.”  ― Dave Eggers",
    "“You can have it all. Just not all at once.” ― Oprah Winfrey",
    "“They say time heals all wounds, but that presumes the source of the grief is finite” ― Cassandra Clare, Clockwork Prince",
    "“Time is the longest distance between two places.” ― Tennessee Williams, The Glass Menagerie"
];

var lastRandomIndex = -1; 

function generateQuote() {
    var randomIndex;
    
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex;

    var quote = quotes[randomIndex];
    console.log(quote);

    document.getElementById('quote').innerHTML = `
        <div class="quote-box my-3" id="quote">
            <p class="fs-3 fw-medium">${quote}</p>
        </div>
    `;
}
