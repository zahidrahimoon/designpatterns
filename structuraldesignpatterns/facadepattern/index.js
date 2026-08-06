// Facade: one simple function hides several subsystems and their correct order.

const freezeCpu = () => "cpu frozen";
const readDisk = () => "disk read";
const loadMemory = () => "memory loaded";

const startComputer = () => [freezeCpu(), readDisk(), loadMemory()].join(" -> ");

console.log(startComputer()); // cpu frozen -> disk read -> memory loaded
