//!  121822.0830        VARIABLES

//!  121822.0826        FUNCTIONS

const init = function () {
  main();
};

window.onload = function () {
  init();
};

//!  123122.1839        MAIN
const main = function () {
  //!  10123.1609  variables
  //!  10123.1609 functions
  //!  10123.1609 classes

  class Human {
    constructor() {
      this.gender = "male";
    }
    printGender() {
      c(this.gender);
    }
  }

  class Person extends Human {
    
      super();
      this.name = "Max";
    }
    printMyName() {
      c(this.name);
    }
  }

  //!  10123.161 0  main body

  const person = new Person();
  person.printMyName();
  person.printGender();
};
//!  123122.1839  END
