exports.sort = function (array) {
    for (let i = 0; i + 1 < array.length; i++) {
        for (let j = 0; j + 1 < array.length; j++) {
            if(array[j+1] < array[j]){
                const c = array[j+1];
                array[j+1] = array[j];
                array[j] = c;
            }
        }
    }
}