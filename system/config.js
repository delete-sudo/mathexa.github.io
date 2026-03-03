const SYSTEM_SIGNATURE = "AIROGLIFPH_CORE_V2";

const CODE_TYPES = ["A","B","C","D","E"];
let CURRENT_CODE_TYPE = CODE_TYPES[Math.floor(Math.random()*CODE_TYPES.length)];

const ENCODED_CODES = {
A: "MDY4Mg==", // 0682
B: "MDkyNw==", // 0927
C: "NzI1Ng==", // 7256
D: "OTUwMA==", // 9500
E: "MDkyOQ=="  // 0929
};

const ENCODED_OVERRIDE = "NzI2NUEyNQ=="; // 7265A25

Object.freeze(SYSTEM_SIGNATURE);
Object.freeze(ENCODED_CODES);
Object.freeze(ENCODED_OVERRIDE);
