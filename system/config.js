// ===============================
// AIROGLIFPH CONFIG SYSTEM
// ===============================

const SYSTEM_SIGNATURE = "AIROGLIFPH_CORE_V2";

// Rotating access type
const CODE_TYPES = ["A","B","C","D","E"];
let CURRENT_CODE_TYPE = CODE_TYPES[Math.floor(Math.random()*CODE_TYPES.length)];

// Obfuscated codes (hex encoded)
const ENCODED_CODES = {
A: "30363832", // 0682
B: "30393237", // 0927
C: "37323536", // 7256
D: "39353030", // 9500
E: "30393239"  // 0929
};

// Override code (hex)
const ENCODED_OVERRIDE = "37323635413235"; // 7265A25

Object.freeze(SYSTEM_SIGNATURE);
Object.freeze(ENCODED_CODES);
Object.freeze(ENCODED_OVERRIDE);
