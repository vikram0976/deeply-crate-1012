import navbar from "../component/navbar.js";
//import api from "../api/api.js";
import footer from "../component/footer.js"
document.getElementById('navbar').innerHTML=navbar();
document.getElementById('footer').innerHTML=footer();

let slider = document.querySelector(".offerSlider");
let leftArrow = document.querySelector(".leftarrow");
let rightArrow = document.querySelector(".rightarrow");
let selectionIndex = 0;

rightArrow.addEventListener("click",function(){
    if(selectionIndex<8)
    {
        selectionIndex+=1;
    }else{
        selectionIndex =0;
    }
    console.log(selectionIndex);
    slider.style.transform = "translate("+(selectionIndex)*-322 +"px)";
})

leftArrow.addEventListener("click",function(){
    if(selectionIndex>=0)
    {
        selectionIndex-=1;
    }else{
        selectionIndex =8;
    }
    console.log(selectionIndex);
    slider.style.transform = "translate("+(selectionIndex)*-322 +"px)";
})
   
// .then((api)=>{
//     return api.data
// })
// .then((api)=>{
//     console.log(api.data)
// })
// .catch((err)=>{
//     console.log(err)
// })
   

    // fetch("https://api.cricapi.com/v1/currentMatches?apikey=609e0eac-7be1-4af5-90de-c5d770179806&offset=0")
	// .then(result => result.json())
	// .then(result => {
	// 	console.log(result.data)
    //     return append(result.data);
	// })
	// .catch(err => {
	// 	console.log("An error occured. Please check your code",err);
	// });

    let abc={"apikey":"609e0eac-7be1-4af5-90de-c5d770179806","data":[{"id":"4596cfa6-044c-4439-a0a5-587820eab451","name":"Chepauk Super Gillies vs IDream Tiruppur Tamizhans, 25th Match","status":"Chepauk Super Gillies won by 60 runs","venue":"SCF Cricket Ground, Salem","date":"2022-07-22","dateTimeGMT":"2022-07-22T13:45:00","teams":["Chepauk Super Gillies","IDream Tiruppur Tamizhans"],"teamInfo":[{"name":"Chepauk Super Gillies","shortname":"CSG","img":"https://cdorgapi.b-cdn.net/img/icon512.png"},{"name":"IDream Tiruppur Tamizhans","shortname":"ITT","img":"https://cdorgapi.b-cdn.net/img/icon512.png"}],"score":[{"r":133,"w":9,"o":20,"inning":"Chepauk Super Gillies Inning 1"},{"r":73,"w":10,"o":19.3,"inning":"IDream Tiruppur Tamizhans Inning 1"}],"series_id":"41bcbe72-ee4b-454c-90eb-fc68798e383a","fantasyEnabled":true,"bbbEnabled":false,"hasSquad":true},{"id":"0c487fde-15fa-4faa-8fb4-54e55c22662c","name":"West Indies vs India, 1st ODI","matchType":"odi","status":"India won by 3 runs","venue":"Queen\u0027s Park Oval, Port of Spain, Trinidad","date":"2022-07-22","dateTimeGMT":"2022-07-22T13:30:00","teams":["West Indies","India"],"teamInfo":[{"name":"India","shortname":"IND","img":"https://cdorgapi.b-cdn.net/img/teams/31-637877061080567215.webp"},{"name":"West Indies","shortname":"WI","img":"https://cdorgapi.b-cdn.net/img/teams/100-637877077978319234.webp"}],"score":[{"r":308,"w":7,"o":50,"inning":"India Inning 1"},{"r":305,"w":6,"o":50,"inning":"West Indies Inning 1"}],"series_id":"1f42281c-6e8c-40bc-ae84-7a3f6872b6d0","fantasyEnabled":true,"bbbEnabled":true,"hasSquad":true},{"id":"848dc1c1-2cc2-4e27-89da-6051c5d3aa15","name":"Ireland vs New Zealand, 3rd T20I","matchType":"t20","status":"New Zealand won by 6 wkts","venue":"Civil Service Cricket Club, Belfast","date":"2022-07-22","dateTimeGMT":"2022-07-22T11:00:00","teams":["Ireland","New Zealand"],"teamInfo":[{"name":"Ireland","shortname":"IRE","img":"https://cdorgapi.b-cdn.net/img/teams/33-637926315578500224.png"},{"name":"New Zealand","shortname":"NZ","img":"https://cdorgapi.b-cdn.net/img/teams/57-637877076980737903.webp"}],"score":[{"r":174,"w":6,"o":20,"inning":"Ireland Inning 1"},{"r":180,"w":4,"o":19,"inning":"New Zealand Inning 1"}],"series_id":"938431e3-166b-499d-93b8-cde0e21945da","fantasyEnabled":true,"bbbEnabled":true,"hasSquad":true},{"id":"60121ae5-80e1-48e4-96a7-3b819887c0e0","name":"Leicestershire vs Glamorgan, County Div 2","matchType":"test","status":"Day 3: Stumps - Glamorgan trail by 21 runs","venue":"Grace Road, Leicester","date":"2022-07-20","dateTimeGMT":"2022-07-20T10:00:00","teams":["Leicestershire","Glamorgan"],"teamInfo":[{"name":"Glamorgan","shortname":"GLAM","img":"https://cdorgapi.b-cdn.net/img/teams/1120-637889090390357869.webp"},{"name":"Leicestershire","shortname":"LECS","img":"https://cdorgapi.b-cdn.net/img/teams/1126-637889090878436462.webp"}],"score":[{"r":584,"w":10,"o":148,"inning":"Leicestershire Inning 1"},{"r":563,"w":5,"o":129,"inning":"Glamorgan Inning 1"}],"series_id":"75e0571e-958f-474e-b772-5665980e3d86","fantasyEnabled":true,"bbbEnabled":false,"hasSquad":true},{"id":"f98b5309-f121-4cdd-8a1b-2bad561c6c75","name":"England vs South Africa, 2nd ODI","matchType":"odi","status":"England won by 118 runs (29 Ovs Match due to rain)","venue":"Emirates Old Trafford, Manchester","date":"2022-07-22","dateTimeGMT":"2022-07-22T12:00:00","teams":["England","South Africa"],"teamInfo":[{"name":"England","shortname":"ENG","img":"https://cdorgapi.b-cdn.net/img/teams/23-637877072894080569.webp"},{"name":"South Africa","shortname":"RSA","img":"https://cdorgapi.b-cdn.net/img/teams/82-637877071839088912.webp"}],"score":[{"r":201,"w":10,"o":28.1,"inning":"England Inning 1"},{"r":83,"w":10,"o":20.4,"inning":"South Africa Inning 1"}],"series_id":"a6e31dc8-8cae-4fb1-854f-d3a94cdc301d","fantasyEnabled":true,"bbbEnabled":true,"hasSquad":true}],"status":"success","info":{"hitsToday":1,"hitsUsed":1,"hitsLimit":500,"credits":0,"server":18,"offsetRows":0,"cache":0,"totalRows":5,"queryTime":120.8235,"s":0}}

    let append=(abc.data)
    console.log(append)
// let append= (data) => {
//         //console.log(data)
        append.forEach(el=> {
            let div = document.createElement('div');
                div.setAttribute('class','Offertab1')
            let div1=document.createElement('div');
            div1.setAttribute('id','divhead')
            let p = document.createElement('p');
            p.innerText=el.name;
            div1.append(p);
            let div2=document.createElement('div')
            div2.setAttribute('id','divbody')
            let div2_1=document.createElement('div');
            div2_1.setAttribute('id','team1')
            let div2_2=document.createElement('div');
            div2_2.setAttribute('id','team2')
            let div2_1_1=document.createElement('div');
            div2_1_1.setAttribute('id','teamname1')
            let div2_1_2=document.createElement('div');
            div2_1_2.setAttribute('id','score1')
            let div2_1_1_1=document.createElement('div');
            let div2_1_1_2=document.createElement('div');
            let img=document.createElement('img')
            img.src=el.teamInfo[0].img;
            let team1=document.createElement('p');
            team1.innerText=el.teamInfo[0].shortname;
            team1.style.marginLeft="10px";
            team1.style.marginTop="10px";
            div2_1_1_1.append(img);
            div2_1_1_2.append(team1);
            div2_1_1.append(div2_1_1_1,div2_1_1_2);
            let score_1=document.createElement('p');
            score_1.innerText=el.score[0].r+"/"+el.score[0].w
            div2_1_2.append(score_1)
            div2_1.append( div2_1_1,div2_1_2)
            // // end of team1//////////////////////////////////
            let div2_2_1=document.createElement('div');
            div2_2_1.setAttribute('id','teamname2')
            let div2_2_2=document.createElement('div');
            div2_2_2.setAttribute('id','score2')
            let div2_2_1_1=document.createElement('div');
            let div2_2_1_2=document.createElement('div');
            let img1=document.createElement('img')
            img1.src=el.teamInfo[1].img;
            let team2=document.createElement('p');
            team2.innerText=el.teamInfo[1].shortname;
            team2.style.marginLeft="10px";
            div2_2_1_1.append(img1);
            div2_2_1_2.append(team2);
            div2_2_1.append(div2_2_1_1,div2_2_1_2);
            let score_2=document.createElement('p');
            score_2.innerText="("+el.score[1].o+")"+" "+el.score[1].r+"/"+el.score[1].w
            div2_2_2.append(score_2)
            div2_2.append( div2_2_1,div2_2_2)

            div2.append(div2_1,div2_2)
            let status=document.createElement('p')
            status.setAttribute('id','status')
            status.innerText=el.status;
            div.append(div1,div2,status);
             document.querySelector('.offerSlider').append(div);
        });
//     };
//     append();


let append2=(abc.data)

append2.forEach(el=>{
    let div=document.createElement('div');
    let p=document.createElement('a');
    p.innerText=el.teamInfo[0].shortname+" "+"vs"+" "+el.teamInfo[1].shortname;
    div.append(p)
    document.getElementById('divmatchscore').append(div)
})

fetch(`https://newsapi.org/v2/everything?q=cricket&from=2022-06-23&sortBy=publishedAt&apiKey=869e479d1c344a3783cf8de1c81ffa98`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res.articles)
    return append3(res.articles)
    
})
.catch((err)=>{
    console.log(err);
})

let append3=(data)=>{
    data.forEach(el=>{
        let div=document.createElement('div');
        div.setAttribute('class','newsmiddlediv')
        let img=document.createElement('img');
        img.src=el.urlToImage;
        let title=document.createElement('h3');
        title.innerText=el.title;
        let des=document.createElement('p');
        des.innerText=el.description;
        let publish=document.createElement('p');
        publish.innerText=el.publishedAt;
        div.append(img,title,des,publish)
        document.getElementById('middlenews').append(div);
    })
}

