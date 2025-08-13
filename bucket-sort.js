

function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }


  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }


  bucketSize = bucketSize || 5;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount).fill(null).map(() => []);


  for (let i = 0; i < array.length; i++) {
    let bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }


  array.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);  
    array.push(...buckets[i]);  
  }

  return array;
}


function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

module.exports = bucketSort;