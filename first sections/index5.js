const robot = {
    name: "rumba",
    clean() {
      alert(`${this.name} is now cleaning`);
    }
  };
  
  setTimeout(robot.clean, 0); //=>  is now cleaning