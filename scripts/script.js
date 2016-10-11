trailCheck = false;
stickyCheck = false;
WBCheck = false;
rdmCheck = false;
$(document).ready(function() {
	clearGrid();
	$("#off").show();	
});

function clearGrid() {
	verVal=16;
	hozVal=16;
	genSq();
	genDim();
}

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
	$("#trail-btn").addClass("active");
	$("#sticky-btn").removeClass("active");
	stickyCheck = false;
	removeSticky();
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
	$(".grid-area>div").css("background-color", "rgba(0,0,0,0)");
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
	$(".grid-area>div").css("background-color", "rgba(0,0,0,0)");
	$(".grid-area>div").mouseenter(function() {
		genColor();
		$(this).css("background-color", rdmColor);
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

function opticInc() {
	clearGrid();
	$(".grid-area>div").css("background-color", "rgba(0,0,0,0)");
	$(".grid-area>div").mouseenter(function() {
		blackDegEnt = $(this).css("background-color");
		blackDegEntAlpha = blackDegEnt[14]+blackDegEnt[15]+blackDegEnt[16]+blackDegEnt[17];
		backgroundCGet();
		switch (blackDegEntAlphaChecked) {
			case "0":
				$(this).css("background-color","rgba(0,0,0,0.1)");
				blackDegExt = "rgba(0,0,0,0.1)";
				$(".rdm").text("10%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.09":
				$(this).css("background-color","rgba(0,0,0,0.2)");
				blackDegExt = "rgba(0,0,0,0.2)";
				$(".rdm").text("20%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.2":
				$(this).css("background-color","rgba(0,0,0,0.3)");
				blackDegExt = "rgba(0,0,0,0.3)";
				$(".rdm").text("30%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.29":
				$(this).css("background-color","rgba(0,0,0,0.4)");
				blackDegExt = "rgba(0,0,0,0.4)";
				$(".rdm").text("40%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.4":
				$(this).css("background-color","rgba(0,0,0,0.5)");
				blackDegExt = "rgba(0,0,0,0.5)";
				$(".rdm").text("50%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.49":
				$(this).css("background-color","rgba(0,0,0,0.6)");
				blackDegExt = "rgba(0,0,0,0.6)";
				$(".rdm").text("60%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.6":
				$(this).css("background-color","rgba(0,0,0,0.7)");
				blackDegExt = "rgba(0,0,0,0.7)";
				$(".rdm").text("70%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.70":
				$(this).css("background-color","rgba(0,0,0,0.8)");
				blackDegExt = "rgba(0,0,0,0.8)";
				$(".rdm").text("80%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.8":
				$(this).css("background-color","rgba(0,0,0,0.9)");
				blackDegExt = "rgba(0,0,0,0.9)";
				$(".rdm").text("90%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "0.90":
				$(this).css("background-color","rgba(0,0,0,1)");
				blackDegExt = "rgba(0,0,0,1)";
				$(".rdm").text("100%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			case "undefined":
				$(this).css("background-color","rgba(0,0,0,1)");
				blackDegExt = "rgba(0,0,0,1)";
				$(".rdm").text("100%");
				$(".rdm").css("background-color",$(this).css("background-color"));
				break;
			default:
				$(this).css("background-color","rgba(0,0,0,0)");
				blackDegExt = "rgba(0,0,0,0)"
		}

	});
		
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", blackDegExt);
	});
}

function backgroundCGet() {
	alphaNum = new Array;
	blackDegEntAlphaChecked=1;
 	for(var i=0; i<blackDegEntAlpha.length;i++) {
 		if (blackDegEntAlpha[i] !== ")") {
 			alphaNum[i] = blackDegEntAlpha[i];
 		}
	}

	if (typeof alphaNum[1]=== "undefined") {
		blackDegEntAlphaChecked = String(alphaNum[0]);
		Number(blackDegEntAlphaChecked);
	} 
	else if (typeof alphaNum[3]=== "undefined") {
		blackDegEntAlphaChecked = String(alphaNum[0]+alphaNum[1]+alphaNum[2]);
		Number(blackDegEntAlphaChecked);
	} else {
		blackDegEntAlphaChecked = String(alphaNum[0]+alphaNum[1]+alphaNum[2]+alphaNum[3]);
		Number(blackDegEntAlphaChecked);
	}
}

function hoverWBStick() {
	$(".grid-area>div").css("background-color", "rgba(0,0,0,0)");
	$(".grid-area>div").mouseenter(function() {
		$(this).css("background-color", "black");
		$(".rdm").text($(this).css("background-color"));
		$(".rdm").css("background-color",$(this).css("background-color"));
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", "black");
	});
}

function hoverRdmStick() {
	$(".grid-area>div").css("background-color", "rgba(0,0,0,0)");
	$(".grid-area>div").mouseenter(function() {
		genColor();
		$(this).css("background-color", rdmColor);
		$(".rdm").text($(this).css("background-color"));
		$(".rdm").css("background-color",$(this).css("background-color"));	
	});
	$(".grid-area>div").mouseleave(function() {
		$(this).css("background-color", rdmColor);
	});
}

function stickyToggle() {
	$("#trail-btn").removeClass("active");
	$("#sticky-btn").addClass("active");
	trailCheck = false;
	removeTrail();
	if (stickyCheck) {
		stickyCheck = false;
		$("#on").hide();
		$("#off").show();
			if (WBCheck) {hoverWB();} else if (rdmCheck) {hoverRdm();}
	} else {
		stickyCheck = true;
		$("#on").show();
		$("#off").hide();
			if (WBCheck) {hoverWBStick();} else if (rdmCheck) {hoverRdmStick();}
	}
}

function stickyToggleWB() {
	$("#rdm-btn").removeClass("active");
	$("#WB-btn").addClass("active");
	WBCheck = true;
	rdmCheck = false;
	if (stickyCheck) {
		hoverWBStick();
	} else {
		hoverWB();
	}
}

function stickyToggleRdm() {
	$("#rdm-btn").addClass("active");
	$("#WB-btn").removeClass("active");
	rdmCheck = true;
	WBCheck = false;
	if (stickyCheck) {
		hoverRdmStick();
	} else {
		hoverRdm();
	}
}

function removeSticky() {
	if (WBCheck) {hoverWB();} else if (rdmCheck) {hoverRdm();}
}
