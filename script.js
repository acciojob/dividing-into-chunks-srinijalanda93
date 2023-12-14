const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let trackSum = 0, ans = [], subArr = [];
  
  // Corner case
  if (arr.length === 0) return [];
  
  for (let i = 0; i < arr.length; i++) {
    if (trackSum + arr[i] <= n) {
      // Push in the subArr
      subArr.push(arr[i]);
      // Update the trackSum
      trackSum = trackSum + arr[i];
    } else {
      ans.push(subArr);
      trackSum = arr[i];
      subArr = [arr[i]]; // Start a new subArr with the current element
    }
  }
  
  // Push the last subArr to ans
  ans.push(subArr);
  
  return ans;
};

const n = prompt("Enter n: ");
console.log(JSON.stringify(divide(arr, n)));
