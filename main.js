
const navbarlinks =document.querySelectorAll(".nav-list a"); 

	$(document).ready(function(){
		$('.menu-toggler').on('click',function(){
			$(this).toggleClass('open');
			$('.top-nav').toggleClass('open');
		});

		$('.top-nav .nav-link').on('click',function(){
			$('.menu-toggler').removeClass('open');
			$('.top-nav').removeClass('open');
		});



		
	});



navbarlinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));


function navbarLinkClick(event){

	smoothScroll(event); //Call the "smoothscroll" function

	if(navbarMenu.classList.contains("open")){
		navbarToggler.click();
	}
}

//smooth-scrolling

function smoothScroll(event){
	event.preventDefault();
	const targetId = event.currentTarget.getAttribute("href");
	window.scrollTo({
		top: targetId==="#up" ? 0 : document.querySelector(targetId).offsetTop,
		behavior:"smooth"
	});
}


const up = document.querySelector("#up");

up.addEventListener("click",function(){
	$("html,body").animate({ scrollTop: 0}, "slow");


	});


	AOS.init({
		easing: 'ease',
		duration: 1800
	})



console.log('It works')

$(document).ready(function (){
	$('.submit').click(function (event) {
		
		console.log('Button')

		var name = $('.name').val()
		var email = $('.email').val()
		var service = $('.service').val()
		var message = $('.message').val()
		var statusElm = $('.status')
		statusElm.empty()

		if(name.length >= 1 )
		{
			statusElm.append('<div>Name is valid</div')
		}
		else{
			event.preventDefault()
			alert("Name is required")
			statusElm.append('<div>please kindly fill your name</div>')
		}

		if(email.includes('@') && email.includes('.'))
		{
			statusElm.append('<div>Email is valid</div')
		}
		else{
			event.preventDefault()
			alert("Email is required")
			statusElm.append('<div>Email is not valid</div')
		}

		if(service.length >= 1)
		{
			statusElm.append('<div>Service is valid</div')
		}
		else{
			event.preventDefault()
			alert("Service is required")
			statusElm.append('<div>Service is not valid</div')
		}

		if(message.length >= 1)
		{
			statusElm.append('<div>message is valid</div')
		}
		else{
			event.preventDefault()
			alert("Message is required")
			statusElm.append('<div>message is not valid</div')
		}

		

	})
})



let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll=function(){
	let progressHeight = (window.pageYOffset/totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}


function pop(){
	
	swal({
		title: "Comin Soon",
		text: "This Service is under Maintenance",
		icon:"warning",
		button:"Cancel",
	});
}


/* Start Theme */
console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

/* End Theme */




			












