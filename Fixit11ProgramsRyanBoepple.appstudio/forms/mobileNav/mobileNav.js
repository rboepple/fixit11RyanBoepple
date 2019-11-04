
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
    switch(s) {
case 'login':
  ChangeForm(loginCU)
  break
case 'favFoods':
  ChangeForm(favFoods)
  break
case 'dessertVoting':
  ChangeForm(dessertVoting) 
  break
case 'describeYou':
  ChangeForm(describeYou)
  break
case 'favExercises':
  ChangeForm(favExercises)
  break
  }
}
