// JS Check
// console.log('it works');

// declaration of object
let data = [
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
];

// =======================================================================================
data.forEach(item => {
    // declaration of new DOM-elements and variables for each property of item and variables 
    const image = document.createElement("img");
    const question = document.createElement("p");
    const choice = document.createElement("div");
    const answer = document.createElement("div");
    const content = document.querySelector("#content");

    // center all elements in id 'content'
    content.setAttribute("align", "center");

    // create an headline h1
    const headline = document.createElement("h1");
    headline.innerHTML = 'Quiz';
    content.appendChild(headline);

    // set new div-element into the div-element 'content'
    content.appendChild(choice);

    // src = url of item and set it into the new div
    image.src = item.url;
    choice.appendChild(image);

    // set question into the new p-element question + styling of font-weight
    question.innerText = item.question;
    choice.style.fontSize = '20px';
    choice.style.fontWeight = '700';

    // set p-element into the div-element 
    choice.appendChild(question);

    item.choice.forEach(element => {
        const answerChoice = document.createElement('button');
        answerChoice.innerText = element;
        answer.appendChild(answerChoice);
        choice.appendChild(answer);

        // styling of answer buttons
        answerChoice.style.backgroundColor = 'black';
        answerChoice.style.color = '#FFFFFF';
        answerChoice.style.fontSize = '15px';
        answerChoice.style.margin = '30px 10px';
        answerChoice.style.padding = '20px';
        answerChoice.style.border = 'none';
        answerChoice.style.borderRadius = '10px';

        answerChoice.addEventListener('click', () => {
            // if answer is correct change background-color into green; if answer is not correct change background-color into red
            if (item.answer === element) {
                answerChoice.style.backgroundColor = 'green';
            } else {
                answerChoice.style.backgroundColor = 'red';
            };

            // remove background-color back into black after a time period
            setInterval(() => {
                remove = answerChoice.style.backgroundColor = 'black';
            }, 500);
        })
    })
});