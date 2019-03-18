// user can answer questions
//event listener
let wuTangName  =
document.getElementById("getName").addEventListener('click', getName);
//define variables
// console.log("1: ", question1, "2: ", question2, "3: ", question3, "4: ", question4, "5: ", question5);
//make a function to get name
function getName(e){
  let question1 = document.getElementById("question1").value;
  let question2 = document.getElementById("question2").value;
  let question3 = document.getElementById("question3").value;
  let question4 = document.getElementById("question4").value;
//Name Concatenation
  let name1 = question1 + question2
  let name2 = question3 + question4
//question5 doozy
  let question5 = document.getElementById("question5").value;
  //pick between name 1 or name 2
    if(question5 == "Yes"){
    console.log(name1)
    return document.getElementById('name').innerHTML = name1
  }else if(question5 == "No"){
    console.log(name2)
    return document.getElementById('name').innerHTML = name2
  //unaswered question catch
  }else
  if(question1 == "0" || question2 == "0"|| question3 == "0"|| question4 == "0" || question5 == "0"){
  alert("You did'nt answer every thing. It's Rap or Go to the League Son")
  }

}
