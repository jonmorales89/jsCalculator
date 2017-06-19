//jQuery to append button elements to section tags - just for practice//
var display = $('<p>').attr({class: 'displayResults'});
display.appendTo('#display');
var equal = $('<button>').attr({id:'equalSign'}).text('=');
equal.appendTo('section#display');
var clear = $('<button>').attr({class:'clear'}).text('C');
clear.appendTo('.reset');
var clearAll = $('<button>').attr({class:'clearAll'}).text('CE');
clearAll.appendTo('.reset');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,0,'.'];
for (var i = 0; i<numbers.length; i++) {
    if (numbers[i] === 0) {
        var buttons = $('<button>').attr({class:'keys zero'}).html(numbers[i]);
        buttons.appendTo('.numbers');
    } else {
        var buttons = $('<button>').attr({class:'keys'}).text(numbers[i]);
        buttons.appendTo('.numbers');
    }
}
var operators = ['+','-','&#247','x'];
for (var i = 0; i < operators.length; i++){
    var buttons = $('<button>').attr({class:'operatorKeys'}).html(operators[i]);
    buttons.appendTo('.operators');
}
//Create button click event handlers//
$('button.keys').click(handleNumbers);
$('button.operatorKeys').click(handleOperators);
$('#equalSign').click(handleEquals);
$('div.reset').on('click','button', handleClearKeys);
//Define click handler functions//
var inputs = [''];
var i = 0;
var result = null;
function displayInputs(value){
    $('.displayResults').html(value);
}
function handleNumbers(){
    var keypress = $(this).html();
    if(inputs[i].indexOf('.') === 0 && keypress === '.'){
        return;
    }
    if(inputs[i].indexOf('.') >= 1 && keypress === '.'){
        displayInputs(inputs);
    } else {
    inputs[i] += keypress;
    console.log(inputs);
    displayInputs(inputs);
    }
}
function handleOperators(){
    if(inputs.length === 1 && inputs[0] === ""){
        return;
    } else if (inputs.length === 3){
        if(inputs[2] === ''){
            inputs[1] = $(this).html();
            displayInputs(inputs);
            return
        }
        inputs = [doMath()];
        i = 0;
        displayInputs(inputs);
    }
    var keypress = $(this).html();
    inputs.push(keypress);
    inputs.push('');
    displayInputs(inputs);
    i += 2;
    console.log(inputs);
}
function handleEquals(){
    if(inputs[0] === ''){
        displayInputs('Ready');
        return;
    } else if(inputs[2] === ''){
        inputs[2]=inputs[0];
        displayInputs(doMath);
        inputs[0] = result;
        inputs[2] = '';
        return;
    } else if (result !== null){
        inputs[0] = result;
    }
    displayInputs(doMath());
}
function handleClearKeys(){
    var keypress = $(this).html();
    if(keypress==='C'){
        inputs = [''];
        i = 0;
        result = null;
        displayInputs(inputs);
    } else {
        inputs.pop();
        inputs.push('');
        i = inputs.length-1;
        displayInputs(inputs);
    }
}
function doMath(){
    var num1 = parseFloat(inputs[0]);
    var num2 = parseFloat(inputs[2]);
    var operator = inputs[1];
    // var result = null;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '÷' :
            if(num2 === 0){
                result = 'Error';
            } else {
                result = num1 / num2;
            }
            break;
        case 'x':
            result = num1 * num2;
            break;
        case undefined:
            result = inputs[0];
            break;
    }
    return result;
}