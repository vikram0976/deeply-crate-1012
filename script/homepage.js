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
let abc={}

    fetch("https://api.cricapi.com/v1/currentMatches?apikey=609e0eac-7be1-4af5-90de-c5d770179806&offset=0")
	.then(result => result.json())
	.then(result => {
		console.log(result.data)
        return append(result.data);
	})
	.catch(err => {
		console.log("An error occured. Please check your code",err);
	});

   
   // let append=(abc.data)
    //console.log(append)
let append= (data) => {
        console.log(data)
        data.forEach(el=> {
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
     };
  append();


// let append2=(abc.data)
 append= (data) => {
    //console.log(data)
    data.forEach(el=> {
    let div=document.createElement('div');
    let p=document.createElement('a');
    p.innerText=el.teamInfo[0].shortname+" "+"vs"+" "+el.teamInfo[1].shortname;
    div.append(p)
    document.getElementById('divmatchscore').append(div)
})
 }
 append();
// fetch(`https://newsapi.org/v2/everything?q=cricket&from=2022-06-23&sortBy=publishedAt&apiKey=869e479d1c344a3783cf8de1c81ffa98`)
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     console.log(res.articles)
//     return append3(res.articles)
    
// })
// .catch((err)=>{
//     console.log(err);
// })

// let append3=(data)=>{
//     data.forEach(el=>{
//         let div=document.createElement('div');
//         div.setAttribute('class','newsmiddlediv')
//         let img=document.createElement('img');
//         img.src=el.urlToImage;
//         let title=document.createElement('h3');
//         title.innerText=el.title;
//         let des=document.createElement('p');
//         des.innerText=el.description;
//         let publish=document.createElement('p');
//         publish.innerText=el.publishedAt;
//         div.append(img,title,des,publish)
//         document.getElementById('middlenews').append(div);
//     })
// }

