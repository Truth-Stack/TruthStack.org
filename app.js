<script>
// 1. Select the new interactive elements
const conceptInput = document.getElementById('user-concept');
const processBtn = document.getElementById('process-btn');
const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');
const buttons = document.querySelectorAll('.layer-button');
const consoleDot = document.getElementById('console-dot');

// Default concept if the user doesn't type anything
let currentConcept = "Truth";

// 2. The Core Function: Updates the UI and Console
function updateStack(layer) {
// Handle Button States
buttons.forEach(btn => btn.classList.remove('active'));
const activeBtn = document.querySelector(`[data-layer="${layer}"]`);
activeBtn.classList.add('active');

// The "Logic Library" - this is where the magic happens
const library = {
'l3': {
title: "L3: AI DREAMS (GENERATING...)",
text: `DREAM SEQUENCE: In the vast neural ocean, "${currentConcept}" is a shimmering prism of infinite colors. It exists as a thousand possibilities at once, unburdened by the weight of physical laws or historical record. It is pure potentiality waiting for a frame.`,
color: "#4b0082" // Purple
},
'l2': {
title: "L2: THE LABORATORY (REFINING...)",
text: `EXPERIMENTAL LOG: Isolating the core attributes of "${currentConcept}" from generative noise. Applying Bayesian constraints. Cross-referencing against the Information Commons... Signal-to-noise ratio: 88%. Metaphoric artifacts removed. Logical structure identified.`,
color: "#0077b6" // Dark Blue
},
'l1': {
title: "L1: THE FORTRESS (VERIFIED)",
text: `TRUTH ANCHORED: "${currentConcept}" has been successfully verified through recursive proof-of-logic. Probability of validity: 99.98%. It is now a fixed point in the core protocol. The dream has been manifested into foundation.`,
color: "#00bcd4" // Cyan
}
};

// Update the Console
outputTitle.innerText = library[layer].title;
outputText.innerText = library[layer].text;
consoleDot.style.backgroundColor = library[layer].color;
}

// 3. Listen for the "Process" button click
processBtn.addEventListener('click', () => {
if(conceptInput.value.trim() !== "") {
currentConcept = conceptInput.value;
// When they click process, we start them at the bottom (The Dream)
updateStack('l3');
} else {
alert("Please enter a concept to verify.");
}
});

// 4. Allow users to manually click layers to see the progression
buttons.forEach(button => {
button.addEventListener('click', function(e) {
// Prevent link jumping for L2 and L3
if(this.getAttribute('href').startsWith('#')) e.preventDefault();
updateStack(this.getAttribute('data-layer'));
});
});
</script>

