// 1. Using 'var' (Violation of "Basic JS" rule)
var myName = "John";

// 2. No error handling (Violation of "Error handling" rule)
async function getData() {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}

// const test;

// 3. Commented out dead code (Violation of "Cleanliness" rule)
// console.log("testing...");
// let oldData = 123;
