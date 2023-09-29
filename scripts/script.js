let form = document.querySelector(".todoask")
let inp = form.querySelector("#todo")
let container = document.querySelector('.box')

let todos = []


form.onsubmit = (e) => {
    e.preventDefault();

    let todo = {
        id: Math.random(),
        title: inp.value,
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
    }


    todos.push(todo)
   
    reload(todos)
}


reload(todos)

function reload(arr) {
    container.innerHTML = ""

    for (let todo of arr) {
        // a
        let item = document.createElement("div")
        let wrapper = document.createElement("div")
        let info = document.createElement("div")
        let title_text = document.createElement("span")
        let time = document.createElement("span")
        let clsButton = document.createElement("button")
        let img = document.createElement("img")

        // b
        item.classList.add("item")
        wrapper.classList.add("wrapper")
        info.classList.add("info")
        title_text.classList.add("title")
        time.classList.add("time")
        clsButton.classList.add("del")

        img.src = "img/cls.svg"
        img.alt = "cls"

        title_text.textContent = todo.title
        time.innerHTML = todo.time

        // c
        item.append(wrapper)
        wrapper.append(info, clsButton)
        info.append(title_text, time)
        clsButton.append(img)

        container.append(item)
           
         let modal = document.querySelector(".modal")
        item.ondblclick = () => {
             modal.style.display = "block"
             
                let prmt = prompt("shto vi xotite izmenit ?")
                title_text.textContent = prmt
                 todo.title = prmt              
                
             
             
             let close = document.querySelector(".close")

             close.onclick =() => {
                modal.style.display = "none"
             }

             

        
            }





























        title_text.onclick = () => {
            if (todo.isDone === false) {
                title_text.style.textDecoration = "line-through"
                todo.isDone = true
            } else if (todo.isDone === true) {
                title_text.style.textDecoration = "none"
                todo.isDone = false
            }
            
                    // d

                    
           

        }

    }

}





   





