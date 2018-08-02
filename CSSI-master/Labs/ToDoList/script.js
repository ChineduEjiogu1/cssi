function init()
{
	let btn = document.querySelector('#addBtn');
	btn.addEventListener('click',addItem);
}

function createItem(text)
{
	let btn = document.createElement('button');
	let item = document.createElement('li');
	item.innerHTML = text.toUpperCase();
	btn.innerHTML = "Completed";
	btn.addEventListener('click',()=>{item.style.textDecoration="line-through";});
	item.appendChild(btn);
	return item;
}

function addItem()
{
	let entry = document.getElementById('newItem'); 
	if(entry.value !== '')
	{
		let list = document.getElementById('listing');
		let item = createItem(entry.value);
		entry.value = "";
		list.appendChild(item);
	}
}