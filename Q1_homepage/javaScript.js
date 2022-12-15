function light() {
    // document.write("hey");
    document.getElementById("body_id").style="background-color: white;";
    document.getElementById("data1").style="color:rgb(18, 22, 46);";
    document.getElementById("data2").style="color:rgb(18, 22, 46);";
    document.getElementById("data3").style="color:rgb(18, 22, 46);";
    document.getElementById("data4").style="color:rgb(18, 22, 46);";
    document.getElementById("data5").style="color:rgb(18, 22, 46);";
    
}

function evil() {
    
    document.getElementById("data1").style="color:red;";
    document.getElementById("data2").style="color:red;";
    document.getElementById("data3").style="color:red;";
    document.getElementById("data4").style="color:red;";
    document.getElementById("data5").style="color:red;";
    
}

function dark() {
    document.getElementById("id1").src="insta.jpg";
    document.getElementById("body_id").style="background-color:rgb(18, 22, 46);";
    document.getElementById("data1").style="color:rgb(238, 196, 119);";
    document.getElementById("data2").style="color:rgb(238, 196, 119);";
    document.getElementById("data3").style="color:rgb(238, 196, 119);";
    document.getElementById("data4").style="color:rgb(238, 196, 119);";
    document.getElementById("data5").style="color:rgb(238, 196, 119);";
}

function pink() {
    document.getElementById("body_id").style="background-color: lightpink;";
    document.getElementById("data1").style="color:rgb(18, 22, 46);";
    document.getElementById("data2").style="color:rgb(18, 22, 46);";
    document.getElementById("data3").style="color:rgb(18, 22, 46);";
    document.getElementById("data4").style="color:rgb(18, 22, 46);";
    document.getElementById("data5").style="color:rgb(18, 22, 46);";
}

function green() {
    document.getElementById("body_id").style="background-color: rgb(52, 134, 35);;";
}

function big() {
    document.getElementById("lastE").classList.add('font_big');
    if ( document.getElementById("lastE").classList.contains('font_small') )
        document.getElementById("lastE").classList.remove('font_small')
    
    if ( document.getElementById("lastE").classList.contains('font_change'))    
        document.getElementById("lastE").classList.remove('font_change');
}

function small() {
    document.getElementById("lastE").classList.add('font_small');
    if ( document.getElementById("lastE").classList.contains('font_big') )
        document.getElementById("lastE").classList.remove('font_big')
    
    if ( document.getElementById("lastE").classList.contains('font_change'))    
        document.getElementById("lastE").classList.remove('font_change');
}

function normal()
{
    document.getElementById("lastE").classList.add('font_change');
    if ( document.getElementById("lastE").classList.contains('font_big') )
        document.getElementById("lastE").classList.remove('font_big')
    
    if ( document.getElementById("lastE").classList.contains('font_small'))    
        document.getElementById("lastE").classList.remove('font_small');   
}

function update() {
    let text = document.getElementById("studentf").value;
    let data = text;
    if (localStorage.getItem("nn") == null) {
      localStorage.setItem("nn", "0");
    }
    let ind = parseInt(localStorage.getItem("nn")) + 1;
    localStorage.setItem("nn", ind);

    let key_val = "NEWS_ID_" + ind;
    // localStorage.setItem("NUM_NEWS", ind);
    localStorage.setItem(key_val, data);

    let keyva = localStorage.getItem("NEWS_ID_" + ind);
    const node = document.createElement("li");
    const textnode = document.createTextNode(keyva);
    node.appendChild(textnode);
    document.getElementById("texten").appendChild(node);
}
