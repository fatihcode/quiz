import quiz from "./quiz.js"

const questions = document.getElementById("questions")
const choice = document.querySelectorAll("button")
const select = document.querySelectorAll(".select")

const bar = document.getElementById("bar")

const button = document.getElementById("button")

const card = document.getElementById("card")


card.className = "card"

let q = 0
let answer = ""
let dogru = 0

start();


//--------------------------------------------------------



function start() {


    document.getElementById("quesNum").innerHTML = (q + 1) + ")"

    bar.innerHTML = ` <div class="progress-bar bg-info" role="progressbar" style="width: ${((q+1)/quiz.length)*100}%" aria-valuenow="${(q+1)/quiz.length}"
aria-valuemin="0" aria-valuemax="100">${q+1}&nbspof&nbsp${quiz.length}</div>`;

    //Soruyu ekrana yazdırma
    questions.innerHTML = quiz[q].question;

    //Şıkları ekana yazdırma
    for (let i = 0; i < choice.length; i++) {

        choice[i].innerHTML = quiz[q].choice[i];
        select[i].innerHTML = quiz[q].select[i];


        choice[i].style.visibility = "visible";
        select[i].style.visibility = "visible";

        // Boş şıkları gizleme
        if (choice[i].innerHTML == "" || choice[i].innerHTML == "undefined") {

            choice[i].style.visibility = "hidden";
            select[i].style.visibility = "hidden";

        }
    }
}


//--------------------------------------------------------



for (let i = 0; i < choice.length; i++) {
    choice[i].onclick = () => {

        if (q < quiz.length - 1) {

            answer = choice[i].innerHTML;
            answer == quiz[q].answer ? dogru++ : ""

            q++
            start()

        } else {


            answer = choice[i].innerHTML
            answer == quiz[q].answer ? dogru++ : ""

            card.className = "card text-center"

            document.querySelector(".card-title").innerHTML = `<p class="fs-1">Quizi Tamamladınız</p>`
            button.innerHTML = `<div class="text-center my-5"><div class="spinner-grow" role="status"></div></div>`;


            setTimeout(() => {

                button.innerHTML = `
            <div class="fs-1 my-4"><span class="text-success">${dogru}</span> Doğru - <span class="text-danger">${quiz.length-dogru}</span> Yanlış</span>
            <hr><div class="progress my-4" style="background-color: #CA4242;">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${(dogru/quiz.length)*100}%;" 
            aria-valuenow="${dogru/quiz.length}" aria-valuemin="0" aria-valuemax="100">${Math.floor((dogru/quiz.length)*100)}%</div></div>
            <a class="btn btn-outline-primary m-2" id="try" onclick="location.reload(true);">Yeniden Dene</a>`;
            }, 1500);
        }
    }
};