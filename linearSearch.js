const linearSearch = (valueToFind, arrayToSearchThrough) =>{
    for (i = 0; i < arrayToSearchThrough.length; i++){
        if (arrayToSearchThrough[i] == valueToFind)
        return i;
    }
}

module.exports = linearSearch