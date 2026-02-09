const content = {
1: { title: "Beyond the Horizon.", desc: "Where pink gravity rules and machine dreams take flight. 100% Unbound." },
2: { title: "Building Tomorrow.", desc: "The logic-anchored workshop for verified innovation and speculative design." },
3: { title: "Anchored in Reality.", desc: "The shared common record. Zero-drift. Human-attested. Total Truth." }
};

function setLayer(layer) {
// Update Body Class
document.body.className = `layer-${layer}`;

// Update UI Content
document.getElementById('hero-title').innerText = content[layer].title;
document.getElementById('hero-desc').innerText = content[layer].desc;

// Update Buttons
document.querySelectorAll('.toggle-switch button').forEach(btn => btn.classList.remove('active'));
document.getElementById(`t${layer}`).classList.add('active');
}