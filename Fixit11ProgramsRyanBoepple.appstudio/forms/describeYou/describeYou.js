



btnFavExercises.onclick=function(){
  ChangeForm(favExercises) 
}



btnsubmit.onclick=function(){
  if (rdoPersonType.value == 0)
  lblResponse.value = ('You are an optimistic person.') 
  if (rdoPersonType.value == 1)
  lblResponse.value = ('You are a pessimstic person.') 
  if (rdoPersonType.value == 2)
  lblResponse.value = ('You are a trusting person.')
  if (rdoPersonType.value == 3)
  lblResponse.value = ('You are a envious person.')
    
}
