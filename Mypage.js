var input1=document.forms["asool"]["fname"];
var input2=document.forms["asool"]["lname"];
var input3=document.forms["asool"]["web"];
var input4=document.forms["asool"]["phone"];
var input5=document.forms["asool"]["email"];
var input6=document.forms["asool"]["user"];
var input7=document.forms["asool"]["pass"];
var input8=document.forms["asool"]["deg"];
var input9=document.forms["asool"]["birthday"];






function submit_file() 
{

   
    
    if (input1.value == "") {
        document.getElementById("fname").style.border ="solid 2px green";
    }
    
    if (input2.value == "") {
        
        document.getElementById("lname").style.border ="solid 2px green";
    }
   
    if (input3.value == "") {
   
        document.getElementById("web").style.border ="solid 2px green";
    }
   
    if (input4.value == "") {

        document.getElementById("phone").style.border ="solid 2px green";
    }
    
    if (input5.value == "") {

        document.getElementById("email").style.border ="solid 2px green";
    }
   
    if (input6.value== "") {
   
        document.getElementById("user").style.border ="solid 2px green";
    }
    
    if (input7.value== "") {

        document.getElementById("pass").style.border ="solid 2px green";
    }
    
    if (input8.value== "empty") {

      document.getElementById("deg").style.border ="solid 2px green";

    }
    if(input9.value==""||input8.value==""||input7.value==""||input6.value==""||input5.value==""||input4.value==""||input3.value==""||input2.value==""||input1.value=="")
    {
        alert("you must enter all value to contino 🙂");

    }
}



function returnn(labe)
{
    labe.style.border="solid 1px black";
}


function save_file()
{
    
    var email = document.getElementById("email").value
    var name   = email.substring(0, email.lastIndexOf("@"));
    alert(name+" has been saved 🙂")
}








function last_index(index){

    

    var index1=false;
    var index2=false;
    var index3=false;
    var index4=false;
    var index5=false;
    var index6=false;
    var index7=false;
    var index8=false;
    var index9=false;



    if(input1.value!="")
    {
        index1=true;
    }
    if(input2.value!="")
    {
        index2=true;
    }
    if(input3.value!="")
    {
        index3=true;
    }
    if(input4.value!="")
    {
        index4=true;
    }
    if(input5.value!="")
    {
        index5=true;
    }
    if(input6.value!="")
    {
        index6=true;
    }
    if(input7.value!="")
    {
        index7=true;
    }
    
   
    




    

    if(index==2&&index1==false)
    {
        alert("error !!!! you must enter last value on input 1");
        input1.select();

    }
    if(index==3&&index2==false)
    {
        alert("error !!!! you must enter last value on input 2");
        input1.select();

    }
    if(index==4&&index3==false)
    {
        alert("error !!!! you must enter last value on input 3");
        input1.select();

    }
    if(index==5&&index4==false)
    {
        alert("error !!!! you must enter last value on input 4");
        input1.select();

    }
    if(index==6&&index5==false)
    {
        alert("error !!!! you must enter last value on input 5");
        input1.select();

    }
    if(index==7&&index6==false)
    {
        alert("error !!!! you must enter last value on input 6");
        input1.select();
    }
    if(index==8&&index7==false)
    {
        alert("error !!!! you must enter last value on input 7");
        input1.select();
    }
    if(index==9&&index8==false)
    {
        alert("error !!!! you must enter last value on input 8");
        input1.select();
    }
}