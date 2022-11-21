var data = [ 
    {
        "id":"1",
        "teamCode": "CSK",
        "teamName": "Chennai Super Kings",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png"

    },
    {
        "id":"2",
        "teamCode":"DC",
        "teamName": "Delhi Capitals",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png"

    },
    {
        "id":"3",
        "teamCode": "GT",
        "teamName": "Gujarat Titans",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png"


    },
    {
        "id":"4",
        "teamCode": "KNR",
        "teamName": "Kolkata Knight Riders",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png"
        
    },
    {
        "id":"5",
        "teamCode": "LSG",
        "teamName": "Lucknow Super Giants",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png"
        
    },
    {
        "id":"6",
        "teamCode": "MI",
        "teamName": "Mumbai Indians",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png"
        
    },
    {
        "id":"7",
        "teamCode": "PK",
        "teamName": "Punjab Kings",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png"
        
    },
    {
        "id":"8",
        "teamCode": "RR",
        "teamName": "Rajasthan Royals",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png"
        

    },
    {
        "id":"9",
        "teamCode": "RCB",
        "teamName": "Royal Challengers Bangalore",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png"
        

    },
    {
        "id":"1",
        "teamCode": "SH",
        "teamName": "Sunrisers Hyderabad",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png"
    }
    
]


var section = document.getElementById("card-section");

    for(var i =0; i<data.length; i++) {
        var Data = data[i];
        var card = document.createElement("div");
        card.classList.add("card");
        var a = document.createElement("a");
        a.href ="http://127.0.0.1:5500/Homepage/index2.html";
        a.classList.add("a");
        var img1 = document.createElement("img");
        img1.src = Data.teamIcon;
        img1.classList.add("img");
        var Tname = document.createElement("h3");
        Tname.classList.add("h3")
        Tname.innerText = Data.teamName;
        a.append(img1, Tname);
card.append(a);
section.append(card);
    }

    var searchBar = document.getElementById("input");
    searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let authors = document.querySelectorAll('h3.h3');
    authors.forEach(author =>
        {
            if(author.textContent.toLowerCase().includes(currentValue)) {
                author.parentNode.parentNode.style.display = "block";
            }
            else {
                author.parentNode.parentNode.style.display ="none";
            }
        })

    });