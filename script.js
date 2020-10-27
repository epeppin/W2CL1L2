// Store Late fee's
var lateBook = 0.25
var lateDVD = 0.50

function calcLateFee() {
    //Collect Number of Late Books
    var numBooks = prompt("How many late Books?");

    //Collect Number of late DVD's
    var numDvds = prompt("How many late DVD's?");

    //Collect number of days late
    var numDaysLate = prompt("How many days Late?");

    // multiply number of late books by days late then by late fee
    var calcLateBooks = (numBooks * numDaysLate) * lateBook;

    //Multiply number of late DVD's by days late then by late fee
    var calcLateDvds = (numDvds * numDaysLate) * lateDVD;

    //Add Totals Together
    var totalLateFee = calcLateBooks + calcLateDvds

    //Display Total Late Fee in Dollars
    alert(`You Owe $${totalLateFee.toFixed(2)} in late fees`)
}