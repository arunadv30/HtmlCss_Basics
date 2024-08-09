let validate_user = ()=>{
    //alert('Test case 123');
    let userName = document.getElementById('uname').value;
    let password = document.getElementById('psw').value;

    if(userName === '' ){
      //alert('Pls enter uname')
      document.getElementById('unMsg').innerHTML="Please Enter Uname";
    }
    // else{
    //   alert(userName)
      
    // }
    // return false;

  
    if( password === '' ){
      //alert('Pls enter uname')
      document.getElementById('upMsg').innerHTML="Please Enter password";
    }
    console.log({uname:userName, psw:password})
    
    return false;

}


