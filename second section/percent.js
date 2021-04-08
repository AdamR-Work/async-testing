// long way without % 
const isEven = (num) => {
    let even = true;
   
    for (let i = 0; i < num; i++) {
      even = !even;
    }
   
    return even;
   };

// more effecient way 
const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    else {
      return false;
    }
  };


