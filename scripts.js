/**
 * Created by jonsm on 6/12/2017.
 */
//jQuery to append button elements to section tags
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
    var buttons = $('<button>').attr({class:'keys'}).html(operators[i]);
    buttons.appendTo('.operators');
}
//End button append
