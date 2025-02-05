// Your code here

// True/False questions are from https://www.classpoint.io/blog/true-or-false-questions-for-kids

var questionsArr = [
    {
        question: "The ocean is salty.",
        answer: true,
    },
    {
        question: "Penguins can fly.",
        answer: false,
    },
    {
        question: "The Earth is round.",
        answer: true,
    },
    {
        question: "Seeds grow into plants",
        answer: true,
    },
    {
        question: "All insects have six legs.",
        answer: true,
    },
];

function runQuiz() {
    var score = 0;
    for (let i = 0; i < questionsArr.length; i++) {
        if (
            window.confirm(questionsArr[i].question) == questionsArr[i].answer
        ) {
            score += 1;
        }
    }
    score = Math.round((score / questionsArr.length) * 100);
    window.alert("Your score is " + score + "%");
}
