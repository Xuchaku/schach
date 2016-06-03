var hod = false;
var igrok;
var table = document.getElementById("table");
var color = "white";
var beta = document.getElementById("beta");
	beta.style.color = "black";
var i1 = document.getElementById("i1");
i1.style.backgroundColor = "white";
var i2 = document.getElementById("i2");
i2.style.backgroundColor = "black";
document.onclick = function(e) {
	var target = e.target;

						if(target.tagName == "DIV") {
								if(!analysys(target))
									return;
						}

		
						if(target.style.backgroundColor != color && target.tagName == "DIV") return;
				if(target.tagName != "DIV" && target.tagName != "TD") return;
					if(target.tagName == "TD" && hod) {
						moveShax(igrok, target);
					}
					
		
		if(target.tagName != "DIV") return;
				if(!hod) {
			var elem = target.style.ii;
			target.style.border = "1px solid black";
			elem.enabled = true;
			hod = true;
			target.style.cursor = "pointer";

			igrok = target;
			
		}
	
		
		
			

}
var rotate = 0;

function analysys(target) {
	var color = target.style.backgroundColor;
	var parent = target.parentNode;
	var tab = table.children[0];//tbody
	var s,m;
	var arr = [];
			if(color == "white") {

					for(var i = 0;i<tab.children.length;i++) {

						for(var j = 0;j<8;j++) {
								if(parseInt(parent.style.pos) - parseInt(tab.children[i].children[j].style.pos) == 11)
										s = parentNulls(tab.children[i].children[j],target);
								if(parseInt(parent.style.pos) - parseInt(tab.children[i].children[j].style.pos) == 9)
										m = parentNulls(tab.children[i].children[j],target);

						}
					}
					return m || s;

			}
				else {
							for(var i = 0;i<tab.children.length;i++) {

						for(var j = 0;j<8;j++) {
								if(parseInt(parent.style.pos) - parseInt(tab.children[i].children[j].style.pos) == -11)
										s = parentNulls(tab.children[i].children[j],target);
								if(parseInt(parent.style.pos) - parseInt(tab.children[i].children[j].style.pos) == -9)
										m = parentNulls(tab.children[i].children[j],target);

						}
					}
					return m || s;	
				}
}
function parentNulls(elem,target) {
				if(elem.children[0]) {
		if(elem.children[0].style.backgroundColor == target.style.backgroundColor)
				return false;
			else return true;
		}
		else return true;
}



function moveShax(elem, punkt) {
	var parent = elem.parentNode;
		if(goMath(parent,punkt,elem)) {
			if(punkt.children[0] && punkt.children[0].style.backgroundColor != elem.style.backgroundColor) {
			

							punkt.removeChild(punkt.children[0]);
						
				}
					if(!punkt.children[0] || punkt.children[0].style.backgroundColor != elem.style.backgroundColor) {
						
				elem.style.border = "0px solid black";
				elem.style.ii.enabled = false;
				hod = 0;
					if(elem.style.backgroundColor == "white")
						rotate = 180;
					else rotate = 0;
				table.style.transform = "rotate("+rotate+"deg)";
					if(color == "white")
						color = "black";
					else color = "white";
					bgChange();
				

			parent.removeChild(elem);
			punkt.appendChild(elem);

	}
		}
	
}

function bgChange() {

		if(i1.style.backgroundColor == "white")
	i1.style.backgroundColor = "black";
		else i1.style.backgroundColor = "white";
		if(i2.style.backgroundColor == "black")
	i2.style.backgroundColor = "white";
		else i2.style.backgroundColor = "black";
		if(beta.style.color == "black")
			beta.style.color = "white";
		else beta.style.color = "black";
}

function goMath(elem, elem2,igr) {
	var i = parseInt(elem.style.pos[0]), j = parseInt(elem.style.pos[1]),
		l = parseInt(elem2.style.pos[0]), k = parseInt(elem2.style.pos[1]);
					if(igr.style.ii.fractions == "white") {
						
			if(i != l && j != k && i>l && i-l==1 && (j-k==1 || j-k==-1)) return true;
		}	
		else {
				
			if(i != l && j != k && i<l && i-l== -1 && (j-k==1 || j-k==-1)) return true;
		}
}







	var arrSchach = [[],[]];




		for(var i =0;i<2;i++) {
			for(var j = 0;j<8;j++) {
				arrSchach[i].push(j);
			}
		}



		
function InizialisationsNumber() {
	var bod = getComputedStyle(document.body.children[1]);
var arifm = parseInt(bod.height) - 133;
table.style.top = arifm + "px";
table.style.left = "50%";
table.style.marginLeft = "-133px";

	for(var q = 0;q<arrSchach[0].length;q++) {
				for(var x =0;x<arrSchach[1].length;x++) {
						
					
						table.children[0].children[q].children[x].style.pos =  q +""+x;
				}
		}
	}

	function InizialisationsSchach() {
				var z = 1;
				var naz = 1;
				var color = "black";
			
			for(var i = 0;i<arrSchach[0].length;i++) {
					if(i == 3 || i == 4) continue;
						if(i>4) color = "white";
					z = !z;	
					naz = !naz;
				for(var j =0;j<arrSchach[1].length;j++) {
								
							if(j==0 && z) continue;
						if(j%2 != 0) {
							new Schach(i+""+(j+z), color);
								if(j == 7 && naz)
										new Schach(i+""+0, color);

					
				}	
					}}
		}



InizialisationsNumber();	
InizialisationsSchach();

	






	