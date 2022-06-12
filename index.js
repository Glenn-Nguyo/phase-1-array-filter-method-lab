// Code your solution here
function findMatching(drivers, driver){
 let newArray = drivers.filter( val => driver === val || driver.toLowerCase() === val)  
 return newArray
 }
function fuzzyMatch(drivers , firstTwo){
    let newArray1 = drivers.filter(res => res.slice(0,2) === firstTwo)
  return newArray1
}
function matchName(drivers, driver){
   let obj = drivers.filter(res1 => res1.name=== driver)
   return obj
}