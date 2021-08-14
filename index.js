const todoCont = document.querySelector('.todo-container');
const todo = document.querySelector('.todo');
const input = document.querySelector('input')
const add = document.querySelector('button');
const body = document.querySelector('body')
const imgSrc = 'delete.png';




//add task when add button is clicked
add.addEventListener('click', function() {
	if(!input.value) {
		alert('pease fill the field')
	} 
	else 
	{

		//create div
		const div = document.createElement('div');
		
		div.classList.add('todo')
		//append text
		const text = document.createTextNode(input.value);
		
		div.appendChild(text)
		//append img
		const img = document.createElement('img');
		img.src = imgSrc	
		
		div.appendChild(img)
		//append div to container
		todoCont.appendChild(div);

		img.addEventListener('click', (e) => {
			// console.log(e.target)
			e.target.parentNode.remove()

		})
		//call remove function
		// removeTodo();
	}
	input.value = ""
	
})

