

function getPreferedGameMode(noOfFriends){
    if (noOfFriends === 0){
        return"solo";
    }
    else if(noOfFriends===1){
        return "Dual";
    }
    else{
        return"Squad";
    }
}

let gameMode = getPreferedGameMode(3);
console.log(gameMode);