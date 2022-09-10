let main = document.querySelector("#quiz")
let button = document.querySelector("#startQuiz");
let image = document.querySelector("#aa");
let pka = document.querySelector("#pka");
let name_choices = [document.querySelector("#choice1"), document.querySelector("#choice2"),
document.querySelector("#choice3"), document.querySelector("#choice4")]
let pka_choices = [document.querySelector("#choice11"), document.querySelector("#choice22"),
document.querySelector("#choice33"), document.querySelector("#choice44")]


let conv = {
	"aa1": {
			"name": "Alanine",
			"one-code": "A",
			"three-code": "Ala",
			"pKa": 0,
			"pI": 6.11
	},
	"aa2": {
			"name": "Arginine",
			"one-code": "R",
			"three-code": "Arg",
			"pKa": 12.48,
			"pI": 10.76
	},
	"aa3": {
			"name": "Asparagine",
			"one-code": "N",
			"three-code": "Asn",
			"pKa": 0,
			"pI": 5.43
	},
	"aa4": {
			"name": "Aspartate/Aspartic Acid",
			"one-code": "D",
			"three-code": "Asp",
			"pKa": 3.90,
			"pI": 2.98
	},
	"aa5": {
			"name": "Cysteine",
			"one-code": "C",
			"three-code": "Cys",
			"pKa": 8.37,
			"pI": 5.15
	},
	"aa6": {
			"name": "Glutamate/Glutamic Acid",
			"one-code": "E",
			"three-code": "Glu",
			"pKa": 4.07,
			"pI": 3.08
	},
	"aa7": {
			"name": "Glutamine",
			"one-code": "Q",
			"three-code": "Gln",
			"pKa": 0,
			"pI": 5.65
	},
	"aa8": {
			"name": "Glycine",
			"one-code": "A",
			"three-code": "Ala",
			"pKa": 0,
			"pI": 6.06
	},
	"aa9": {
			"name": "Histidine",
			"one-code": "H",
			"three-code": "His",
			"pKa": 6.04,
			"pI": 7.64
	},
	"aa10": {
			"name": "Isoleucine",
			"one-code": "I",
			"three-code": "Ile",
			"pKa": 0,
			"pI": 6.04
	},
	"aa11": {
			"name": "Leucine",
			"one-code": "L",
			"three-code": "Leu",
			"pKa": 0,
			"pI": 6.04
	},
	"aa12": {
			"name": "Lysine",
			"one-code": "K",
			"three-code": "Lys",
			"pKa": 10.54,
			"pI": 9.47
	},
	"aa13": {
			"name": "Methionine",
			"one-code": "M",
			"three-code": "Met",
			"pKa": 0,
			"pI": 5.71
	},
	"aa14": {
			"name": "Phenylalanine",
			"one-code": "F",
			"three-code": "Phe",
			"pKa": 0,
			"pI": 5.76
	},
	"aa15": {
			"name": "Proline",
			"one-code": "P",
			"three-code": "Pro",
			"pKa": 0,
			"pI": 6.30
	},
	"aa16": {
			"name": "Serine",
			"one-code": "S",
			"three-code": "Ser",
			"pKa": 13,
			"pI": 5.70
	},
	"aa17": {
			"name": "Threonine",
			"one-code": "T",
			"three-code": "Thr",
			"pKa": 13,
			"pI": 5.60
	},
	"aa18": {
			"name": "Tryptophan",
			"one-code": "W",
			"three-code": "Trp",
			"pKa": 0,
			"pI": 5.88
	},
	"aa19": {
			"name": "Tyrosine",
			"one-code": "Y",
			"three-code": "Tyr",
			"pKa": 10.46,
			"pI": 5.63
	},
	"aa20": {
			"name": "Valine",
			"one-code": "V",
			"three-code": "Val",
			"pKa": 0,
			"pI": 6.02
	}
}

button.onclick = () => {
	runTimer();
};

let time, interval;

let stop_timer = () => {
	clearInterval(interval);
	console.log("done")
	runQuiz();
}

let runTimer = () => {
	time = Date.now();

	interval = setInterval(() => {
		main.innerText = "Starting quiz in..." + (4-Math.floor((Date.now()-time)/1000)).toString();

		if((Date.now() - time) > 4000) stop_timer();
	});
}

let runQuiz = () => {
console.log('test');
	let index = Math.floor(Math.random() * 20);
	button.innerText = "New Quiz";
	button.onclick = () => {
		runQuiz();
	};

	image.src = "./amino-acids/aa" + (index + 1).toString() + ".gif";

	main.innerText = "What is the name of this amino acid?";

	let correctName = conv["aa" + (index+1).toString()]["name"];
	let correctpKa = conv["aa" + (index+1).toString()]["pKa"];
	let correctpKi = conv["aa" + (index+1).toString()]["pKi"];
	let rand_num = Math.ceil(Math.random()*100);

	let a = Math.floor(Math.random()*4);
	let b = Math.floor(Math.random()*4);

	name_choices.forEach((e,i)=>e.innerText="abcd".split("")[i] + ") " + conv["aa"+ (((rand_num*i)%20)+1).toString()]["name"].toString())	
	name_choices.forEach(e => e.onclick = () => {if(e.innerText.includes(correctName))alert('RIGHT'); else alert("WRONG")})
	name_choices[a].innerText = "abcd".split("")[a] + ") " + correctName;

	pka.innerText = "What is the pKa of this amino acid's R group?";

	pka_choices.forEach((e,i) => e.innerText = ["a","b","c","d"][i] + ") R group pKa: " + conv["aa"+ (((rand_num*i)%20)+1).toString()]["pKa"].toString());
	pka_choices[b].innerText = "abcd".split("")[b] + ") R group pKa: " + correctpKa;
	pka_choices.forEach(e => e.onclick = () => {if(e.innerText.includes(correctpKa))alert('RIGHT'); else alert("WRONG")})
}