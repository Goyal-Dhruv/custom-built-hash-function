// Hash Functions
function sumAsciiHash(input) {
    let hash = 0;
    for (let char of input) {
        hash += char.charCodeAt(0);
    }
    return hash % 256; // Limit hash to 0–255
}

function xorHash(input) {
    let hash = 0;
    for (let char of input) {
        hash ^= char.charCodeAt(0); // XOR operation
    }
    return hash;
}

function bitwiseShiftHash(input) {
    let hash = 0;
    for (let char of input) {
        hash = (hash << 5) - hash + char.charCodeAt(0); // Shift and add
        hash = hash & 0xFFFFFFFF; // Limit to 32 bits
    }
    return hash;
}

// Compute Hash Function
document.getElementById("compute-hash").addEventListener("click", function () {
    const hashFunction = document.getElementById("hash-function").value;
    const inputString = document.getElementById("input-string").value;

    let hashValue = "Invalid input!";
    if (inputString) {
        switch (hashFunction) {
            case "sum-ascii":
                hashValue = sumAsciiHash(inputString);
                break;
            case "xor-hash":
                hashValue = xorHash(inputString);
                break;
            case "bitwise-shift":
                hashValue = bitwiseShiftHash(inputString);
                break;
        }
    }

    // Display the hash value
    document.getElementById("hash-result").innerText = `Hash: ${hashValue}`;
});
