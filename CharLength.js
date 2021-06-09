 const password = ['Test1234','H@llo22587','Hi1234','Testtest','Someone']
 
 for (let i=0 ; i<=password.length;i++){
     //console.log(`${password[i].length}`);

     if ( password[i].length >= 8 ){
        console.log('This password is 8 digit or longer');
           
    }
   else {
   console.log("This password is not 8 digit or longer. Please put more words into it")
   }
 }
 
