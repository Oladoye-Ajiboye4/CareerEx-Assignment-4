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

//passOrFail()


function eligibleToVote(){
    const age = parseInt(prompt('Enter your age: '))
    if (age >= 18){
        return "You're eligible to vote"
    } else{
        return 'Not eligible to vote'
    }
    
}

//eligibleToVote()


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

//checkScore(prompt('Enter your name: '), parseInt(prompt('Enter your score: ')))



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

//``grantAccess(prompt('Has ID? true or false: '), prompt('Above 18? true or false:'))


let scores = [87, 65, 92, 74, 58, 99, 43, 76, 81, 69];
for(let i=0; scores.length > i; i++){
    if (scores[i] >= 50){
        print(scores[i], 'Pass')
    }else{
        print(scores[i], 'Fail')
    }
}
