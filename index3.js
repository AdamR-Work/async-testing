class Tiger {
    constructor() {
      this.noise = 'roar';
    }
    sound() {
      console.log(this.noise)
    }
  }
  
  const simba = new Tiger();
  simba.sound(); //=> "roar"