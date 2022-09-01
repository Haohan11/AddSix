import Answers from '/Answers.js'

PrintAnswers(Answers) //expect output: [1,2,3,4,5,6] as many as your Answers' length

function PrintAnswers(answers) {
    answers.map(answer => {
        const array = [1, 2, 3, 4, 5]
        console.log(answer(array))
    })
}
