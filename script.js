document.getElementById('psc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'block';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('psc').style.backgroundColor = '#0a5757';
    document.getElementById('jsc').style.backgroundColor = 'teal';
    document.getElementById('ssc').style.backgroundColor = 'teal';
    document.getElementById('hsc').style.backgroundColor = 'teal';
})

document.getElementById('jsc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'block';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('psc').style.backgroundColor = 'teal';
    document.getElementById('jsc').style.backgroundColor = '#0a5757';
    document.getElementById('ssc').style.backgroundColor = 'teal';
    document.getElementById('hsc').style.backgroundColor = 'teal';
})

document.getElementById('ssc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'block';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('psc').style.backgroundColor = 'teal';
    document.getElementById('jsc').style.backgroundColor = 'teal';
    document.getElementById('ssc').style.backgroundColor = '#0a5757';
    document.getElementById('hsc').style.backgroundColor = 'teal';
})

document.getElementById('hsc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'block';
    document.getElementById('psc').style.backgroundColor = 'teal';
    document.getElementById('jsc').style.backgroundColor = 'teal';
    document.getElementById('ssc').style.backgroundColor = 'teal';
    document.getElementById('hsc').style.backgroundColor = '#0a5757';
})

function numberToPoint(num){
    if(num.length == 0){
        return -2;
    }
    else if(num > 100 || num < 0){
        return -1;
    }
    else if(num >= 80){
        return 5;
    }
    else if(num >= 70){
        return 4;
    }
    else if(num >= 60){
        return 3.5;
    }
    else if(num >= 50){
        return 3;
    }
    else if(num >= 40){
        return 2;
    }
    else if(num >= 33){
        return 1;
    }
    else if(num >= 0){
        return 0;
    }
}

function pointToGrade(point){
    if(point >= 5){
        return 'A+';
    }
    else if(point >= 4){
        return 'A';
    }
    else if(point >= 3.5){
        return 'A-';
    }
    else if(point >= 3){
        return 'B';
    }
    else if(point >= 2){
        return 'C';
    }
    else if(point >= 1){
        return 'D';
    }
    else if(point > 0){
        return 'E';
    }
    else if(num >= 0){
        return 0;
    }
}

document.getElementById('psc-calculate').addEventListener('click', function(){
    const pscBengali = numberToPoint(document.getElementById('psc-bengali').value);
    const pscEnglish = numberToPoint(document.getElementById('psc-english').value);
    const pscMath = numberToPoint(document.getElementById('psc-math').value);
    const pscBgs = numberToPoint(document.getElementById('psc-bgs').value);
    const pscScience = numberToPoint(document.getElementById('psc-science').value);
    const pscReligion = numberToPoint(document.getElementById('psc-religion').value);

    // console.log(pscBengali);

    // Fail
    if(pscBengali == 0 || pscEnglish == 0 || pscMath == 0 || pscBgs == 0 || pscScience == 0 || pscReligion == 0){
        document.getElementById('psc-point').innerHTML = '0.00';
        document.getElementById('psc-grade').innerHTML = 'F (Fail)';
        document.getElementById('psc-result').style.display = 'block';
        document.getElementById('psc-alert').style.display = 'none';
    }

    // Fill up all fields - alert
    else if(pscBengali == -2 || pscEnglish == -2 || pscMath == -2 || pscBgs == -2 || pscScience == -2 || pscReligion == -2){
        document.getElementById('psc-alert').innerHTML = 'Please fill up all fields';
        document.getElementById('psc-alert').style.display = 'block';
        document.getElementById('psc-result').style.display = 'none';
    }

    // Input valid number - alert
    else if(pscBengali == -1 || pscEnglish == -1 || pscMath == -1 || pscBgs == -1 || pscScience == -1 || pscReligion == -1){
        document.getElementById('psc-alert').innerHTML = 'Please input valid number';
        document.getElementById('psc-alert').style.display = 'block';
        document.getElementById('psc-result').style.display = 'none';
    }

    else{
        const result = ((pscBengali + pscEnglish + pscMath + pscBgs + pscScience + pscReligion)/6).toFixed(2);
        document.getElementById('psc-point').innerHTML = result;
        const grade = pointToGrade(result);
        document.getElementById('psc-grade').innerHTML = grade + " (Pass)";
        document.getElementById('psc-result').style.display = 'block';
        document.getElementById('psc-alert').style.display = 'none';
    }
})

document.getElementById('jsc-calculate').addEventListener('click', function(){
    const jscBengali = numberToPoint(document.getElementById('jsc-bengali').value);
    const jscEnglish = numberToPoint(document.getElementById('jsc-english').value);
    const jscMath = numberToPoint(document.getElementById('jsc-math').value);
    const jscBgs = numberToPoint(document.getElementById('jsc-bgs').value);
    const jscScience = numberToPoint(document.getElementById('jsc-science').value);
    const jscReligion = numberToPoint(document.getElementById('jsc-religion').value);
    const jscIct = numberToPoint(document.getElementById('jsc-ict').value);
    const jscPhysical = numberToPoint(document.getElementById('jsc-physical').value);
    const jscArtsCrafts = numberToPoint(document.getElementById('jsc-arts-craft').value);
    const jscWorkLife = numberToPoint(document.getElementById('jsc-work-life').value);
    const jscAgriculturalHome = numberToPoint(document.getElementById('jsc-agricultural-home').value);

    // console.log(pscBengali);

    // Fail
    if(jscBengali == 0 || jscEnglish == 0 || jscMath == 0 || jscBgs == 0 || jscScience == 0 || jscReligion == 0 || jscIct == 0 || jscPhysical == 0 || jscArtsCrafts == 0 || jscWorkLife == 0 || jscAgriculturalHome == 0){
        document.getElementById('jsc-point').innerHTML = '0.00';
        document.getElementById('jsc-grade').innerHTML = 'F (Fail)';
        document.getElementById('jsc-result').style.display = 'block';
        document.getElementById('jsc-alert').style.display = 'none';
    }

    // Fill up all fields - alert
    else if(jscBengali == -2 || jscEnglish == -2 || jscMath == -2 || jscBgs == -2 || jscScience == -2 || jscReligion == -2 || jscIct == -2 || jscPhysical == -2 || jscArtsCrafts == -2 || jscWorkLife == -2 || jscAgriculturalHome == -2){
        document.getElementById('jsc-alert').innerHTML = 'Please fill up all fields';
        document.getElementById('jsc-alert').style.display = 'block';
        document.getElementById('jsc-result').style.display = 'none';
    }

    // Input valid number - alert
    else if(jscBengali == -1 || jscEnglish == -1 || jscMath == -1 || jscBgs == -1 || jscScience == -1 || jscReligion == -1 || jscIct == -1 || jscPhysical == -1 || jscArtsCrafts == -1 || jscWorkLife == -1 || jscAgriculturalHome == -1){
        document.getElementById('jsc-alert').innerHTML = 'Please input valid number';
        document.getElementById('jsc-alert').style.display = 'block';
        document.getElementById('jsc-result').style.display = 'none';
    }

    else{
        const result = ((jscBengali + jscEnglish + jscMath + jscBgs + jscScience + jscReligion + jscIct + jscPhysical + jscArtsCrafts + jscWorkLife + jscAgriculturalHome)/11).toFixed(2);
        document.getElementById('jsc-point').innerHTML = result;
        const grade = pointToGrade(result);
        document.getElementById('jsc-grade').innerHTML = grade + " (Pass)";
        document.getElementById('jsc-result').style.display = 'block';
        document.getElementById('jsc-alert').style.display = 'none';
    }
    



})