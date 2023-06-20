


const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
btn.addEventListener('click',() =>{
  const request = new XMLHttpRequest()
  request.open("GET","data.json")
  request.setRequestHeader("Content-Type","application/json")
  request.send()

  request.addEventListener('load',() => {
    const data = JSON.parse(request.response)
    console.log(data);
  
  request.addEventListener('load',() => {
    const data = JSON.parse(request.response)
    console.log(data);
    data.forEach(item => {
      const div = document.createElement('div')
      div.innerHTML = `
        <h2>${item.parents}</h2>
        
      `
      wrapper.append(div)
    })
    //console.log(data);
  })
})

})

