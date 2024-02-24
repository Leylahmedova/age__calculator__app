const form=document.getElementById("form")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")
const result=document.querySelector(".result")
const currentDate=new Date()
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    result.innerHTML=''

    let ageYear=currentYear - year.value
    let ageMonth=currentMonth - month.value
    let ageDay=currentDay - day.value
   
    if(ageDay<0){
        ageMonth--
        ageDay+=30
    }
    if(ageMonth<0){
        ageYear--
        ageMonth+=12
    }
    year.value=''
    month.value=''
    day.value=''
   const h1Year=document.createElement("h1")
   const h1Month=document.createElement("h1")
   const h1Day=document.createElement("h1")
   h1Year.innerHTML=`${ageYear} <h2> years</h2>`
   h1Month.innerHTML=`${ageMonth} <h2> months</h2>`
   h1Day.innerHTML=`${ageDay} <h2> days</h2>`
   result.append(h1Year,h1Month,h1Day)

})












// Function to calculate age
// function calculateAge(birthYear, birthMonth, birthDay) {
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth() + 1; // Month is 0-based
//     const currentDay = currentDate.getDate();
  
//     let ageYear = currentYear - birthYear;
//     let ageMonth = currentMonth - birthMonth;
//     let ageDay = currentDay - birthDay;
  
//     // Adjust for negative age months or days
//     if (ageDay < 0) {
//       ageMonth--;
//       ageDay += 30; // Assuming an average of 30 days per month
//     }
  
//     if (ageMonth < 0) {
//       ageYear--;
//       ageMonth += 12;
//     }
  
//     return {
//       years: ageYear,
//       months: ageMonth,
//       days: ageDay,
//     };
//   }

  
//   // Input from the user
//   const birthYear = parseInt(prompt("Enter your birth year:"));
//   const birthMonth = parseInt(prompt("Enter your birth month (1-12):"));
//   const birthDay = parseInt(prompt("Enter your birth day (1-31):"));
  
//   // Calculate age
//   const age = calculateAge(birthYear, birthMonth, birthDay);
  
//   // Display the result
//   console.log(`You are ${age.years} years, ${age.months} months, and ${age.days} days old.`);
  