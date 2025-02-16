function find1(array) {
  for (let x = 0; x < array.length; x++) {
    //0(n)

    console.log(array[x]);
  }
}

const function2 = (array) => {
  array.forEach((elements) => {
    console.log(elements);
  });
};

const find3 = (array) => {
  for (let elements in array) {
    console.log(elements);
  }
};

// Different ways of loop over element in the array
