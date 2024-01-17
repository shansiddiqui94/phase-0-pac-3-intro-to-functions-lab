function shout(string){
    return string.toUpperCase()
}

console.log(shout("Howdy"))

function whisper(string){
    return string.toLowerCase()
}
console.log(whisper("CAN YOU HEAR"))

function logShout(shout){
    console.log(shout.toUpperCase())
}
logShout("hey there")

function logWhisper(string){
    console.log(string.toLowerCase())
}
logWhisper("ARE YOU HEARING THIS NOISE")

function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!"
    } else if (string === string.toUpperCase()){
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}

console.log(sayHiToHeadphonedRoommate("I would love to!"))