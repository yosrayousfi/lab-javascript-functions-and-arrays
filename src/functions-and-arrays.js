// Iteration #1: Find the maximum
const maxOfTwoNumbers = (nbr1, nbr2) => {
  return nbr1 > nbr2 ? nbr1 : nbr2;
};

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];
const testIfInvalid = array => {
  if (array.length === 0) {
    return true;
  }
};
const findLongestWord = arr => {
  if (testIfInvalid(arr)) {
    return null;
  }
  let longestWord = "";
  arr.forEach(item => {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  });
  return longestWord;
};

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumNumbers = arr => {
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    counter += arr[i];
  }
  return counter;
};

//Use of reduce
// const sumNumbers = arr => {
// testIfInvalid(arr) ? 0 : arr.reduce((acc, cur) => acc + cur);

// Bonus: Calculate the sum
const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];
const hasUnsuporttedDataType = arr => {
  let result;
  arr.forEach(element => {
    if (typeof element === "object") {
      result = true;
    }
  });
  return result;
};
const sum = arr => {
  if (hasUnsuporttedDataType(arr)) {
    throw new Error("Unsupported data type sir or ma'am");
  }
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    typeof arr[i] == "string"
      ? (counter += arr[i].length)
      : (counter += arr[i]);
  }
  return counter;
  //Use of reduce
  // return arr.reduce(
  //   (acc, cur) => (typeof cur == "string" ? acc + cur.length : acc + cur),
  //   0
  // );
};

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = arr =>
  testIfInvalid(arr) ? null : sumNumbers(arr) / arr.length;

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];
const sumWords = arr => {
  let result = 0;
  arr.forEach(element => {
    result += element.length;
  });
  return result;
};
const averageWordLength = arr =>
  testIfInvalid(arr) ? null : sumWords(arr) / arr.length;
//Use of reduce
//const sumWords = arr => arr.reduce((acc, cur) => acc + cur.length, 0);

// Bonus: Calculate the average of a mixed elements array
const avg = arr =>
  testIfInvalid(arr) ? null : +(sum(arr) / arr.length).toFixed(2);

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];
const uniquifyArray = arr =>
  testIfInvalid(arr)
    ? null
    : arr.filter((element, index) => arr.indexOf(element) === index);
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//checks, if the given value is the first occurring. If not, it must be a duplicate and will not be copied

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];
const doesWordExist = (arr, word) =>
  testIfInvalid(arr) ? null : arr.includes(word) ? true : false;

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];
const howManyTimes = (arr, word) =>
  arr.filter(element => element === word).length;

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49,
    49,
    99,
    40,
    17,
    81,
    18,
    57,
    60,
    87,
    17,
    40,
    98,
    43,
    69,
    48,
    4,
    56,
    62,
    0
  ],
  [
    81,
    49,
    31,
    73,
    55,
    79,
    14,
    29,
    93,
    71,
    40,
    67,
    53,
    88,
    30,
    3,
    49,
    13,
    36,
    65
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22,
    31,
    16,
    71,
    51,
    67,
    63,
    89,
    41,
    92,
    36,
    54,
    22,
    40,
    40,
    28,
    66,
    33,
    13,
    80
  ],
  [
    24,
    47,
    32,
    60,
    99,
    3,
    45,
    2,
    44,
    75,
    33,
    53,
    78,
    36,
    84,
    20,
    35,
    17,
    12,
    50
  ],
  [
    32,
    98,
    81,
    28,
    64,
    23,
    67,
    10,
    26,
    38,
    40,
    67,
    59,
    54,
    70,
    66,
    18,
    38,
    64,
    70
  ],
  [
    67,
    26,
    20,
    68,
    2,
    62,
    12,
    20,
    95,
    63,
    94,
    39,
    63,
    8,
    40,
    91,
    66,
    49,
    94,
    21
  ],
  [
    24,
    55,
    58,
    5,
    66,
    73,
    99,
    26,
    97,
    17,
    78,
    78,
    96,
    83,
    14,
    88,
    34,
    89,
    63,
    72
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16,
    39,
    5,
    42,
    96,
    35,
    31,
    47,
    55,
    58,
    88,
    24,
    0,
    17,
    54,
    24,
    36,
    29,
    85,
    57
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19,
    80,
    81,
    68,
    5,
    94,
    47,
    69,
    28,
    73,
    92,
    13,
    86,
    52,
    17,
    77,
    4,
    89,
    55,
    40
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88,
    36,
    68,
    87,
    57,
    62,
    20,
    72,
    3,
    46,
    33,
    67,
    46,
    55,
    12,
    32,
    63,
    93,
    53,
    69
  ],
  [
    4,
    42,
    16,
    73,
    38,
    25,
    39,
    11,
    24,
    94,
    72,
    18,
    8,
    46,
    29,
    32,
    40,
    62,
    76,
    36
  ],
  [
    20,
    69,
    36,
    41,
    72,
    30,
    23,
    88,
    34,
    62,
    99,
    69,
    82,
    67,
    59,
    85,
    74,
    4,
    36,
    16
  ],
  [
    20,
    73,
    35,
    29,
    78,
    31,
    90,
    1,
    74,
    31,
    49,
    71,
    48,
    86,
    81,
    16,
    23,
    57,
    5,
    54
  ],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

const greatestProduct = arr => {
  let max = 0,
    result;
  // iterate the rows.
  for (let i = 0; i < 4; i++) {
    // iterate the columns.
    for (let j = 0; j < 4; j++) {
      // check the maximum product
      // in horizontal row.
      if (j - 3 >= 0) {
        result = arr[i][j] * arr[i][j - 1] * arr[i][j - 2] * arr[i][j - 3];

        if (max < result) max = result;
      }
      // check the maximum product
      // in vertical row.
      if (i - 3 >= 0) {
        result = arr[i][j] * arr[i - 1][j] * arr[i - 2][j] * arr[i - 3][j];

        if (max < result) max = result;
      }
    }
  }
  return max;
};
const greatestProductOfDiagonals = arr => {
  let max = 0,
    result;
  // iterate the rows.
  for (let i = 0; i < 4; i++) {
    // iterate the columns.
    for (let j = 0; j < 4; j++) {
      // check the maximum product in
      // diagonal and anti - diagonal
      if (i - 3 >= 0 && j - 3 >= 0) {
        result =
          arr[i][j] * arr[i - 1][j - 1] * arr[i - 2][j - 2] * arr[i - 3][j - 3];

        if (max < result) max = result;
      }
    }
  }
  return max;
};
