function func1(){
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = "block";
    
    // now part of inputs
    var user1Name = document.getElementById('user1input').value;
    var user1Property = document.getElementById('user1property').value;
    var user2Name = document.getElementById('user2input').value;
    var user2Property = document.getElementById('user2property').value;
    
    // now part of table
    var tab1Name = document.getElementById('tableid11');
    var tab1Property = document.getElementById('tableid12');
    var tab2Name = document.getElementById('tableid21');
    var tab2Property = document.getElementById('tableid22');

    // test
    console.log(user1Name);
    console.log(user1Property);
    console.log(user2Name);
    console.log(user2Property);

    // now data into table
    tab1Name.innerHTML = user1Name;
    tab1Property.innerHTML = user1Property;
    tab2Name.innerHTML = user2Name;
    tab2Property.innerHTML = user2Property;

    function interchange(){
        tab1Property.innerHTML = user2Property;
        tab2Property.innerHTML = user1Property;
    }
}