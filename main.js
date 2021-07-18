const validateCpfBefore = require("./validateCpf_before");
const validateCpfAfter = require("./validateCpf_after");

console.log(validateCpfBefore.validate("00000000000"));
console.log(validateCpfBefore.validate("86446422784"));
console.log(validateCpfBefore.validate("864.464.227-84"));
console.log(validateCpfBefore.validate("91720489726"));
console.log(validateCpfBefore.validate("a1720489726"));

console.log(validateCpfAfter.validate("00000000000"));
console.log(validateCpfAfter.validate("86446422799"));
console.log(validateCpfAfter.validate("86446422784"));
console.log(validateCpfAfter.validate("864.464.227-84"));
console.log(validateCpfAfter.validate("91720489726"));
console.log(validateCpfAfter.validate("a1720489726"));
