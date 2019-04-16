function callName(firstName, lastName) {
    const intro = "My name is ";
  
    function makeFullName() {
      return intro + firstName + " " + lastName;
    }
    return makeFullName();
  }
  
  console.log(callName("Crystal", "Martin"));

  callName = (firstName, lastName) => {
      const intro = `My name is `;
      makeFullName = () => `${intro} ${firstName} ${lastName}!`;
      return makeFullName();
  }
  console.log(callName("Slim", "Shady"))