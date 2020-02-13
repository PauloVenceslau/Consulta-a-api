function getDog(){
	var Tex = document.getElementById("myInput");
	var res;
	var selectedDog=$(".dog-selector option:selected").val();
	dogURL=selectedDog.replace(/-/g,'/');
	$.getJSON("https://dog.ceo/api/breed/"+dogURL+"/images/random",function(result){
	dogURL=selectedDog.replace(/-/g,' ');
	res = dogURL.split(" ");
		if(res.length < 2){
			Tex.value = res[0];
		}else{
		Tex.value = res[1]+" "+res[0];
		}
	});
}

function loadDogs(){
	var Tex = document.getElementById("te");
	var fruits = [];
	var fruits2 = [];
		$.getJSON("https://dog.ceo/api/breeds/list/all",function(result){
			var breeds = result.message;
			firstDog = Object.keys(breeds)[0];
			$.each(breeds,function(dog,breed){
				if(breeds[dog].length>=1){
					for(i=0;i<breeds[dog].length;i++){
						$(".dog-selector").append('<option value="'+dog+'-'+breeds[dog][i]+'">'+breeds[dog][i]+' '+dog+'</option>');
						fruits.push(dog+' '+breeds[dog][i]); 
						fruits2.push(breeds[dog][i]+' '+dog); 
						autoComplete(fruits,fruits2);
						}
				}
				else if(breeds[dog].length<1){
					$(".dog-selector").append('<option value="'+dog+'">'+dog+'</option>');
					fruits.push(dog);
					fruits2.push(dog);
					autoComplete(fruits,fruits2);
					}
		});

	});
}

function autoComplete(arr,arr2){
	$( function() {
		$( "#myInput" ).autocomplete({
		source: arr2
		});
	});
}

function altCor(i){
	var cor = document.getElementsByClassName("cor");

		if(i === 0){
			cor[0].style.color = "black";
			localStorage.setItem("volatioC", "black");
		}else if(i === 1){
			cor[0].style.color = "#ff0000";
			localStorage.setItem("volatioC", "#ff0000");
		}else if(i === 2){
			cor[0].style.color = "#0000ff";
			localStorage.setItem("volatioC", "#0000ff");
		}else if(i === 3){
			cor[0].style.color = "#ffffff";
			localStorage.setItem("volatioC", "#ffffff");
		}else if(i === 4){
			cor[0].style.color = "#d3d3d3";
			localStorage.setItem("volatioC",  "#d3d3d3");
		}else if(i === 5){
			cor[0].style.color = "#00ff00";
			localStorage.setItem("volatioC", "#00ff00");
		}
}
function altFonte(i){
	var fonte = document.getElementsByClassName("fonte");

	if(i === 0){
			fonte[0].style.color = "Arial";
			localStorage.setItem("volatioF", "Arial");
		}else if(i === 1){
			fonte[0].style.fontFamily = "'Sriracha', cursive";
			localStorage.setItem("volatioF", "'Sriracha', cursive");
		}else if(i === 2){
			fonte[0].style.fontFamily = "'Lemonada', cursive";
			localStorage.setItem("volatioF", "'Lemonada', cursive");
		}else if(i === 3){
			fonte[0].style.fontFamily = "'Roboto', sans-serif";
			localStorage.setItem("volatioF", "'Roboto', sans-serif");
		}else if(i === 4){
			fonte[0].style.fontFamily = "'Odibee Sans', cursive";
			localStorage.setItem("volatioF", "'Odibee Sans', cursive");
		}else if(i === 5){
			fonte[0].style.fontFamily = "'Raleway', sans-serif";
			localStorage.setItem("volatioF", "'Raleway', sans-serif");
		}
}
function AssignValues(){
	
	var momentoAtual = new Date();	
			var vhora = momentoAtual.getHours();
			var vminuto = momentoAtual.getMinutes();
			var vsegundo = momentoAtual.getSeconds();
			
			if (vdia < 10){ vdia = "0" + vdia;}
			if (vmes < 10){ vmes = "0" + vmes;}
			if (vhora < 10){ vhora = "0" + vhora;}
			if (vminuto < 10){ vminuto = "0" + vminuto;}
			if (vsegundo < 10){ vsegundo = "0" + vsegundo;}
			
			var vdia = momentoAtual.getDate();
			var vmes = momentoAtual.getMonth() + 1;
			var vano = momentoAtual.getFullYear();
			
			dataFormat = vdia + " / " + vmes + " / " + vano;
			horaFormat = vhora + " : " + vminuto + " : " + vsegundo;
			
			localStorage.setItem("data",dataFormat);
			localStorage.setItem("hora",horaFormat);
}
function Salvar(){

	var Tex = document.getElementById("myInput");
	var Cor = document.getElementsByClassName("cor");
	var Fonte = document.getElementsByClassName("fonte");
	var Img = document.getElementById("img");

	if(Tex.value == localStorage.getItem("raca")){
		alert("Aperte o botão 'Gerar' para uma nova pesquisa por imagem para o cachoro da raça: "+localStorage.getItem("raca"));
		AssignValues();
		localStorage.setItem("raca", 		Tex.value);
		localStorage.setItem("racaCor", 	Cor[0].style.color);
		localStorage.setItem("racaFonte", 	Fonte[0].style.fontFamily);
		localStorage.setItem("racaImg", 	Img.src);
		
		alert("Dados do cachoro raça " +localStorage.getItem("raca")+" foram salvos");
	}else{
		AssignValues();
		localStorage.setItem("raca", 		Tex.value);
		localStorage.setItem("racaCor", 	Cor[0].style.color);
		localStorage.setItem("racaFonte", 	Fonte[0].style.fontFamily);
		localStorage.setItem("racaImg", 	Img.src);
		alert("Dados do cachoro raça " +localStorage.getItem("raca")+" foram salvos");
	}
}

$(document).ready(function(){
	
	var Tex = document.getElementById("myInput");
	var Button = document.getElementById(".botao");
	var Cor = document.getElementsByClassName("cor");
	var Fonte = document.getElementsByClassName("fonte");
	var Salva = document.getElementsByClassName("salva");
	
	$("#myBtn").click(function(){
	var str = $("#myInput").val();
	var res = str.split(" ");
		if(res.length < 2 ){
		$.getJSON("https://dog.ceo/api/breed/"+res[0]+"/images/random",function(result){
		document.getElementById("te").innerHTML = "<p class ='fonte cor'>"+res[0]+"</p>";
		Cor[0].style.color = localStorage.getItem("volatioC");
		Fonte[0].style.fontFamily = localStorage.getItem("volatioF");
		$(".demo-image").html("<img id='img'  src='"+result.message+"'>");
			});
			}else{
			document.getElementById("te").innerHTML = "<p class ='fonte cor'>"+res[0]+" "+res[1]+"</p>";
			Cor[0].style.color = localStorage.getItem("volatioC");
			Fonte[0].style.fontFamily = localStorage.getItem("volatioF");
			$.getJSON("https://dog.ceo/api/breed/"+res[1]+"/"+res[0]+"/images/random",function(result){
			$(".demo-image").html("<img id='img'  src='"+result.message+"'>");
			});
		}
		
	});
});

$(".dog-selector").change(function(){
	$(".dog-selector option:selected").each(function(){getDog();
	});	
});
$(".get-dog").click(function(){getDog();});
$(document).ready(function(){
	if(localStorage.length < 1){
	loadDogs();
		}else{
			loadDogs();
			var Tex = document.getElementById("te");
			var Inp = document.getElementById("myInput");
			Inp.value = localStorage.getItem("raca");
			
			var Cor = document.getElementsByClassName("cor");
			var Fonte = document.getElementsByClassName("fonte");

			if(Inp.value == localStorage.getItem("raca")){
				$(".demo-image").html("<img id='img'  src='"+localStorage.getItem("racaImg")+"'>");
				document.getElementById("te").innerHTML = "<p class ='fonte cor'>"+localStorage.getItem("raca")+"</p>";
					Cor[0].style.color = localStorage.getItem("volatioC");
					Fonte[0].style.fontFamily = localStorage.getItem("volatioF");
				}else{
				loadDogs();
					}
			}
});