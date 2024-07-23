function solution(array) {
    const arr = Array(Math.max(...array) + 1).fill(0);
    
    for(let i = 0; i <= array.length; i++) {
        arr[array[i]] += 1;
    }
    
    const maxValue = Math.max(...arr);
    
    return arr.indexOf(maxValue) === arr.lastIndexOf(maxValue) ? arr.indexOf(maxValue) : -1;
}