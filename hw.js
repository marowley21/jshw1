// Question 1

function findWords(string,names){
    let stringOnlyLetters = string.replace(',','').replace(',','').replace('!','')
    let stringListLower = stringOnlyLetters.toLowerCase()
    let stringList = stringListLower.split(' ')
    for(let i = 0;i!=names.length;i++){
        stringList.includes(names[i].toLowerCase()) ? console.log(names[i]) : ''
        
    }
}
findWords(dogString,dogNames)

// Question 2

givenArray = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr){
    for(i=0;i<arr.length;i++){
        i % 2 == 0 ? arr.splice(i,1,"even index"):
    }
    console.log(arr)
}
replaceEvens(givenArr)

// prework 1
function helloUser(user){
    console.log(`Hello ${user}`)
}
helloUser("Connor")
helloUser("Caleb")
helloUser("Kevin")

// prework 2
function firstOdds(){
    for(i=1;i<101;i+=2){
        console.log(i)
    }
}
firstOdds()

// prework 3
function findMax(list){
    console.log(Math.max(...list))
}
let list1 = [100,2,3,4,5]
let list2 = [1,2,100,4,5]
let list3 = [1,2,3,4,100]
findMax(list1)
findMax(list2)
findMax(list3)

// prework 4

function isLeapYear(year){
    year % 4 == 0 && year % 100 != 0 ? console.log(true) : year % 4 == 0 && year % 100 == 0 && year % 400 == 0 ? console.log(true) : console.log(false)
}

isLeapYear(2016)
isLeapYear(1997)
isLeapYear(1900)
isLeapYear(2000)

// prework 5

function consecutive(list){
    for(i=0;i<list.length-1;i++){
        list[i] + 1 != list[i + 1] ? console.log(false) : i == list.length -2 ? console.log(true) : ''
    }
}

let list1 = [1,2,3,4,5]
let list2 = [1,2,3,4,4389207002358665]
let list3 = [45,46,47,450000]



consecutive(list1)
consecutive(list2)
consecutive(list3)

