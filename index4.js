const chiller = (state) => ({
    chill: () => console.log(`Ooh, I'm at ${state.temp} degrees`) 
  })
  
  const caller = (state) => ({
    call: () => console.log(`I am calling ${state.number}`)
  })
  
  const browserInternet = (state) => ({
    browse: () => state.url
  })
  
  caller({number: '411'}).call() //=> I am calling 411


const chillinator = (temp) => {
    let state = {
      temp,
      number: 311,
      url: 'google.com'
    }
    return { ...chiller(state), ...caller(state), ...browserInternet(state) }
  }
  chillinator(42).browse();
//   console.log(chiller);