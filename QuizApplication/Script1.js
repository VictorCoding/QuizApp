/*jslint browser: true*/
//var checkIt = {};

//checkIt.pageLoad = function () {
    "use strict";

    var radioOne1,
        radioOne2,
        radioOne3,
        radioOne4,
        radioTwo1,
        radioTwo2,
        radioTwo3,
        radioTwo4,
        radioThree1,
        radioThree2,
        radioThree3,
        radioThree4,
        radioFour1,
        radioFour2,
        radioFour3,
        radioFour4,
        radioFive1,
        radioFive2,
        radioFive3,
        radioFive4,
        image1,
        correctScore,
        i;


    //function that keeps score when the right answer has been picked
    correctScore = 0;

    function scoreKeeper() {
        if (document.getElementById("correctAnswer").checked) {
            correctScore = correctScore + 1;
        }
    }

    //This is the image bucket, to change the image, I just insert a new one, which replaces the current image
    image1 = document.createElement("img");
    image1.src = "http://media-social.s-msn.com/images/blogs/00120065-0000-0000-0000-000000000000_469b5687-f4ab-4992-a2ac-46c322b7a161_20130115035620_MountRushmore_011413_RF_300.jpg";

    //All 4 radio buttons for the first question
    radioOne1 = document.createElement('input');
    radioOne1.setAttribute('type', 'radio');
    radioOne1.setAttribute('name', 'firstQ');
    radioOne1.setAttribute('id', 'correctAnswer');
    radioOne1.setAttribute('onclick', 'scoreKeeper();');

    radioOne2 = document.createElement('input');
    radioOne2.setAttribute('type', 'radio');
    radioOne2.setAttribute('name', 'firstQ');
    radioOne2.setAttribute('onClick', 'alert("You need some school")');

    radioOne3 = document.createElement('input');
    radioOne3.setAttribute('type', 'radio');
    radioOne3.setAttribute('name', 'firstQ');

    radioOne4 = document.createElement('input');
    radioOne4.setAttribute('type', 'radio');
    radioOne4.setAttribute('name', 'firstQ');
    //All 4 radio buttons for the second question
    radioTwo1 = document.createElement('input');
    radioTwo1.setAttribute('type', 'radio');
    radioTwo1.setAttribute('name', 'secondQ');

    radioTwo2 = document.createElement('input');
    radioTwo2.setAttribute('type', 'radio');
    radioTwo2.setAttribute('name', 'secondQ');
    radioTwo2.setAttribute('onClick', 'alert("You need some school")');

    radioTwo3 = document.createElement('input');
    radioTwo3.setAttribute('type', 'radio');
    radioTwo3.setAttribute('name', 'secondQ');

    radioTwo4 = document.createElement('input');
    radioTwo4.setAttribute('type', 'radio');
    radioTwo4.setAttribute('name', 'secondQ');
    radioTwo4.setAttribute('id', 'correctAnswer');
    radioTwo4.setAttribute('onclick', 'scoreKeeper();');
    //All 4 radio buttons for the third question
    radioThree1 = document.createElement('input');
    radioThree1.setAttribute('type', 'radio');
    radioThree1.setAttribute('name', 'thirdQ');

    radioThree2 = document.createElement('input');
    radioThree2.setAttribute('type', 'radio');
    radioThree2.setAttribute('name', 'thirdQ');
    radioThree2.setAttribute('onClick', 'alert("You need some school")');
    radioThree2.setAttribute('id', 'correctAnswer');
    radioThree2.setAttribute('onclick', 'scoreKeeper();');


    radioThree3 = document.createElement('input');
    radioThree3.setAttribute('type', 'radio');
    radioThree3.setAttribute('name', 'thirdQ');

    radioThree4 = document.createElement('input');
    radioThree4.setAttribute('type', 'radio');
    radioThree4.setAttribute('name', 'thirdQ');

    //All 4 radio buttons for the fourth question
    radioFour1 = document.createElement('input');
    radioFour1.setAttribute('type', 'radio');
    radioFour1.setAttribute('name', 'fourthQ');

    radioFour2 = document.createElement('input');
    radioFour2.setAttribute('type', 'radio');
    radioFour2.setAttribute('name', 'fourthQ');
    radioFour2.setAttribute('onClick', 'alert("You need some school")');

    radioFour3 = document.createElement('input');
    radioFour3.setAttribute('type', 'radio');
    radioFour3.setAttribute('name', 'fourthQ');

    radioFour4 = document.createElement('input');
    radioFour4.setAttribute('type', 'radio');
    radioFour4.setAttribute('name', 'fourthQ');
    radioFour4.setAttribute('id', 'correctAnswer');
    radioFour4.setAttribute('onclick', 'scoreKeeper();');

    //All 4 radio buttons for the fifth question
    radioFive1 = document.createElement('input');
    radioFive1.setAttribute('type', 'radio');
    radioFive1.setAttribute('name', 'fifthQ');

    radioFive2 = document.createElement('input');
    radioFive2.setAttribute('type', 'radio');
    radioFive2.setAttribute('name', 'fifthQ');
    radioFive2.setAttribute('onClick', 'alert("You need some school")');
    radioFive2.setAttribute('id', 'correctAnswer');
    radioFive2.setAttribute('onclick', 'scoreKeeper()');

    radioFive3 = document.createElement('input');
    radioFive3.setAttribute('type', 'radio');
    radioFive3.setAttribute('name', 'fifthQ');

    radioFive4 = document.createElement('input');
    radioFive4.setAttribute('type', 'radio');
    radioFive4.setAttribute('name', 'fifthQ');

    //Generates all the code for the first question, that is: the string for the question, the radio buttons, the image,
    //and the background color

    document.getElementById("firstQuestion").innerHTML = "Question 1: Who was the first president?";
    document.getElementById("radioButton1").appendChild(radioOne1);
    document.getElementById("radioButton2").appendChild(radioOne2);
    document.getElementById("radioButton3").appendChild(radioOne3);
    document.getElementById("radioButton4").appendChild(radioOne4);
    document.getElementById("visual").appendChild(image1);
    document.getElementById("label1").innerHTML = "George Washington";
    document.getElementById("label2").innerHTML = "Barack Obama";
    document.getElementById("label3").innerHTML = "Bill Clinton";
    document.getElementById("label4").innerHTML = "George Bush";
    document.body.style.background = "lightblue";

    //Injects all the content needed for question two: the string for the question, radio buttons, image, and 
    //background color.

    function changeQuestion2() {



        document.getElementById("radioButton1").removeChild(radioOne1);
        document.getElementById("radioButton2").removeChild(radioOne2);
        document.getElementById("radioButton3").removeChild(radioOne3);
        document.getElementById("radioButton4").removeChild(radioOne4);
        image1.src = "https://pbs.twimg.com/profile_images/1779223618/ninja.png";
        document.getElementById("firstQuestion").innerHTML = "Question 2: What is the capital of Texas?";
        document.getElementById("label1").innerHTML = "Houston";
        document.getElementById("label2").innerHTML = "Dallas";
        document.getElementById("label3").innerHTML = "San Antonio";
        document.getElementById("label4").innerHTML = "Austin";
        document.getElementById("radioButton1").appendChild(radioTwo1);
        document.getElementById("radioButton2").appendChild(radioTwo2);
        document.getElementById("radioButton3").appendChild(radioTwo3);
        document.getElementById("radioButton4").appendChild(radioTwo4);
        document.body.style.background = "lightblue";







    }

    //Injects all the content needed for question three: the string for the question, radio buttons, image, and 
    //background color.

    function changeQuestion3() {

        document.getElementById("radioButton1").removeChild(radioTwo1);
        document.getElementById("radioButton2").removeChild(radioTwo2);
        document.getElementById("radioButton3").removeChild(radioTwo3);
        document.getElementById("radioButton4").removeChild(radioTwo4);
        document.getElementById("firstQuestion").innerHTML = "Question 3: How many states are there?";
        image1.src = "data:image/jpeg;base64,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";
        document.getElementById("label1").innerHTML = "40";
        document.getElementById("label2").innerHTML = "50";
        document.getElementById("label3").innerHTML = "30";
        document.getElementById("label4").innerHTML = "35";
        document.getElementById("radioButton1").appendChild(radioThree1);
        document.getElementById("radioButton2").appendChild(radioThree2);
        document.getElementById("radioButton3").appendChild(radioThree3);
        document.getElementById("radioButton4").appendChild(radioThree4);
        document.body.style.background = "#e8826c";




    }

    //Injects all the content needed for question four: the string for the question, radio buttons, image, and 
    //background color.

    function changeQuestion4() {

        document.getElementById("radioButton1").removeChild(radioThree1);
        document.getElementById("radioButton2").removeChild(radioThree2);
        document.getElementById("radioButton3").removeChild(radioThree3);
        document.getElementById("radioButton4").removeChild(radioThree4);
        document.getElementById("firstQuestion").innerHTML = "Question 4: How many planets is there?";
        image1.src = "http://i1.ytimg.com/sh/7XcGW6bVGVY/showposter.jpg?v=4f83c231";
        document.getElementById("label1").innerHTML = "4";
        document.getElementById("label2").innerHTML = "7";
        document.getElementById("label3").innerHTML = "9";
        document.getElementById("label4").innerHTML = "8";
        document.getElementById("radioButton1").appendChild(radioFour1);
        document.getElementById("radioButton2").appendChild(radioFour2);
        document.getElementById("radioButton3").appendChild(radioFour3);
        document.getElementById("radioButton4").appendChild(radioFour4);
        document.body.style.background = "#db85ea";


    }

    //Injects all the content needed for question five: the string for the question, radio buttons, image, and 
    //background color.

    function changeQuestion5() {

        document.getElementById("radioButton1").removeChild(radioFour1);
        document.getElementById("radioButton2").removeChild(radioFour2);
        document.getElementById("radioButton3").removeChild(radioFour3);
        document.getElementById("radioButton4").removeChild(radioFour4);
        document.getElementById("firstQuestion").innerHTML = "Question 5: Who holds the mile world record?";
        image1.src = "data:image/jpeg;base64,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";
        document.getElementById("label1").innerHTML = "Steve Prefontaine";
        document.getElementById("label2").innerHTML = "Hicham El Guerrouj";
        document.getElementById("label3").innerHTML = "Galen Rupp";
        document.getElementById("label4").innerHTML = "Alan Webb";
        document.getElementById("radioButton1").appendChild(radioFive1);
        document.getElementById("radioButton2").appendChild(radioFive2);
        document.getElementById("radioButton3").appendChild(radioFive3);
        document.getElementById("radioButton4").appendChild(radioFive4);
        document.body.style.background = "#13ac25";


    }

    //Injects all the content needed for the results page: image, string, and background color. Also removes all data from last question.

    function displayResults() {

        image1.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgTEhQUEwgWFRUWGRYZEhgWFiEUFxkhHxwfGhYdFh8YKCghIxslHRwZJz0hMTU0LzouIR8zODQ4QygtLisBCgoKDQwNGg8PGjclHyQ0ODc0ODc3NzQtNzc3NS80NDM0NDc3NzE1NDc3NzQ1MjQtNCwsKzQvLDQsMjQsLDUxM//AABEIAFAAUAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBwAGAgMEAf/EADsQAAEDAQUCCwUIAwEAAAAAAAECAxEABAUGEiExYRMWIkFRVYGRkqHRFVRxscEXNUJEcoKi4RQyYlL/xAAZAQACAwEAAAAAAAAAAAAAAAAAAgEDBQT/xAAlEQACAgECBgIDAAAAAAAAAAAAAQIDERIxBBMhUmFxUZEUI0H/2gAMAwEAAhEDEQA/AHjUqUv8Z4rWSphhyAJDiwdT0pTu31XZZGuOWAbv7GNhYJQlPCuDaEmEj9R+gqlXhi6+HfzPBjob5Pntrluy5LS+2pTTRUpK0ggEAQQTOu8Vv4p377gfEn1rPnZdZ1W3gUEuvvK1U8pR3qJ+dRt95OqXlJO5RHyotxTv33A+JPrQ+8bttjCgl1nKSJAkHTZzVQ4TXVoAld+Lb4a/M5x0Ocrz21dbixnYXyELTwSzskyk/A/Q0rqlWV8ROH9yGR71KXmDcVrSUsvuSkwG1k6p6Ardv5qYdadVsbI5QxWsc3yphkJQqHHZAPOB+I+YHbStFHca24u2tzXRHIT2bfOaBVmcRZrm/ArLngK9LHZ23lOvZQpaANCdcpPNVm44XF77/E+lVrAF22N9t5LrAWAtBAPMcpHNVp4qXH1envPrXXRzeWtOMEo18cLi99/ifSqVjm87HaHm1NO5gEQTBGuYnnq88VLj6vT3n1qcU7j6vT3n1prK7rI6XgBRVKbvFO4+r0959anFO4+r0959a5/w5/KDAoqZ+A75U+yW1qlbUDeU/hPkR3dNLW2ISHHABAC1gfAKIFFcHW4tWtszos5Ffu0HnFVUT0WEIE2hwqWpR2qUontM1rrZaGylaknalSgewxWuqWBZ8LWW9XGXRZrRkUHEFRnLIynceeivsfGfWQ8f9UPwZfVmsrTq3EKIUtCRlAJ/1J1kij32gXV7u74R6121cvQtUsP2ScPsfGfWQ8f9VPY+M+sh4/6ru+0C6vd3fCPWp9oF1e7u+EetP+nvf2BXb7dxPZcnC3meXOXKqdkTOm+hfGO+us3O8elEsZYhslrDXBtrGQrnMANsREE9FVmuW2eJNRk8eyD1alEkkySSSfjtr1lRCkkHYQR2GsayZSSpIA2kAdpqkA3jWwlq1uaaL5ae3b5zQKmljm5lPshSEy41JA5yPxDyB7KVoq7iK9E35BhGyIQthSP8hCVcIlQzqyyMpGnaaz9l2fP94tZJOuflRzc22sLkuwPqcBcUMiCuEI4RSoIEJEjXWui24fdSU5HZSUZ1F0Bktico4SSQJOylUW1nAHMi7EQZvBmY0hfPv02ba99mN5fvBnNP/vSI+G2a89iW/lSyBlJEFQBUQMxCJ26a6Vg3dVrJjg4hKFqMjRKiAD5jSo0vtA2OXY3Ai8GZjlSvn3abIishdlnz/eLWSduflR3V0WvDdoSYQ4FkuuNJGgPJjXb8ZHNG+hVrsrjZAVBkApKVBSSDsIIqXFx3QG9dhbSlRNsbJA5IQrMSZG7ZtrtwdYS7a2xGiDnV+3UecUFpn4DuZTDJcWmFuwd4T+EeZPd0U9ENc18IEWil/jPCiwVPsNyDJcQBqOlSd26mBUrSsrjZHDGEpd14KaDuVM8I2UTOUpkgyI+FEWsSuCSqzAqUhKHVBWVS8plCpggKAkbDNXW/sHWF8laVcE4dpSJSf1D6iqVeGEb4a/LcIOlvleW2s+VV1e2wp61iVQ4SbHmzkmFOEo/1ygLSoHNEbRBrWi/wEx/gjOW0NKXnOoQQUwmIGzWhLrDydFMqSd6SPnUbYeVollSjuST8qp5kwC6sQJKipVhk8Kt1EOFGXOAFDQSdg18q4r4vEPrCuACYSATMqV/0sgCT2V3XfhK+HfyuQdLnJ8ttXW4sGWFgha1cKsbJEJHwH1NXQqts6PYAFg3Ci1FLz7cJEFtBGqugq3buemHUqVoVVRrjhDH/2Q==";
        document.getElementById("firstQuestion").innerHTML = "Correct answers: " + correctScore;
        document.getElementById("label1").remove();
        document.getElementById("label2").remove();
        document.getElementById("label3").remove();
        document.getElementById("label4").remove();
        document.getElementById("radioButton1").remove();
        document.getElementById("radioButton2").remove();
        document.getElementById("radioButton3").remove();
        document.getElementById("radioButton4").remove();
        document.getElementById("Submit").remove();
        document.body.style.background = "gray";

    }

    //Function activated when submit button is pressed and changes one question to the next question 
    i = 0;

    function trigger() {

        switch (i) {
        case 0:
            changeQuestion2();
            break;
        case 1:
            changeQuestion3();
            break;
        case 2:
            changeQuestion4();
            break;
        case 3:
            changeQuestion5();
            break;
        case 4:
            displayResults();
            break;

        }

        i = i + 1;

    }

    function validateRadios() {
        var radios = document.getElementsByName("firstQ");
        for (var t = 0; t < 4; t++) {
            if (radios[t].checked) {
                trigger();
                return true;
            } else {
                alert("Please choose an answer.");
                return false;
            }
        }
    }



//};
//checkIt.pageLoad();