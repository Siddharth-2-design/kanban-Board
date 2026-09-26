const add_button = document.querySelector("#btn");
const box1= document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

add_button.addEventListener("click", () => {
    let task = document.createElement("div");
    task.classList.add("addtask");
    box1.appendChild(task);
    updatecount();
    

    let head = prompt("enter task");
    let taskdesc = prompt("enter task desc")

    let delbtn = document.createElement("div");
    let headtext = document.createElement("h2");
    let desctext = document.createElement("p");

    task.draggable = true;
 
    task.addEventListener("dragstart", ()=>{
        task.classList.add("dragging");

    })
    task.addEventListener("dragend", ()=> {
        task.classList.remove("dragging")

            })

    headtext.classList.add("headtext");
    desctext.classList.add("desctext");

    task.appendChild(headtext);
    task.appendChild(desctext);

    headtext.innerText = head;
    desctext.innerText = taskdesc;

    delbtn.classList.add("delbtn");
    task.appendChild(delbtn);

    delbtn.innerText = "Delete";    
    delbtn.addEventListener("click", () => {
        task.remove();
        updatecount();
    })
})

let boxtask = document.querySelectorAll(".box")
boxtask.forEach((box) => {



    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    })
    box.addEventListener("drop" , (e) => {
        e.preventDefault();

        let droptask = document.querySelector(".dragging");
        if(droptask){
        box.appendChild(droptask)
        updatecount();
    }

    })


})

const counts = document.querySelectorAll(".count");
const count1 = counts[0];
const count2 = counts[1];
const count3 = counts[2];

function updatecount(){
    count1.innerText = box1.querySelectorAll(".addtask").length;
    count2.innerText = box2.querySelectorAll(".addtask").length;
    count3.innerText = box3.querySelectorAll(".addtask").length;
}













