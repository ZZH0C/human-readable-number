module.exports = function toReadable(number) {

    if (number === 0) {
        return "zero";
    }
    let numbNew = [];
    let numbArr = number.toString().split("");
    if (number < 20) {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";

        }
    }

    if (number < 100) {
        switch (numbArr[0]) {
            case "2":
                numbNew.push("twenty");
                break;
            case "3":
                numbNew.push("thirty");
                break;
            case "4":
                numbNew.push("forty");
                break;
            case "5":
                numbNew.push("fifty");
                break;
            case "6":
                numbNew.push("sixty");
                break;
            case "7":
                numbNew.push("seventy");
                break;
            case "8":
                numbNew.push("eighty");
                break;
            case "9":
                numbNew.push("ninety");
                break;
        }
        switch (numbArr[1]) {
            case "1":
                numbNew.push("one");
                break;
            case "2":
                numbNew.push("two");
                break;
            case "3":
                numbNew.push("three");
                break;
            case "4":
                numbNew.push("four");
                break;
            case "5":
                numbNew.push("five");
                break;
            case "6":
                numbNew.push("six");
                break;
            case "7":
                numbNew.push("seven");
                break;
            case "8":
                numbNew.push("eight");
                break;
            case "9":
                numbNew.push("nine");
                break;
        }
        return numbNew.join(" ");
    }

    if (number < 1000) {
        switch (numbArr[0]) {
            case "1":
                numbNew.push("one");
                break;
            case "2":
                numbNew.push("two");
                break;
            case "3":
                numbNew.push("three");
                break;
            case "4":
                numbNew.push("four");
                break;
            case "5":
                numbNew.push("five");
                break;
            case "6":
                numbNew.push("six");
                break;
            case "7":
                numbNew.push("seven");
                break;
            case "8":
                numbNew.push("eight");
                break;
            case "9":
                numbNew.push("nine");
                break;
        }
        numbNew.push("hundred");
        let a=[];
        a.push(numbArr[1]);
        a.push(numbArr[2]);
        a=a.join("");
        parseInt(a,10);
        if (a >= 20) {
            switch (numbArr[1]) {
                case "2":
                    numbNew.push("twenty");
                    break;
                case "3":
                    numbNew.push("thirty");
                    break;
                case "4":
                    numbNew.push("forty");
                    break;
                case "5":
                    numbNew.push("fifty");
                    break;
                case "6":
                    numbNew.push("sixty");
                    break;
                case "7":
                    numbNew.push("seventy");
                    break;
                case "8":
                    numbNew.push("eighty");
                    break;
                case "9":
                    numbNew.push("ninety");
                    break;
            }
            switch (numbArr[2]) {
                case "1":
                    numbNew.push("one");
                    break;
                case "2":
                    numbNew.push("two");
                    break;
                case "3":
                    numbNew.push("three");
                    break;
                case "4":
                    numbNew.push("four");
                    break;
                case "5":
                    numbNew.push("five");
                    break;
                case "6":
                    numbNew.push("six");
                    break;
                case "7":
                    numbNew.push("seven");
                    break;
                case "8":
                    numbNew.push("eight");
                    break;
                case "9":
                    numbNew.push("nine");
                    break;
            }
        }

        if (a < 20) {

            switch (a) {
                case "01":
                    numbNew.push( "one");
                    break;
                case "02":
                    numbNew.push( "two");
                    break;
                case "03":
                    numbNew.push( "three");
                    break;
                case "04":
                    numbNew.push( "four");
                    break;
                case "05":
                    numbNew.push( "five");
                    break;
                case "06":
                    numbNew.push( "six");
                    break;
                case "07":
                    numbNew.push( "seven");
                    break;
                case "08":
                    numbNew.push( "eight");
                    break;
                case "09":
                    numbNew.push( "nine");
                    break;
                case "10":
                    numbNew.push( "ten");
                    break;
                case "11":
                    numbNew.push( "eleven");
                    break;
                case "12":
                    numbNew.push( "twelve");
                    break;
                case "13":
                    numbNew.push( "thirteen");
                    break;
                case "14":
                    numbNew.push( "fourteen");
                    break;
                case "15":
                    numbNew.push( "fifteen");
                    break;
                case "16":
                    numbNew.push( "sixteen");
                    break;
                case "17":
                    numbNew.push( "seventeen");
                    break;
                case "18":
                    numbNew.push( "eighteen");
                    break;
                case "19":
                    numbNew.push( "nineteen");
                    break;

            }
        }

        return numbNew.join(" ");
    }
};


