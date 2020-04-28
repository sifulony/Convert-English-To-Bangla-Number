function eng2bd(valNum) {
    document.getElementById("banglaNumber").innerHTML = convertEnglishToBanglaNumber(valNum);
}



const convertEnglishToBanglaNumber = (str) => {
    let banglaNumber = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    }
    for (var x in banglaNumber) {
        str = str.toString().replace(new RegExp(x, 'g'), banglaNumber[x]);
        console.log(str);
    }
    return str;
}



function bd2eng(valNum) {
    document.getElementById("englishNumber").innerHTML = convertBanglaToEnglishNumber(valNum);
}


const convertBanglaToEnglishNumber = (str) => {
    let banglaNumber = {
        '০': '0',
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9'
    }
    for (var x in banglaNumber) {
        str = str.toString().replace(new RegExp(x, 'g'), banglaNumber[x]);
        console.log(str);
    }
    return str;
}