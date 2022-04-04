const inputs=process.argv.slice(2);
let result=inputs.map((input)=>input[0]).join('');
console.log(`[${inputs}] becomes \"${result}"`);
