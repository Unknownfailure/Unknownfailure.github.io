function changeValueEngines(event) {
    if ( event.target.getAttribute('type') == 'radio' ) {
        var costE = 0;
        if (event.target.value == "F18_Engines")
        {
            costE = 10.72;
            document.getElementById("movement").style.width = "33%";
            document.getElementById("speed").style.width = "25%";
        }
        else if (event.target.value == "MIG_Engines")
        {
            costE = 15.50;
            document.getElementById("movement").style.width = "66%";
            document.getElementById("speed").style.width = "40%";
        }
        else if (event.target.value == "F35_Engines")
        {
            costE = 19.70;
            document.getElementById("movement").style.width = "100%";
            document.getElementById("speed").style.width = "50%";
        }
        document.getElementById('enginecost').innerHTML = costE;
    }
}


function changeValueBodies(event) {
    if ( event.target.getAttribute('type') == 'radio' ) {
        var costB = 0;
        if (event.target.value == "F18_Body")
        {
            costB = 54.28;
            document.getElementById("speed").style.width = "70%";
            document.getElementById("bodypreview").src = "./images/f18.jpg";
        }
        else if (event.target.value == "MIG_Body")
        {
            costB = 45.50;
            document.getElementById("speed").style.width = "45%";
            document.getElementById("bodypreview").src = "./images/mig29.jpg";
        }
        else if (event.target.value == "F35_Body")
        {
            costB = 67.20;
            document.getElementById("speed").style.width = "80%";
            document.getElementById("bodypreview").src = "./images/f35.jpg";
        }
        document.getElementById('bodycost').innerHTML = costB;
    }
}

function totalWeapon() {
    var input = document.getElementsByName("weapon");
    var costW = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        costW += parseFloat(input[i].value);
      }
    }
    document.getElementById('cost').innerHTML = costW;
}

function TotalPrice() {
    var engine = parseFloat(document.getElementById('enginecost').innerHTML);
    var body = parseFloat(document.getElementById('bodycost').innerHTML);
    var weapons = parseFloat(document.getElementById('cost').innerHTML) / 1000 ;
    total = (engine + body + weapons).toFixed(1);
    document.getElementById('totalcost').innerHTML = total;
}

function increaseFirepowerBar() {
    var count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (count == 0)
    {
        document.getElementById("firepower").style.width = "5%";
    }
    else if (count == 1)
    {
        document.getElementById("firepower").style.width = "20%";
    }
    else if (count == 2)
    {
        document.getElementById("firepower").style.width = "50%";
    }
    else if (count == 3)
    {
        document.getElementById("firepower").style.width = "100%";
    }
}

function toggleTest1() {
    var x = document.getElementById("SoundTestBox1");
    console.log(x.style.display);
    if (x.style.display == "none") {
      x.style.display = "block";
      setTimeout(ding1,2000);
    } else {
      x.style.display = "none";
    }
}

function toggleTest2() {
    var x = document.getElementById("SoundTestBox2");
    if (x.style.display == "none") {
     x.style.display = "block";
     setTimeout(ding1,3200);
    } else {
      x.style.display = "none";
    }
}

function ding1() {
    var x =document.getElementById("sound");
    x.play();
}

function ding2() {
    var x = document.getElementById("sound2");
    x.play();
}

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

if (page == "index.html")
{
document.getElementById('box1').addEventListener('click', toggleTest1);
document.getElementById('box2').addEventListener('click', toggleTest2);
}
else if (page == "costings.html")
{
document.getElementById('engines').addEventListener( 'click', changeValueEngines);
document.getElementById('bodies').addEventListener( 'click', changeValueBodies);
document.getElementById('guns').addEventListener( 'click', totalWeapon);
document.getElementById('form').addEventListener( 'click', TotalPrice);
document.getElementById('form').addEventListener( 'click', increaseFirepowerBar);
}
else if (page == "production.html")
{
document.getElementById('stuka').addEventListener('click', ding2);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
