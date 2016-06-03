//класс шашек
function Schach(position, fractions) {
	this.position = position;
	this.enabled = false;
	this.life = true;
	this.fractions = fractions;
		var elem = document.createElement("div");
		elem.style.backgroundColor = this.fractions;
		elem.style.ii = this;
			for(var i = 0;i<arrSchach[0].length;i++) {
				for(var j =0;j<arrSchach[1].length;j++) {
						if(table.children[0].children[i].children[j].style.pos == this.position)
								table.children[0].children[i].children[j].appendChild(elem);
						
						
				}

			

		}

			
}