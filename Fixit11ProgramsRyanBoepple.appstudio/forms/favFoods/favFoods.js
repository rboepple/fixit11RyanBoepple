let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
  listFood.clear()
  for(i=0;i<= goodFoods.length -1;i++)
    listFood.addItem(goodFoods[i])
}

listFood.onclick=function(choice){  // notice the 'choice' parameter
  if (typeof(choice) == "object")   // user clicked the control
    return
    
  // otherwise get user selection (second click) which is the index 
  // of the item chosen
  NSB.MsgBox("you picked " + goodFoods[choice] + " great chocie.")
  
btnProced.onclick=function(){
  ChangeForm(dessertVoting)
  }
}