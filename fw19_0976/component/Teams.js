let data=[{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172115/india.jpg",name:"India"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172141/ireland.jpg",name:"Ireland"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172116/pakistan.jpg",name:"Pakistan"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172117/australia.jpg",name:"Australia"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172119/sri-lanka.jpg",name:"Sri Lanka"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172120/bangladesh.jpg",name:"Bangladesh"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172123/england.jpg",name:"England"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172124/west-indies.jpg",name:"West Indies"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172126/south-africa.jpg",name:"South Africa"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172127/zimbabwe.jpg",name:"Zimbabwe"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172128/new-zealand.jpg",name:"New Zealand"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172188/afghanistan.jpg",name:"Afghanistan"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172577/italy.jpg",name:"Italy"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172579/botswana.jpg",name:"Botswana"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172592/belgium.jpg",name:"Belgium"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c188163/iran.jpg",name:"Iran"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172245/denmark.jpg",name:"Denmark"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172151/uganda.jpg",name:"Uganda"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172168/malaysia.jpg",name:"Malaysia"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172169/nepal.jpg",name:"Nepal"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172171/germany.jpg",name:"Germany"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172140/canada.jpg",name:"Canada"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172139/bermuda.jpg",name:"Bermuda"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172138/netherlands.jpg",name:"Netherlands"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172121/united-arab-emirates.jpg",name:"United Arab Emirates"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172122/hong-kong.jpg",name:"Hong Kong"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172129/kenya.jpg",name:"Kenya"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172130/united-states.jpg",name:"United States"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172137/scotland.jpg",name:"Scotland"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172391/fiji.jpg",name:"Fiji"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172336/papua-new-guinea.jpg",name:"Papua New Guinea"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172347/kuwait.jpg",name:"Kuwait"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172349/vanuatu.jpg",name:"Vanuata"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172353/oman.jpg",name:"Oman"},
{flag:"https://www.cricbuzz.com/a/img/v1/72x54/i1/c172352/jersey.jpg",name:"Jersey"},


];

let form=document.querySelector("#flags");
data.forEach(function(elem){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",elem.flag);
    let p=document.createElement("p");
    p.innerText=elem.name;
    div1.append(img,p);
    form.append(div1);
})


let data1=[{image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236155/sam-hain-stroked-5-sixes-and-1.jpg",news:"Hain ton outclasses Nottinghamshire in high-scorer"},
{image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236154/the-win-took-jersey-to-third-o.jpg",news:"Jersey break Uganda's perfect streak"},
{image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236153/i-was-disappointed-in-first.jpg",news:"Mehidy credits Taijul, Mominul for four-fer"},
{image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236152/alzarri-joseph-picked-up-two-w.jpg",news:"Brathwaite, Blackwood and Joseph put WI in strong position"},
{image:"https://www.cricbuzz.com/a/img/v1/100x77/i1/c236148/brathwaite-and-blackwood-share.jpg",news:"Bangladesh strike as West Indies stretch lead past 100"}



];
let form1=document.querySelector("#news1");
data1.forEach(function(elem){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",elem.image);
    let p=document.createElement("p");
    p.innerText=elem.news;
    div1.append(img,p);
    form1.append(div1);
})

