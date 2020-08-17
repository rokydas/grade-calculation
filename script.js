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