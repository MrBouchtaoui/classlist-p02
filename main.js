const div = document.querySelector(".box");
const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

addBtn.addEventListener("click", function () {
	div.classList.add("bg-aqua");
	div.classList.add("border-red");
});

removeBtn.addEventListener("click", function () {
	div.classList.remove("bg-aqua");
});

setInterval(function () {
	div.classList.toggle("bg-aqua");
}, 2000);

const players = [
	{
		firstName: "Ruud",
		lastName: "Gullit",
		hobby: "Voetballen",
	},
	{
		firstName: "Zinedine",
		lastName: "Zidane",
		hobby: "Voetballen",
	},
];
const container = document.querySelector(".container");
for (let i = 0; i < players.length; i++) {
	const element = players[i];
	container.innerHTML += `
	<div class="card">
		<li>Firstname: ${element.firstName}</li>
		<li>Lastname: ${element.lastName}</li>
		<li>Hobby: ${element.hobby}</li>
	</div>`;
}
