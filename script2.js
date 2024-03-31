
function send() {
    var arr = document.getElementsByTagName('input')
    console.log(arr)
    var fullname = arr[0].value;
    var phone = arr[3].value;
    var address1 = arr[4].value;
    var address2 = arr[5].value;
    var city = arr[6].value;
    var zip = arr[7].value;
    var email = arr[8].value;
    var checked1 = arr[1].checked;
    var checked2 = arr[2].checked;

    if(checked1 || checked2){
    } else {
        alert('At least one must be checked');
        return;
    }
    for(var i=3; i<=8; i++){
        if(arr[i].value == ""){
            alert('Please fill all field');
            return;
        }
        if(isNaN(phone)){
            alert('Phone must be a number');
            return;
        }

        if (/^\d{4}$/.test(zip)) {
        } else {
            alert('ZIP code must be exactly 4 digits.');
            return;
        }
    }
    if(fullname == ""){
        alert('Please fill all field');
        return;
    }
    
    
   
}
    




document.getElementById('method1').addEventListener('change', function() {
    var choosing = document.getElementById('chooseMethod');
    if (this.checked) {
        choosing.classList.remove('hidden');
    } else {
        choosing.classList.add('hidden');
    }
});

document.getElementById('method2').addEventListener('change', function() {
    var choosing = document.getElementById('chooseMethod');
    if (this.checked) {
        choosing.classList.add('hidden');
    } else {
        choosing.classList.remove('hidden');
    }
});


document.getElementById('method4').addEventListener('change', function() {
    var choosing1 = document.getElementById('onlyonline');
    if (this.checked) {
        choosing1.classList.remove('hidden1');
    } else {
        choosing1.classList.add('hidden1');
    }
});

document.getElementById('method3').addEventListener('change', function() {
    var choosing1 = document.getElementById('onlyonline');
    if (this.checked) {
        choosing1.classList.add('hidden1');
    } else {
        choosing1.classList.remove('hidden1');
    }
});


