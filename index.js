const body = document.body
const heart = document.getElementById("heart")
document.getElementById("btn1").addEventListener("click", changeColor)
document.getElementById("btn2").addEventListener("click", changeColorHeart)



async function changeColor() {
   fetch('https://apis.scrimba.com/hexcolors/?count=1')
	.then(response => response.json())
	.then(data => {
        body.style.setProperty('background-color', data.colors[0].value)
    })
	.catch(err => console.error(err));
}
async function changeColorHeart() {
   fetch('https://apis.scrimba.com/hexcolors/?count=1')
	.then(response => response.json())
	.then(data => {
        heart.style.setProperty('--heart', data.colors[0].value)
    })
	.catch(err => console.error(err));
}
