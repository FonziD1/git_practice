const buttonLearn1 = document.getElementById("btn1");
const buttonLearn2 = document.getElementById("btn2");
const buttonLearn3 = document.getElementById("btn3");

const buttonWhy1 = document.getElementById("btnWhy1");
const buttonWhy2 = document.getElementById("btnWhy2");
const buttonWhy3 = document.getElementById("btnWhy3");

const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById('list3');
const list4 = document.getElementById("list4");
const list5 = document.getElementById("list5");
const list6 = document.getElementById("list6");

let div;
let div1;
let div2;
let div3;
let div4;
let div5;

buttonLearn1.addEventListener("click", () => {
    if(!div){
         div = document.createElement("div")

        div.innerHTML =
         `<p>The main idea was that i wanted to try and implement my Bachlors and Masters degree so i wanted to start a business and got some of my friends one was a programmer, the second one was a marketing specialist, the third one was well connected i was to manage the process and do the creative thinking.</p>
         <p>I learned that not all people can work together and if you do not have the clear path and goals set, nothing will be done. Do not go into business with people that don't have their hearth in it. You can hire employees that will do their job later on.</p>`;

         div.style.backgroundColor = 'lightgrey';
         div.style.color = 'black';
         div.style.padding = "15px";
         
         div.style.border = "1px solid black";
         div.style.borderRadius = "0 25px";
         div.style.margin = "10px";
         div.style.fontFamily =  "Playfair Display";
         div.style.fontWeight = "bold";

         list1.appendChild(div);
         buttonLearn1.innerText = "Remove"
    } else {
        list1.removeChild(div);
        div= null;
        buttonLearn1.innerText = "Learn More!"
    }
});



buttonLearn2.addEventListener("click", () => {

    if(!div1){

         div1 = document.createElement("div")
    
        div1.innerHTML =
         `<p>On this one me and a friend got some information about a free space on a spot in a bit central park that was free and that it was open to be rented for some amusement setup up. So we trusted this person too much and went on took out some money bought everything we needed, delivered kids cars and everything else. We got fucked and did't deploy because if we were not certified to be there the municipality of the park could confiscate everything and bust us with a pretty big fine. </p>
         <p>I learned that we should never skip steps and try to do things ahead of other important steps, like getting the stock and the credit without actually securing the spot. Never rely on someone else like this. Putting resourses, time, health depending on the work of someone else!</p>`;

         div1.style.backgroundColor = 'white';
         div1.style.color = 'black';
         div1.style.padding = "15px";
         div1.style.border = "1px solid black";
         div1.style.borderRadius = "0 25px";
         div1.style.margin = "10px";
     
         list2.appendChild(div1);
         buttonLearn2.innerText = "Remove"
    } else {
        list2.removeChild(div1);
        div1= null;
        buttonLearn2.innerText = "Learn More!"
    }
});

buttonLearn3.addEventListener("click", () => {

    if(!div2){

         div2 = document.createElement("div")
    
        div2.innerHTML =
         `<p>This was supposed to be a big project. I new that my main business was going under and i was trying to figure out what to do so i can start something new or find a way to finance my main business. The main idea was that we had a friend who bought an old Land Rover Defender 110 Pick Up truck, a very rare model of a car for himself to restore. Things did't go as well so we decided to create a company and restore and sell these cars but have an outlook for a special neesh - sand (dune )offroading. </p>
         <p>My biggest msitake was to go into this business trusting people and not having contracts or anything. Investing a large amount ot money, not having project deadlines and a lot of other missfortunes. </p>
         <p>I really have leaned not to trust people, to vest them out, to have contracts, to have deadlines, to work harder and not ever be depended like that on somebodys word!</p>`;

         div2.style.backgroundColor = 'white';
         div2.style.color = 'black';
         div2.style.padding = "15px";
         div2.style.border = "1px solid black";
         div2.style.borderRadius = "0 25px";
         div2.style.margin = "10px";
     
         list3.appendChild(div2);
         buttonLearn3.innerText = "Remove";
    } else {
        list3.removeChild(div2);
        div2= null;
        buttonLearn3.innerText = "Learn More!";
    }
});


buttonWhy1.addEventListener("click", () => {

    if(!div3){

         div3 = document.createElement("div")
    
        div3.innerHTML =
         `<p>My general reason for learning how to code is that i had a dream as a child to make computer games and have fun. Well now as i am old i not only want to learn this skill because it was a childs dream but i want to be able to make and create.</p>
         <p>Also i have a plan to create a business template to be able to create wealth with this skill and have freedom.</p>`;

         div3.style.backgroundColor = 'white';
         div3.style.color = 'black';
         div3.style.padding = "15px";
         div3.style.border = "1px solid black";
         div3.style.borderRadius = "0 25px";
         div3.style.margin = "10px";
     
     
         list4.appendChild(div3);
         buttonWhy1.innerText = "Remove"
    } else {
        list4.removeChild(div3);
        div3= null;
        buttonWhy1.innerText = "Why?"
    }
});


buttonWhy2.addEventListener("click", () => {

    if(!div4){

         div4 = document.createElement("div")
    
        div4.innerHTML =
         `<p>I need and have to learn how to be able to do dropshipping because it is a business that has a lot of promise to it, you can replace it fast and sell all over the world, you have a lot of possitives againt the negatives. You do not have to hold a lot of stock on site, you do not have to manufacture anything, but you do have to be good at finding a neesh, at marketing and at coding so your website can do better. You can create your own business and you can replicate this process for clients, using alredy created tools or create from the gorunds up. </p>
         <p>In the future if i am able to create this vision of mine and create wealth with it i need to know and have created the process so i can delegate the tasks to other people in the future.</p>`;

         div4.style.backgroundColor = 'white';
         div4.style.color = 'black';
         div4.style.padding = "15px";
         div4.style.border = "1px solid black";
         div4.style.borderRadius = "0 25px";
         div4.style.margin = "10px";
     
     
         list5.appendChild(div4);
         buttonWhy2.innerText = "Remove"
    } else {
        list5.removeChild(div4);
        div4= null;
        buttonWhy2.innerText = "Why?"
    }
});

buttonWhy3.addEventListener("click", () => {

    if(!div5){

         div5 = document.createElement("div")
    
        div5.innerHTML =
         `<p>Learning how to create and mount videos is also a very big part of nowadays marketing. To be able to create content for the various social platfoms is of the esence. SEO is slowly but shurely becoming a thing of the past with AI, normal business ads are becoming less and less fruitfull, wanting more cash resource for reach and offering lesser and lesser ROI. So basicaly we need to learn how to do the basics to be able to create a marketing funnel to our website to be successful. </p>
         <p>Also it is a nice skill to learn and have, makes you take a new look to life and hobby.</p>`;

         div5.style.backgroundColor = 'white';
         div5.style.color = 'black';
         div5.style.padding = "15px";
         div5.style.border = "1px solid black";
         div5.style.borderRadius = "0 25px";
         div5.style.margin = "10px";
     
     
         list6.appendChild(div5);
         buttonWhy3.innerText = "Remove"
    } else {
        list6.removeChild(div5);
        div5= null;
        buttonWhy3.innerText = "Why?"
    }
});
