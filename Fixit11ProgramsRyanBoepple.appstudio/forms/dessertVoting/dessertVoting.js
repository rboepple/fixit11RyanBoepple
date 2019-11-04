var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()  
    for (i=0; i<=dessertList.length - 1; i++)
     drpDesserts.addItem(dessertList[i])
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
}


drpDesserts.onclick=function(select){
    if (typeof(select) == "object")   
      return                    
    else {  
      lblAnswer.value = ('you chose' + drpDesserts.selection + ' great Chocie. ') 
      // the user picked something
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
    }
}

btnDecribeYou.onclick=function(){
  ChangeForm(describeYou)
}
