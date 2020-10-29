$(document).ready (

function() {
    // Store Late fee's
    var lateBook = 0.25
    var lateDVD = 0.50

    //add event handler

    $("#calcButton").click(calcLateFee);

    function calcLateFee() {
        // get data from late books input and parse to number
        var numBooks = parseInt($("#numBooks").val());

        //Collect Number of late DVD's input and parse to number
        var numDvds = parseInt($("#numDvds").val());

        //Collect number of days late and parse to number
        var numDaysLate = parseInt($("#numDays").val());

        // Convert to a number data type (no decimals)
        numDaysLate = parseInt(numDaysLate)

        // multiply number of late books by days late then by late fee
        var calcLateBooks = (numBooks * numDaysLate) * lateBook;

        //Multiply number of late DVD's by days late then by late fee
        var calcLateDvds = (numDvds * numDaysLate) * lateDVD;

        //Add Totals Together
        var totalLateFee = calcLateBooks + calcLateDvds

        //Display Total Late Fee in Dollars on page
        $("#totalOutput").text(totalLateFee.toFixed(2))

        $(".display").show()
    }

    }
)