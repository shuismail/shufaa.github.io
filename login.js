let contactinf = document.querySelector('#login');
contactinf.addEventListener('click',function(event){
event.preventDefault();
let nam = document.querySelector('#username').value;
let pass = document.querySelector('#password').value;


if (nam ===  "asha" && pass === "mm") {
   let details = JSON.parse(localStorage.getItem("details"))||[];
   let contactinfo = "";
   for(let a = 0;a < details.length;a++) {
		 contactinfo += "<h1>" + (a+1) + "</h1>";
		 contactinfo += "<p>Name:" + details[a].name + "</p>";
		 contactinfo +="<p>Address: "+ details[a].address + "</p>";
		 contactinfo += "<p>Email:" + details[a].email + "</p>";
		 contactinfo += "<p>Comments:" + details[a].comments + "</p>";
	 };
	
	 document.getElementById("info").innerHTML=contactinfo;
}
else {
 alert("invalid username or password");
};

//  box-form.reset();

});

