let personDetail = [
{	
	id: 1,
	name: "Ali Zafar",
	number: '1236875414' ,
	email: 'alizafar@gmail.com',
	imgURL: "ali-zafar.jpg",
	lastMsgStatus: "sent",
	lastMsg: "blah blah blah blah blah blah blah",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 2,
	name: "Ahsan Khan",
	number: "147258369",
	email: "ahsankhan@gmail.com",
	imgURL: "ahsan.jpg",
	lastMsgStatus: "seen",
	lastMsg: "blah blah blah blah ",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 3,
	name: "Danish Taimoor",
	number: "9682673899",
	email: "danishtaimoor@gmail.com",
	imgURL: "danish.jpg",
	lastMsgStatus: "not sent",
	lastMsg: "blah blah blah blah blah blah blah ---",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{	
	id: 4,
	name: "Faisal Qureshi",
	number: '1236875414' ,
	email: "faisalqureshi@gmail.com",
	imgURL: "faisal.jpeg",
	lastMsgStatus: "sent",
	lastMsg: "blah blah blah blah blah blah blah ---",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 5,
	name: "Farhan Saeed",
	number: "147258369",
	email: "farhansaeed@gmail.com",
	imgURL: "farhan.jpg",
	lastMsgStatus: "seen",
	lastMsg: "blah blah blah blah blah blah blah ---",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 6,
	name: "Fawad Khan",
	number: "377258369",
	email: "fawadkhan@gmail.com",
	imgURL: "fawad.jpg",
	lastMsgStatus: "not sent",
	lastMsg: "blah blah blah blah blah blah blah ---",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 7,
	name: "Muneeb Ahmed",
	number: "936258369",
	email: "muneebahmed@gamil.com",
	imgURL: "muneeb.jpg",
	lastMsgStatus: "sent",
	lastMsg: "blah blah blah blah blah blah blah ---",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 8,
	name: "Fahad Mustafa",
	number: "456258369",
	email: "fahadmustafa@gamil.com",
	imgURL: "fahad.JPG",
	lastMsgStatus: "seen",
	lastMsg: "blah blah blah blah blah ",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
},

{
	id: 8,
	name: "Imran Abbas",
	number: "912658369",
	email: "imranabbas@gamil.com",
	imgURL: "imran.jpg",
	lastMsgStatus: "not seen",
	lastMsg: "blah blah blah blah blah ",
	icon1: `<i class="fas fa-phone" ></i>`,
	icon2: `<i class="far fa-envelope" id="mail"></i>`
}

];



function initialize() {
	let personGroupEl = document.querySelector(".name-sec");
	for(let i = 0; i < personDetail.length; i ++){

		let icon;

		if (personDetail[i].lastMsgStatus === "seen") {
			icon = "check-double";
		} else if(personDetail[i].lastMsgStatus === "sent"){
			icon = "check";
		} else{
			icon = "clock";
		}
		
		personGroupEl.innerHTML += `
		<section class="person-item" onclick="changePerson(${i})">
			<div class="person-img" style="background-image: url(images/${personDetail[i].imgURL})" ></div>
				<div class="after-person-img">
					<div class="content-center">
						<h4 class="name">${personDetail[i].name}</h4>
						<div class="time">Yesterday</div>
					</div>
					<p class="msg"><i class="fas fa-${icon}"></i>blah blah blah blah blah blah blah ---</p>
				</div>
		</section>
		`
	}
	// changePerson(0);
	


}

function changePerson(personIndex){
	document.querySelector("#person-name").innerHTML = personDetail[personIndex].name;
	document.querySelector("#person-number, #phone").innerHTML = personDetail[personIndex].icon1 + personDetail[personIndex].number;
	document.querySelector("#person-img").style["background-image"] = `url(images/${personDetail[personIndex].imgURL})`;
	document.querySelector("#person-email, #mail").innerHTML = personDetail[personIndex].icon2 + personDetail[personIndex].email;
	document.querySelector("#last-msg").innerHTML = personDetail[personIndex].lastMsg;
	document.querySelector("#remove").style.display = "none";
	
	
	
	
}
