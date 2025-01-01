const Crtans = ["D" , "B" , "C" , "B" , "D"]

let questions = document.querySelectorAll('.question')
const quizform = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

quizform.addEventListener('submit' , function(e){
    e.preventDefault()

   const userAns = [quizform.q1.value ,quizform.q2.value ,quizform.q3.value ,quizform.q4.value ,quizform.q5.value]
   let score = 0
   userAns.forEach(function(ans , index){
    if(ans === Crtans[index]){
        score = score +1
        questions[index].classList.add('correct')
        
    }
    else{
        console.log('wrong')
        questions[index].classList.add('wrong')
    }
   })
   result.classList.remove('hide')
   result.querySelector('.score').innerText = `Your Score is ${score}/${Crtans.length}!`
});
