trailCheck = false;
blackDeg = " ";
$(document).ready(function() {
	verVal=16;
	hozVal=16;
	genSq();
	genDim();
	$("#off").show();
	

});

function getVals() {
    var hozGet = +$("input[name=horizontal]").val();
    var verGet = +$("input[name=vertical]").val();	
	if (hozGet/hozGet === 1 && verGet/verGet === 1) {
		hozVal = hozGet;
		verVal = verGet;

		$("input[name=horizontal]").val(1);
		$("input[name=vertical]").val(1);
	}else {
		alert("Please enter a number ONLY!");
		$("input[name=horizontal]").val(1);
		$("input[name=vertical]").val(1);
	}
}

function genSq() {
	$(".sqV").remove();
	$(".sqH").remove();
	$("br").remove();
	for (var i = 0; i < verVal; i++) {
		$(".grid-area").append('<div class="sqV"></div><br>');
	}
	for (var j = 1; j < hozVal; j++) {
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

function genColor() {
	var rdmSet = new Array;
	for(var i=0;i<3;i++) {
		rdmSet[i] = Math.floor(Math.random() * 255);
	}
	
	rdmColor = "rgb("+rdmSet[0]+", "+rdmSet[1]+", "+rdmSet[2]+")";
	$(".rdm").css("background-color", rdmColor);
} 

function trailToggle() {
	if (trailCheck) {
		removeTrail();		
		trailCheck = false;
		$("#on").hide();
		$("#off").show();
	} else {
		addTrail();
		trailCheck = true;
		$("#on").show();
		$("#off").hide();
	}
}

function dispCname() {
	$(".rdm").text($(this).css("background-color"));
	$(".rdm").css("background-color",$(this).css("background-color"));
}

function hoverWB() {
	$(".grid-area>div").mouseenter(function() {
		$(this).css("background-color", "black");
		$(".rdm").text($(this).css("background-color"));
		$(".rdm").css("background-color",$(this).css("background-color"));
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", "white");
	});
}

function hoverRdm() {
	$(".grid-area>div").mouseenter(function() {
		genColor();
		$(this).css("background-color", rdmColor)
		$(".rdm").text($(this).css("background-color"));
		$(".rdm").css("background-color",$(this).css("background-color"));	
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", "white");
	});
}

function addTrail() {
	$(".grid-area>div").mouseenter(function() {
		$(this).removeClass("trail-class");
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).addClass("trail-class");
	});
}

function removeTrail() {
	$(".grid-area>div").removeClass("trail-class");
	$(".grid-area>div").mouseenter(function() {
		$(this).removeClass("trail-class");
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).removeClass("trail-class");
	});
}

function alphaPick() {
	switch(blackDeg) {
    case "rbga(0, 0, 0, 0)":
        $(this).css("background-color", "rgba(0,0,0,0.1)");
        break;
    case "rbga(0, 0, 0, 0.1)":
        $(this).css("background-color", "rgba(0,0,0,0.2)");
        break;
        case "rbga(0, 0, 0, 0.2)":
        $(this).css("background-color", "rgba(0,0,0,0.3)");
        break;
    case "rbga(0, 0, 0, 0.3)":
        $(this).css("background-color", "rgba(0,0,0,0.4)");
        break;
        case "rbga(0, 0, 0, 0.4)":
        $(this).css("background-color", "rgba(0,0,0,0.5)");
        break;
    case "rbga(0, 0, 0, 0.5)":
        $(this).css("background-color", "rgba(0,0,0,0.6)");
        break;
        case "rbga(0, 0, 0, 0.6)":
        $(this).css("background-color", "rgba(0,0,0,0.7)");
        break;
    case "rbga(0, 0, 0, 0.7)":
        $(this).css("background-color", "rgba(0,0,0,0.8)");
        break;
        case "rbga(0, 0, 0, 0.8)":
        $(this).css("background-color", "rgba(0,0,0,0.9)");
        break;
    case "rbga(0, 0, 0, 0.9)":
        $(this).css("background-color", "rgba(0,0,0,1)");
        break;
    case "rbga(0, 0, 0, 1)":
        break;
    default: 
        $(this).css("background-color", "rgba(0,0,0,0)");
	}
}

function gg() {
	
	$(".grid-area>div").mouseenter(function() {
		blackDegEnt = $(this).css("background-color");
		switch(blackDegEnt) {
   	 		case "rgba(0, 0, 0, 0)":
        		$(this).css("background-color", "rgba(0,0,0,0.1)");
        		blackDegExt = "rgba(0,0,0,0.1)";
        		break;
    		case "rgba(0, 0, 0, 0.1)":
        		$(this).css("background-color", "rgba(0,0,0,0.2)");
        		blackDegExt = "rgba(0,0,0,0.2)";
        		break;
        	case "rgba(0, 0, 0, 0.2)":
        		$(this).css("background-color", "rgba(0,0,0,0.3)");
        		blackDegExt = "rgba(0,0,0,0.3)";
        		break;
    		case "rgba(0, 0, 0, 0.3)":
        		$(this).css("background-color", "rgba(0,0,0,0.4)");
        		blackDegExt = "rgba(0,0,0,0.4)";
        		break;
        	case "rgba(0, 0, 0, 0.4)":
        		$(this).css("background-color", "rgba(0,0,0,0.5)");
        		blackDegExt = "rgba(0,0,0,0.5)";
        		break;
    		case "rgba(0, 0, 0, 0.5)":
        		$(this).css("background-color", "rgba(0,0,0,0.6)");
        		blackDegExt = "rgba(0,0,0,0.6)";
        		break;
        	case "rgba(0, 0, 0, 0.6)":
        		$(this).css("background-color", "rgba(0,0,0,0.7)");
        		blackDegExt = "rgba(0,0,0,0.7)";
        		break;
    		case "rgba(0, 0, 0, 0.7)":
        		$(this).css("background-color", "rgba(0,0,0,0.8)");
        		blackDegExt = "rgba(0,0,0,0.8)";
        		break;
        	case "rgba(0, 0, 0, 0.8)":
        		$(this).css("background-color", "rgba(0,0,0,0.9)");
        		blackDegExt = "rgba(0,0,0,0.9)";
        		break;
    		case "rgba(0, 0, 0, 0.9)":
        		$(this).css("background-color", "rgba(0,0,0,1)");
        		blackDegExt = "rgba(0,0,0,1)";
        		break;
    		case "rgba(0, 0, 0, 1)":
    			blackDegExt = "rgba(0,0,0,0.1)";
        		break;
    		default: 
        		$(this).css("background-color", "rgba(0,0,0,0)");
		}
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", blackDegExt);
	});
}