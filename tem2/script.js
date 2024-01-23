function addnew()
{
    let newNode =
	document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter here");

    let weob = document.getElementById("sk");
    let weaddbutton = document.getElementById("we");
    weob.insertBefore(newNode,weaddbutton);
}
function insert()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("bgField");
    make.setAttribute("rows",1);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("bd");
    let gole = document.getElementById("begin");
    direct.insertBefore(make,gole);
}
function insert1()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("bdField");
    make.setAttribute("rows",1);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("bg");
    let gole = document.getElementById("be");
    direct.insertBefore(make,gole);
}
function insert2()
{
   let make = 
   document.createElement("textarea");
   make.classList.add("form-control");
   make.classList.add("crField");
    make.setAttribute("rows",3);
    make.setAttribute("placeholder","enter here");
    
    let direct = document.getElementById("cr");
    let gole = document.getElementById("crname");
    direct.insertBefore(make,gole);
}

function genCV()
{
   let na = document.getElementById("name");
   let naam= document.getElementById("nameField").value;
   na.innerHTML = naam;
   document.getElementById("phone").innerHTML = document.getElementById("contactField").value;
   document.getElementById("addr").innerHTML = document.getElementById("AddressField").value;
   document.getElementById("about").innerHTML = document.getElementById("aboutField").value;
   
   let skl = document.getElementsByClassName("skField");
    let str = "";
    for(let e of skl)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("skilist").innerHTML = str;

    let cer = document.getElementsByClassName("crField");
    let str1 = "";
    for(let c of cer)
    {
        str1 = str1 + `<li> ${c.value} </li>`;
    }
    document.getElementById("certlist").innerHTML = str1;


}

function printCV()
{
    window.print();
}