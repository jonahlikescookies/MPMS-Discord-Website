function opentab(tabname){
  const tabs = document.getElementsById('tabcont');
  for(let i = 0; i < tabs.length; i++){
    tabs[i].style.display = "none";
  }
  document.getElementById(tabname).style.display = "block";
}
