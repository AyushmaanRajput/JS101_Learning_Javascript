let username="ayushmaan";
let password="raj123";

if(username=== "ayushmaan")//assume stored username was ayushmaan
{
  if(password==="raj1234"){//assume stored password was raj1234
    console.log("User has logged In");
  }else{
    console.log("Wrong password entered");
  }
}else{
  console.log("Wrong username entered");
}