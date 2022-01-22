import quiz from "./quiz.js"

const questions = document.getElementById("questions")
const choice = document.querySelectorAll("a")

const bar = document.getElementById("bar")

const button = document.getElementById("button")



let q = 0
let answer = ""
let dogru = 0

start();


//--------------------------------------------------------



function start() {


    document.getElementById("quesNum").innerHTML = q + 1

    bar.innerHTML = ` <div class="progress-bar bg-info" role="progressbar" style="width: ${((q+1)/quiz.length)*100}%" aria-valuenow="${(q+1)/quiz.length}"
aria-valuemin="0" aria-valuemax="100">${q+1}&nbspof&nbsp${quiz.length}</div>`

    console.log(quiz[q].answer)

    //Soruyu ekrana yazdırma
    questions.innerHTML = quiz[q].question

    //Şıkları ekana yazdırma
    for (let i = 0; i < choice.length; i++) {

        choice[i].innerHTML = quiz[q].choice[i]


        choice[i].style.visibility = "visible";

        // Boş şıkları gizleme
        if (choice[i].innerHTML == "" || choice[i].innerHTML == "undefined") {

            choice[i].style.visibility = "hidden";

        }
    }
}


//--------------------------------------------------------



for (let i = 0; i < choice.length; i++) {
    choice[i].onclick = () => {

        if (q < quiz.length-1) {

            answer = choice[i].innerHTML
            console.log(answer)

            if (answer == quiz[q].answer) {
                dogru++
                console.log("içerde doğru");
                console.log(dogru)
            }

            q++
            start()

        } else {


            answer = choice[i].innerHTML
            if (answer == quiz[q].answer) {
                dogru++
                console.log("içerde doğru");
                console.log(dogru)
            }


            // dogru > 0 ? dogru++ : dogru = 0


            document.querySelector(".card-title").innerHTML = `<p class="fs-1">Quizi Tamamladınız</p>`
            button.innerHTML = `<div class="text-center my-5"><div class="spinner-grow" role="status"></div></div>`

            setTimeout(() => {

                button.innerHTML = `
            <div class="fs-1 my-4"><span class="text-success">${dogru}</span> Doğru - <span class="text-danger">${quiz.length-dogru}</span> Yanlış</span>
            <hr><div class="progress my-4" style="background-color: #CA4242;">
            <div class="progress-bar bg-success" role="progressbar" style="width: ${(dogru/quiz.length)*100}%;" aria-valuenow="${dogru/quiz.length}" aria-valuemin="0" aria-valuemax="100">${Math.floor((dogru/quiz.length)*100)}%</div>
            </div>`

            }, 1500);

        }
    }
}

//--------------------------------------------------------



// let line = [0, 1, 2, 3]

// function random() {

//     random = Math.floor(Math.random() * 4)

//     return line.slice(random, random + 1).join("")

// }

// console.log(line)
// console.log(random())


//--------------------------------------------------------