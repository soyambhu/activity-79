array_student_name=[];

function submit(){

var name1= document.getElementById("student_name_1").value;
var name2= document.getElementById("student_name_2").value;
var name3= document.getElementById("student_name_3").value;
var name4= document.getElementById("student_name_4").value;

array_student_name.push(name1);
array_student_name.push(name2);
array_student_name.push(name3);
array_student_name.push(name4);
console.log(array_student_name);

document.getElementById("display_array_name").innerHTML=array_student_name;
document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_button").style.display="inline-block";

}
function sorting(){
array_student_name.sort();
console.log(array_student_name);
document.getElementById("display_array_name").innerHTML=array_student_name;
}