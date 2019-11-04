var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
 selExercises.clear()
 for(i=0; i<= exercises.length -1; i++)
  selExercises.addItem(exercises[i]) 

}

let message = 'The two exercises you believe help you core are ' 
let exercises2 = ''
btnCore.onclick=function(){
  for (i=0; i<= selExercises.text.length-1; i++){
    exercises2 = selExercises.text[i] + ' and ' + exercises2 
}
lblCore.value = message + exercises2 
}




btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}





