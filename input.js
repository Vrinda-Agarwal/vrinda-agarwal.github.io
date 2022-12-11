var subjects=prompt("Enter the 18 subjects seperated by space","").split(" ");

for(i=1;i<=18;i++){
    document.getElementById("sub"+i+"-1").innerHTML=subjects[i-1];
    document.getElementById("sub"+i+"-2").innerHTML=subjects[i-1];    
}