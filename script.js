const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// SECTION ---------------------- START

// n - length of our data array.
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
// SECTION ---------------------- END

// SECTION ---------------------- START

// After looping through both FOR's
// O(n + a)

// O(n * a)
// a
for (let i = 0; i < data.length; i++) {
  console.log("aggggggggggggggg");
  // n
  for (let j = 0; j < data2.length; j++) {
    console.log(`${data[i]}: ${data2[j]}`);
  }
}
// SECTION ---------------------- END

// SECTION ---------------------- START
// O(n^2)
// n
for (let i = 0; i < data.length; i++) {
  // n
  for (let j = 0; j < data.length; j++) {
    console.log(data[i] + data[j]);
  }
}

// Another example:

// SECTION ---------------------- END

// SECTION ---------------------- START
// O(n^2 + n) - Here we would actually remove the n, we don't care about the things that scale Less quickly.
// O(n^2)     - Updated Big O to this.
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    console.log(data[i]);
  }
}

for (let i = 0; i < data.length; i++) {
  const element = data[i];
}
// SECTION ---------------------- END
