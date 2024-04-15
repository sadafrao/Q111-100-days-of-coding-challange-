// Q111
//this function use if and else chain to categories a person age group
function ageGroup(age: number): string {
  if (age < 13){
    return "child";
  } else if (age <= 19) {
    return "Teenager";
  } else {
    return "adult";
  }
}
console.log(ageGroup(12));
console.log(ageGroup(10));
console.log(ageGroup(25));