function passOrFail(){
    const score = parseInt(prompt('Enter your score: '))
    if (score >= 180){
        console.log('Passed')
    }
    else if (score >= 0) {
        console.log('Failed')
    } else{
        console.log('Score must be greater than 0')
    }
    
}

passOrFail()


function eligibleToVote(){
    const age = parseInt(prompt('Enter your age: '))
    if (age >= 18){
        return "You're eligible to vote"
    } else{
        return 'Not eligible to vote'
    }
    
}

eligibleToVote()


function checkScore(name, score){
    
    if (score >= 90 && score <= 100){
        console.log( 'Excellent')
    }else if (score >= 75 &&  score <= 89) {
        console.log('Good')
    } else if (score >= 50 &&  score <=74) {
        console.log('Average')
    } else{
        console.log('Failed')
    }
}

checkScore(prompt('Enter your name: '), parseInt(prompt('Enter your score: ')))



function grantAccess(hasID, isAbove18){
    if (hasID === 'true'){
        hasID = true
    } else if(hasID === 'false'){
        hadID = false
    } else{
        return 'Invalid Input'
    }
    
    if (isAbove18 === 'true'){
        isAbove18 = true
    } else if(isAbove18 === 'false'){
        isAbove18 = false
    } else{
        return 'Invalid Input'
    }
    
    if (hasID && isAbove18){
        return 'Access granted'
    } else {
        return 'Access not granted'
    }
}

grantAccess(prompt('Has ID? true or false: '), prompt('Above 18? true or false:'))


let scores = [87, 65, 92, 74, 58, 99, 43, 76, 81, 69];
for(let i=0; i < scores.length; i++){
    if (scores[i] >= 50){
        console.log(scores[i], 'Pass')
    }else{
        console.log(scores[i], 'Fail')
    }
}


const passed = (mathScore, engScore) => {
    if (mathScore >= 50 && engScore >= 50){
        return 'Yes'
    } else{
        return 'No'
    }
}
console.log(passed(parseInt(prompt('Enter your Math score: ')), parseInt(prompt('Enter your English score: '))))


function signupAllowed(email, phoneNo){
    if (email || phoneNo){
        return "You're allowed to sign up"
    } else{
        return "You're not allowed to sign up"
    }
}

signupAllowed(prompt('Enter your email: '), parseInt(prompt('Enter your phone number: ')))


function signup(username, password){
    if (username || password){
        return "Sign up successful!!"
    } else{
        return "Invalid Input"
    }
}

signup(prompt('Enter your username: '), prompt('Enter your password: '))


 function workStatus(hoursWorked) {
    return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

workStatus(parseInt(prompt('Enter your working hours: ')))


const largerNum = (a, b) => (a > b ? a : b);
console.log(largerNum(parseInt(prompt('a: ')), parseInt(prompt('b: '))))
