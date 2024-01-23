function insert()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("sfField");
    make.setAttribute("rows",1);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("sf");
    let gole = document.getElementById("ss");
    direct.insertBefore(make,gole);
}
function insert1()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("skField");
    make.setAttribute("rows",1);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("sk");
    let gole = document.getElementById("we");
    direct.insertBefore(make,gole);
}
function insert2()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("weField");
    make.setAttribute("rows",3);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("wf");
    let gole = document.getElementById("wk");
    direct.insertBefore(make,gole);
}
function insert3()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("edField");
    make.setAttribute("rows",3);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("ef");
    let gole = document.getElementById("ek");
    direct.insertBefore(make,gole);
}
function insert4()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("ccField");
    make.setAttribute("rows",3);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("cf");
    let gole = document.getElementById("cr");
    direct.insertBefore(make,gole);
}

function genCV()
{
   document.getElementById("name").innerHTML = document.getElementById("nameField").value;
   document.getElementById("phone").innerHTML = document.getElementById("contactField").value;
   document.getElementById("address").innerHTML = document.getElementById("AddressField").value;
   document.getElementById("email").innerHTML = document.getElementById("emailField").value;
   document.getElementById("intro").innerHTML = document.getElementById("intr").value;
   
   let skl = document.getElementsByClassName("skField");
    let str = "";
    for(let e of skl)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("skillist").innerHTML = str;

    let cer = document.getElementsByClassName("ccField");
    let str1 = "";
    for(let e of cer)
    {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("certl").innerHTML = str1;

    let edc = document.getElementsByClassName("edField");
    let str2 = "";
    for(let e of edc)
    {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("education").innerHTML = str2;

    let wrk = document.getElementsByClassName("weField");
    let str3 = "";
    for(let e of wrk)
    {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("work").innerHTML = str3;

    let sfk = document.getElementsByClassName("sfField");
    let str4 = "";
    for(let e of sfk)
    {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("softl").innerHTML = str4;
    document.getElementById("form").style.display="none";
}

function printCV()
{
    window.print();
}