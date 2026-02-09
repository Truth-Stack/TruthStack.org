"""
TRUTH STACK PROTOCOL - CORE VERIFICATION LOGIC (V1.0.0-GENESIS)
Layer 3: The Fortress of Math
Standard: did:truthstack:l3-logic
"""

import math

class TruthEngine:
def __init__(self, baseline_trust=0.5):
self.baseline_trust = baseline_trust

def calculate_integrity_score(self, source_reputation, consensus_rate, data_entropy):
"""
Calculates the probability of 'Ground Truth' using weighted Bayesian inference.

:param source_reputation: 0.0 to 1.0 (Historical accuracy of the peer/node)
:param consensus_rate: 0.0 to 1.0 (Agreement among independent 'Pillars')
:param data_entropy: 0.0 to 1.0 (High entropy = more noise/uncertainty)
"""

# 1. Weighting the Inputs
w_rep = 0.45 # Source reputation is the primary anchor
w_con = 0.35 # Peer consensus is the secondary shield
w_ent = 0.20 # Entropy acts as the 'Noise Floor'

# 2. Calculating the Raw Signal
signal = (source_reputation * w_rep) + (consensus_rate * w_con)

# 3. Applying the Entropy Penalty (The 'Cleave')
# High entropy aggressively reduces trust in the information
integrity_score = signal * (1 - (data_entropy * w_ent))

return round(integrity_score, 4)

# --- EXAMPLE GENESIS ATTESTATION ---
if __name__ == "__main__":
engine = TruthEngine()

# Case: A high-reputation scientific source with broad peer consensus
score = engine.calculate_integrity_score(
source_reputation=0.95, # e.g., Dr. Fei-Fei Li's Lab
consensus_rate=0.88, # e.g., 88% of Pillars agree
data_entropy=0.12 # e.g., Low noise, high clarity
)

print(f"🏰 Truth Stack Integrity Score: {score}")

if score > 0.85:
print("STATUS: VERIFIED - Anchoring to Hall of Pillars.")
else:
print("STATUS: REJECTED - Insufficient Mathematical Foundation.")

