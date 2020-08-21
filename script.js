const header = document.getElementById("exam-icons");
const btns = header.getElementsByClassName("exam-icon-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


document.getElementById('psc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'block';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('varsity-input').style.display = 'none';
})

document.getElementById('jsc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'block';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('varsity-input').style.display = 'none';
})

document.getElementById('ssc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'block';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('varsity-input').style.display = 'none';
})

document.getElementById('hsc').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'block';
    document.getElementById('varsity-input').style.display = 'none';
})

document.getElementById('varsity').addEventListener('click', function(){
    document.getElementById('psc-input').style.display = 'none';
    document.getElementById('jsc-input').style.display = 'none';
    document.getElementById('ssc-input').style.display = 'none';
    document.getElementById('hsc-input').style.display = 'none';
    document.getElementById('varsity-input').style.display = 'block';
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
}

document.getElementById('psc-calculate').addEventListener('click', function(){
    const pscBengali = numberToPoint(document.getElementById('psc-bengali').value);
    const pscEnglish = numberToPoint(document.getElementById('psc-english').value);
    const pscMath = numberToPoint(document.getElementById('psc-math').value);
    const pscBgs = numberToPoint(document.getElementById('psc-bgs').value);
    const pscScience = numberToPoint(document.getElementById('psc-science').value);
    const pscReligion = numberToPoint(document.getElementById('psc-religion').value);

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

function paperResult(paper1Id, paper2Id){
    let point = 100;
    const paper1 = document.getElementById(paper1Id).value;
    const paper2 = document.getElementById(paper2Id).value;
    if(paper1.length == 0 || paper2.length == 0){
        point = -2;
    }
    else if(paper1 < 0 || paper2 < 0 || paper1 > 100 || paper2 > 100){
        point = -1;
    }
    else if(paper1 < 33 || paper2 < 33){
        point = 0;
    }
    else{
        const paperAvg = (parseInt(paper1) + parseInt(paper2))/2;
        point = numberToPoint(paperAvg);
    }
    return point;
}

document.getElementById('jsc-calculate').addEventListener('click', function(){
    jscBengali = paperResult('jsc-bengali1', 'jsc-bengali2');
 
    const jscEnglish = numberToPoint(document.getElementById('jsc-english1').value);
    const jscMath = numberToPoint(document.getElementById('jsc-math').value);
    
    const jscBgs = numberToPoint(document.getElementById('jsc-bgs').value);
    const jscScience = numberToPoint(document.getElementById('jsc-science').value);
    const jscReligion = numberToPoint(document.getElementById('jsc-religion').value);
    const jscIct = numberToPoint(document.getElementById('jsc-ict').value);
    const jscPhysical = numberToPoint(document.getElementById('jsc-physical').value);
    const jscArtsCrafts = numberToPoint(document.getElementById('jsc-arts-craft').value);
    const jscWorkLife = numberToPoint(document.getElementById('jsc-work-life').value);
    const jscAgriculturalHome = numberToPoint(document.getElementById('jsc-agricultural-home').value);

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
        const result = ((jscBengali + jscEnglish + jscMath + jscBgs + jscScience + jscReligion + jscIct + jscPhysical + jscArtsCrafts + jscWorkLife + jscAgriculturalHome - 2)/10).toFixed(2);
        document.getElementById('jsc-point').innerHTML = result;
        const grade = pointToGrade(result);
        document.getElementById('jsc-grade').innerHTML = grade + " (Pass)";
        document.getElementById('jsc-result').style.display = 'block';
        document.getElementById('jsc-alert').style.display = 'none';
    }
})

// VARSITY
document.getElementById('course-number-submit').addEventListener('click', function(){
    document.getElementById('varsity-result').style.display = 'none';
    courseNumber = document.getElementById('course-number-input').value;
    if(courseNumber != 0){
        activeCourse = [];
        document.getElementById('varsity-table').innerHTML = '';
        for (let i = 1; i <= courseNumber; i++) {
            activeCourse.push(i);
            document.getElementById('varsity-table').innerHTML += `<tr id="course${i}" scope="row">
                                                                    <td><h5>Course Name:</h5></td>
                                                                    <td><input type="text" id="" placeholder="Course Name"></td>
                                                                    <td><h5>Credit</h5></td>
                                                                    <td><input type="number" id="credit${i}" placeholder="Credit"></td>
                                                                    <td><h5>Number (%)</h5></td>
                                                                    <td><input type="number" id="number${i}" placeholder="Number"></td>
                                                                    <td><button onClick="courseDelete('course${i}', ${i})" class="btn btn-danger">Delete</button></td>
                                                                </tr>`
        }
        document.getElementById('calculate-add-buttons').style.display = 'block';
        console.log(activeCourse);
    }
})

function courseDelete(id, idNumber){
    document.getElementById(id).style.display = 'none';
    const index = activeCourse.indexOf(idNumber);
    activeCourse.splice(index, 1);
    console.log(activeCourse);
}

function addCourse(){
    courseNumber++;
    document.getElementById('varsity-table').innerHTML += `<tr id="course${courseNumber}" scope="row">
                                                                <td><h5>Course Name:</h5></td>
                                                                <td><input type="text" id="" placeholder="Course Name"></td>
                                                                <td><h5>Credit</h5></td>
                                                                <td><input type="number" id="credit${courseNumber}" placeholder="Credit"></td>
                                                                <td><h5>Number (%)</h5></td>
                                                                <td><input type="number" id="number${courseNumber}" placeholder="Number"></td>
                                                                <td><button onClick="courseDelete('course${courseNumber}', ${courseNumber})" class="btn btn-danger">Delete</button></td>
                                                            </tr>`
    activeCourse.push(courseNumber);
    // console.log(activeCourse);
    document.getElementById('varsity-result').style.display = 'none';
}

function numberToPointVarsity(num){
    if(num.length == 0){
        return -2;
    }
    else if(num < 0 || num > 100){
        return -1;
    }
    else if(num >= 80){
        return 4;
    }
    else if(num >= 75){
        return 3.75;
    }
    else if(num >= 70){
        return 3.50;
    }
    else if(num >= 65){
        return 3.25;
    }
    else if(num >= 60){
        return 3;
    }
    else if(num >= 55){
        return 2.75;
    }
    else if(num >= 50){
        return 2.50;
    }
    else if(num >= 45){
        return 2.25;
    }
    else if(num >= 40){
        return 2;
    }
    else{
        return 0;
    }
}

function pointToGradeVarsity(point){
    if(point == 4){
        return 'A+';
    }
    else if(point >= 3.75){
        return 'A';
    }
    else if(point >= 3.50){
        return 'A-';
    }
    else if(point >= 3.25){
        return 'B+';
    }
    else if(point >= 3){
        return 'B';
    }
    else if(point >= 2.75){
        return 'B-';
    }
    else if(point >= 2.50){
        return 'C+';
    }
    else if(point >= 2.25){
        return 'C';
    }
    else if(point >= 2){
        return 'C-';
    }
    else{
        return 'F';
    }
}

document.getElementById('varsity-calculate').addEventListener('click', function(){
    let totalCredit = 0;
    let creditIntoPoint = 0;
    let temp = 0;
    for (let i = 0; i < activeCourse.length; i++) {
        const courseNo = activeCourse[i];
        const credit = document.getElementById(`credit${courseNo}`).value;
        const number = document.getElementById(`number${courseNo}`).value;
        const point = numberToPointVarsity(number);
        // console.log(point);
        if(point == -2){
            document.getElementById('varsity-alert').innerText = 'Fill up all fields';
            break;
        }
        else if(point == -1){
            document.getElementById('varsity-alert').innerText = 'Please input valid number';
            break;
        }
        totalCredit += parseInt(credit);
        creditIntoPoint += parseFloat(credit * point);
        temp = 5;
        // console.log(totalCredit, creditIntoPoint);
    }
    if(temp == 5){
        const avgPoint = (creditIntoPoint / totalCredit).toFixed(2);
        const grade = pointToGradeVarsity(avgPoint);

        document.getElementById('varsity-point').innerText = avgPoint;
        document.getElementById('varsity-grade').innerText = grade;
        document.getElementById('varsity-result').style.display = 'block';
    }
    
})