let input1 = document.querySelector(".question1");
let input2 = document.querySelector(".question2");
let button = document.querySelector("button");
let result = document.querySelector(".result");
let result2 = document.querySelector(".result2");
button.onclick = function() {
        let q1 = document.querySelector(".question1").value;
        let q2 = document.querySelector(".question2").value;
        console.log(q1);
        console.log(q1);
        console.log(q2);
        if (q1 < 10 && q2 === "World cup ") {
            document.querySelector(".result").innerHTML = "How many wins do you want in the world cup?" + q1 + " Who do you prefer Europe or Central America?? " + q2 + ". This means who do you want to win the world cup with?";
        } else if (q1 > 10 && q2 !== "World cup") {
            document.querySelector(".result").innerHTML = "How many wins do you want in the world cup? " + q1 + " Who do you prefer Europe or Central America?? " + q2 + ". This What team do you want to play with?.";
        } else if (q1 > 10 && q2 !== "World Cup") {
            document.querySelector(".result").innerHTML = "You want to live for " + q1 + " years and you want to live in the" + q2 + ". This means you are wind dragon.";
        } else if (q1 > 10 && q2 !== "sky") {
            document.querySelector(".result").innerHTML = "You want to live for " + q1 + " years and you want to live in the" + q2 + ". This means you are lightning dragon.";
        }
};