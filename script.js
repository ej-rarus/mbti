var testValue = 0;

function tester(){
    var total = 0;
    var btn = parseInt(document.querySelector('input[name="Q1"]:checked').value);
    var btn2 = parseInt(document.querySelector('input[name="Q2"]:checked').value);
    var btn3 = parseInt(document.querySelector('input[name="Q3"]:checked').value);
    total = btn + btn2 + btn3;
    return total;
}

function tester2(){
    testValue = 0;
    testValue = tester();
    alert(testValue);
    testValue = 0;
    move();
}
