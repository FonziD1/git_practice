const buttonLearn1 = document.getElementById("btn1");
const buttonLearn2 = document.getElementById("btn2");
const buttonLearn3 = document.getElementById("btn3");

const buttonWhy1 = document.getElementById("btnWhy1");
const buttonWhy2 = document.getElementById("btnWhy2");
const buttonWhy3 = document.getElementById("btnWhy3");

const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById('list3');


let div;

buttonLearn1.addEventListener("click", () => {
    if(!div){
         div = document.createElement("div")

        div.innerHTML =
         `<p>The main idea was that i wanted to try and implement my Bachlors and Masters degree so i wanted to start a business and got some of my friends one was a programmer, the second one was a marketing specialist, the third one was well connected i was to manage the process and do the creative thinking.</p>
         <p>I learned that not all people can work together and if you do not have the clear path and goals set, nothing will be done. Do not go into business with people that don't have their hearth in it. You can hire employees that will do their job later on.</p>`;

         div.style.backgroundColor = 'white';
         div.style.color = 'black';
         div.style.padding = "5px";
         div.style.border = "1px solid black";

         list1.appendChild(div);
         buttonLearn1.innerText = "Remove"
    } else {
        list1.removeChild(div);
        div= null;
        buttonLearn1.innerText = "Learn More!"
    }
});

let div1;

buttonLearn2.addEventListener("click", () => {

    if(!div1){

         div1 = document.createElement("div")
    
        div1.innerHTML =
         `<p>On this one me and a friend got some information about a free space on a spot in a bit central park that was free and that it was open to be rented for some amusement setup up. So we trusted this person too much and went on took out some money bought everything we needed, delivered kids cars and everything else. We got fucked and did't deploy because if we were not certified to be there the municipality of the park could confiscate everything and bust us with a pretty big fine. </p>
         <p>I learned that we should never skip steps and try to do things ahead of other important steps, like getting the stock and the credit without actually securing the spot. Never rely on someone else like this. Putting resourses, time, health depending on the work of someone else!</p>`;

         div1.style.backgroundColor = 'white';
         div1.style.color = 'black';
         div1.style.padding = "5px";
         div1.style.border = "1px solid black";
     
         list2.appendChild(div1);
         buttonLearn2.innerText = "Remove"
    } else {
        list2.removeChild(div1);
        div1= null;
        buttonLearn2.innerText = "Learn More!"
    }
});

let div2;

buttonLearn3.addEventListener("click", () => {

    if(!div2){

         div2 = document.createElement("div")
    
        div2.innerHTML =
         `<p>Here we got with my partner in my store business together with two more persons to create a company where we bougth some classic Land Rover Defenders fix them, restore them to glory and on top of that make a lot of betterments to them so they can take a lot of offroad journeys. Heavy offroading for fun.</p>
         <p>Never ever get into business without getting everything black on white, getting contracts and making people be invested if not they should know that there will eb heav reprecutions in legal ways. Protect yourself from people's ill intent protect oyurselft and your money!</p>`;

         div2.style.backgroundColor = 'white';
         div2.style.color = 'black';
         div2.style.padding = "5px";
         div2.style.border = "1px solid black";
     
         list3.appendChild(div2);
         buttonLearn3.innerText = "Remove"
    } else {
        list3.removeChild(div2);
        div2= null;
        buttonLearn3.innerText = "Learn More!"
    }
});
