debugger;
const responseFromPrompt = prompt("Enter your name");
if (responseFromPrompt == null) {
  console.error("No response received!!!");
} else {
  const responseFromConfirm = confirm("Is " + responseFromPrompt + " your name?");
  if (responseFromConfirm) {
    console.info('Cool name!!!');
  } else {
    console.warn('OOPS, that does not make sense');
  }
}

if (responseFromPrompt) {
    console.log('response from prompt from if is:', responseFromPrompt);
    
} else {
    console.log('response from prompt from else is:', responseFromPrompt);
    
}

// psuedo code
/*
1. ask the user the name
2. if we get a null then console error saying no response received
3. else we confirm with the user as what they entered is what they meant
4. if confirmed console the name
5. else console that it does not make sense
*/