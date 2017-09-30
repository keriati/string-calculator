export function add(input) {
    if (typeof input === 'undefined' || input === '' || typeof input !== 'string') {
        return '';
    }

    const numberArray = input.split(',');

    if (numberArray.length === 1) {
        return numberArray + '';
    }

    if (numberArray.length === 2) {
        return (parseInt(numberArray[0],10) + parseInt(numberArray[1], 10)) + '';
    }
}
