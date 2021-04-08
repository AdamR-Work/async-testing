const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (num === arr[middle]) {
    return 'found it';
  }
  else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  }
  else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 54));


// Recursion
// const askForFriend = () => {
//     inquirer.prompt({
//       type: 'input',
//       message: 'Enter a name:',
//       name: 'friend'
//     })
//     .then(({ friend }) => {
//       console.log(`Hello, ${friend}!`);
//       askForFriend();
//     });
//    };