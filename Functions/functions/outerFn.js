function outer(){
  console.log('GM')
  function inner(){
    console.log('GN')  
  }
  inner();
}
outer();
