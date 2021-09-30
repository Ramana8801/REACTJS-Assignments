const students=[];
const studentListElement = document.querySelector('#student-list-ul')
document.querySelector("#fsubmit").addEventListener("click",addDetails)
function addDetails(){
    const text_name = document.querySelector("#fname").value
  const text_number = document.querySelector("#fnumber").value
  const text_mail = document.querySelector("#femail").value
   if ( 
    text_name == "" ||text_number == "" ||text_mail == ""
  )
    return;
    else {
        const detailObject = {
          Name: text_name, 
          Number: text_number, 
          Email: text_mail 
        }
        students.unshift(detailObject) //adding the detailobject to array
        studentListElement.innerHTML = ""; //clearing the data after press next tab by user
        document.querySelector("#fname").value=""
        document.querySelector("#fnumber").value=""
        document.querySelector("#femail").value=""
        displayStudentDetails(); //calling function 
      }
    }
    function displayStudentDetails() {
        students.forEach((details) => { //using forEach loop for taking detalis one by one in array
          const indexElement = document.createElement("li") //creating child tag for <ul></ul> from  java script
          indexElement.innerHTML="name:"+details.Name+" ,"+"Number:"+details.Number+","+"Email:"+details.Email
          studentListElement.appendChild(indexElement)
          })
          }