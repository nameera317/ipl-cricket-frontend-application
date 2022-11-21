var playerData = [
    {
    "id": 0,
    "photo": "https://www.mykhel.com/thumb/247x100x233/cricket/players/0/7780.jpg",
    "playerName": "Hardik Pandya",
    "from": "MI",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 1,
    "photo": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c244980/virat-kohli.jpg",
    "playerName": "Virat Kohli",
    "from": "RCB",
    "price": "8.00 Cr",
    "isPlaying": true,
    "description": "Batsman"
    },
    {
    "id": 2,
    "photo": "https://m.cricbuzz.com/a/img/v1/192x192/i1/c171064/yuvraj-singh.jpg",
    "playerName": "Yuvraj Singh",
    "from": "MI",
    "price": "1.00 Cr",
    "isPlaying": false,
    
    "description": "Batsman"
    },
    {
    "id": 3,
    "photo": "https://imgk.timesnownews.com/story/morris_rr.jpg?tr=w-1200,h-900",
    "playerName": "Chris Morris",
    "from": "RR",
    "price": "16.25 Cr",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 4,
    "photo":"https://www.cricket.com.au/~/-/media/News/2021/10/12maxwell1.ashx?w=1600",
    "playerName": "Glenn Maxwell",
    "from": "RCB",
    "price": "14.25",
    "isPlaying": true,
    "description": "All-rounder"
    },
    {
    "id": 5,
    "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c244982/rohit-sharma.jpg",
    "playerName": "Rohit Sharma",
    "from": "MI",
    "price": "6.50 Cr",
    "isPlaying": true,
    "description": "BatsMan"
    },
    {
    "id": 6,
    "photo":"https://assets.thehansindia.com/h-upload/2020/09/28/1600x960_1002021-ishan-kishan.jpg",
    "playerName": "Ishan Kishan",
    "from": "MI",
    "price": "2.50 Cr",
    "isPlaying": true,
    "description": "BatsMan"
    }
    
]


var playerSection = document.getElementById("player-container");
    
    for(var i =0; i<playerData.length; i++) {
        var player = playerData[i];
        var pCard = document.createElement("div");
        pCard.classList.add("card");
        var a = document.createElement("a");
        var pImg1 = document.createElement("img");
        pImg1.src = player.photo;
        pImg1.classList.add("img");
        var span = document.createElement("div");
        span.classList.add("pSpan");
var Pname = document.createElement("h3");
Pname.classList.add("h3")
Pname.innerText = player.playerName;
var team = document.createElement("h4");
team.innerText = player.from;
team.classList.add("h4");
var price = document.createElement("h4");
price.innerText = player.price;
price.classList.add("h4");
var Pstatus = document.createElement("h4");
Pstatus.innerText = player.isPlaying;
Pstatus.classList.add("h4");
var desc = document.createElement("h4");
desc.innerText = player.description;
desc.classList.add("h4");
span.append(Pname, team, price, Pstatus, desc);
pCard.append(pImg1, span);
playerSection.append(pCard);
    }


    var inputField = document.getElementById("todoInputField");
    var toDoItemText = localStorage.getItem('toDoItemText');
    function onInputFieldChange(e) {
      toDoItemText = e.target.value;
      console.log(toDoItemText);
    }
    
    inputField.addEventListener("keyup", onInputFieldChange);
    
    var addItemBtn = document.getElementById("addItemBtn");
var ul = document.getElementById("todoList");
function onAddItem() {
        var li = document.createElement("li");
        li.innerText = toDoItemText;
        ul.append(li); 
        inputField.value = "";
        localStorage.todoInputField;

    }

    addItemBtn.addEventListener("click", onAddItem);


