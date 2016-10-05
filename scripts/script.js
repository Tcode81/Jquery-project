$(document).ready(function() {


});
function getVals() {
    var hozGet = +$("input[name=horizontal]").val();
    var verGet = +$("input[name=vertical]").val();	
    console.log(typeof hozGet);
    console.log(typeof verGet);
	if (hozGet/hozGet === 1 && verGet/verGet === 1) {
		hozVal = hozGet;
		console.log(hozVal);
		verVal = verGet;
		console.log(verVal);
		$("input[name=horizontal]").val(1);
		$("input[name=vertical]").val(1);
	}else {
		alert("Please enter a number ONLY!");
		$("input[name=horizontal]").val(1);
		$("input[name=vertical]").val(1);
	}
}

function genSq () {
	$(".sqV").remove();
	$(".sqH").remove();
	$("br").remove();
	for (var i = 0; i < verVal; i++) {
		console.log("i= "+i);
		$(".grid-area").append('<div class="sqV"></div><br>');
	}
	for (var j = 1; j < hozVal; j++) {
		console.log("j= "+j);
		$(".sqV").after('<div class="sqH"></div>');
	}
}

function genDim() {
	sqSide = (960 - (3.4 * hozVal)) / hozVal; // 2(1*2) from borders 1.4(0.7*2) form margin
	$("div.sqV").css("width", sqSide+"px");
	$("div.sqH").css("width", sqSide+"px");
	$("div.sqV").css("height", sqSide+"px");
	$("div.sqH").css("height", sqSide+"px");	
}
