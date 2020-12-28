// Program 3
var firstSubject = parseInt( prompt("Enter Marks of First Subject") );
var secondSubject = parseInt( prompt("Enter Marks of Second Subject") );
var thirdSubject = parseInt( prompt("Enter Marks of third Subject") );
var average = firstSubject + secondSubject + thirdSubject / 3 ;
if( average>80 ){
    console.log( "you are above standard, Admission Granted!");
}