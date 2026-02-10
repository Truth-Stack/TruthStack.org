<script>
const demos = {
'l1': {
title: "LAYER 1: THE FORTRESS (VERIFIED)",
text: "REALITY LOCK SUSTAINED. P(H|E) = 0.9998. MATHEMATICAL PROOF COMMITTED TO CORE LOGIC. THE DREAM HAS BEEN MANIFESTED INTO VERIFIED STATE."
},
'l2': {
title: "LAYER 2: THE LABORATORY (TESTING)",
text: "DISTILLING IMAGINATION... APPLYING BAYESIAN FILTERS. CROSS-EXAMINING PEER DATA. CONSENSUS ACHIEVED: 91.2% VALIDITY SCORE."
},
'l3': {
title: "LAYER 3: AI DREAMS (GENERATIVE)",
text: "ENTERING GENERATIVE STATE. IMAGINATION ENGINE ACTIVE. RULES OF LOGIC SUSPENDED. NOTE: NOT TO BE TAKEN AS REALITY UNTIL TESTED IN THE LAB."
}
};

const buttons = document.querySelectorAll('.layer-button');
const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');

buttons.forEach(button => {
button.addEventListener('click', function(e) {
// This allows the L1 button to still open GitHub in a new tab
// while preventing L2 and L3 from jumping the page around.
const target = this.getAttribute('href');
if (target.startsWith('#')) {
e.preventDefault();
}

// UI Toggle: Remove 'active' from all, add to the one clicked
buttons.forEach(btn => btn.classList.remove('active'));
this.classList.add('active');

// Console Update: Fetch the data from our 'demos' object
const layer = this.getAttribute('data-layer');
outputTitle.innerText = demos[layer].title;
outputText.innerText = demos[layer].text;

// Visual feedback: Change the status dot color based on layer
const dot = document.querySelector('.status-dot');
if (layer === 'l1') dot.style.background = "#00bcd4";
if (layer === 'l2') dot.style.background = "#0077b6";
if (layer === 'l3') dot.style.background = "#4b0082";
});
});
</script>


