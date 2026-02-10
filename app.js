<script>
// 1. Select the interface elements
const conceptInput = document.getElementById('user-concept');
const processBtn = document.getElementById('process-btn');
const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');
const buttons = document.querySelectorAll('.layer-button');
const consoleDot = document.getElementById('console-dot');

// Default concept
let currentConcept = "Truth";

// 2. The Core Function: Updates UI and Console
function updateStack(layer) {
// Toggle the 'active' class visually
buttons.forEach(btn => btn.classList.remove('active'));
const activeBtn = document.querySelector(`[data-layer="${layer}"]`);
activeBtn.classList.add('active');

// The Deconstruction Library
const library = {
'l1': {
title: "L1: THE FORTRESS (VERIFIED STATE)",
// We use HTML here to include the link
html: `CORE TRUTH: "${currentConcept}" is mathematically anchored. Proof-of-Logic secured. Reality State: Immutable.<br><br><a href="https://github.com/Truth-Stack/TruthStack.org/tree/main/core" target="_blank" style="color:#00bcd4; font-weight:bold; text-decoration:underline;">ACCESS THE FORTRESS BLUEPRINTS →</a>`,
color: "#00bcd4"
},
'l2': {
title: "L2: THE LABORATORY (RECONSTRUCTION)",
text: `REVERSE ANALYSIS: Deconstructing "${currentConcept}" into testable variables. Removing institutional weight. Bayesian filters active. Signal-to-noise ratio: 88%. Metaphoric artifacts removed.`,
color: "#0077b6"
},
'l3': {
title: "L3: AI DREAMS (FLUID STATE)",
text: `DREAM SEQUENCE: Returning "${currentConcept}" to the neural ocean. Rules of logic suspended. It exists now as pure potentiality—a thousand flickering metaphors in the digital subconscious.`,
color: "#4b0082"
}
};

// Update the Console Header and Dot
outputTitle.innerText = library[layer].title;
consoleDot.style.backgroundColor = library[layer].color;

// Update the Console Body
if (layer === 'l1') {
outputText.innerHTML = library[layer].html;
outputText.style.color = "#00bcd4"; // Fortress Cyan
} else {
outputText.innerText = library[layer].text;
outputText.style.color = "#a0a0a0"; // Neutral Grey for lower layers
}
}

// 3. Process Button: Resets to L1 (Top) with new word
processBtn.addEventListener('click', () => {
if(conceptInput.value.trim() !== "") {
currentConcept = conceptInput.value;
updateStack('l1');
} else {
alert("Please enter a concept to deconstruct.");
}
});

// 4. Manual Layer Navigation
buttons.forEach(button => {
button.addEventListener('click', function() {
updateStack(this.getAttribute('data-layer'));
});
});

// 5. Initialize the page on L1
updateStack('l1');
</script>

