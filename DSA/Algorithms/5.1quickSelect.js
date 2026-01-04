function quickSelect(arr, k, left, right) {
    const index = arr.length - k;

    const pivot = partition(arr, left, right);
    if (pivot === index) return arr[pivot];
    if (pivot < index) {
        return quickSelect(arr, k, pivot + 1, right);
    } else {
        return quickSelect(arr, k, left, pivot - 1);
    }
}

function partition(arr, left, right) {
    const pivot = arr[left];
    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[left];
    arr[left] = arr[j];
    arr[j] = temp;
    return j;
}

const arr = [4, 10, 4, 1, 3, 2, 0];
console.log(quickSelect(arr, 1, 0, arr.length - 1));