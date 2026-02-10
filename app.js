<script>
const launchBtn = document.getElementById('launch-button');
const userInput = document.getElementById('user-input');
const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');
const buttons = document.querySelectorAll('.layer-button');

let currentConcept = "";

launchBtn.addEventListener('click', () => {
currentConcept = userInput.value || "Reality";
// Auto-select the Dream layer to start
activateLayer('l3');
});

function activateLayer(layer) {
buttons.forEach(btn => btn.classList.remove('active'));
document.querySelector(`[data-layer="${layer}"]`).classList.add('active');

const responses = {
'l3': {
title: "L3: AI DREAMS (GENERATING...)",
text: `DREAMSTATE INITIALIZED for "${currentConcept}"... In the digital subconscious, ${currentConcept} is a flickering neon bridge between binary stars. It is an echo of a thousand libraries, a swirl of unconstrained potential where logic is a fluid and the outcome is infinite.`
},
'l2': {
title: "L2: THE LABORATORY (FILTERING...)",
text: `TESTING "${currentConcept}"... Filtering metaphorical noise. Applying Bayesian constraints. [SIGNAL DETECTED]. Cross-referencing institutional data points... Probability of verifiable truth: 92.4%. Removing generative artifacts.`
},
'l1': {
title: "L1: THE FORTRESS (VERIFIED)",
text: `VERIFIED STATE: "${currentConcept}" is a fundamental construct of the observed environment. Logic lock established. Anchoring to Core Protocol. Verification: P(H|E) = 0.9998.`
}
};

outputTitle.innerText = responses[layer].title;
outputText.innerText = responses[layer].text;
}

buttons.forEach(button => {
button.addEventListener('click', function(e) {
if(this.getAttribute('href').startsWith('#')) e.preventDefault();
activateLayer(this.getAttribute('data-layer'));
});
});
</script>




