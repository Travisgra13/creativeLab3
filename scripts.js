let app = new Vue({
el: '#app',
data: {
	text: '',
	modifiedText:''
},
methods: {
	noSpaces() {
		let myString = this.text;
		this.modifiedText = myString.replace(/\s+/g, '');
	},
	singleSpaced() {
		this.modifiedText = this.text;
		
	},
	doubleSpaced() {
		let myString = this.text;
		//let myNewString = [myString];
		var myModifiedTextArray = [];
		for (var i = 0; i < myString.length; i++) {
			if (myString.charAt(i) === ' ') {
				myModifiedTextArray.push("");
			}
			else {
			myModifiedTextArray.push(myString.charAt(i));
			}
		}
		this.modifiedText = (myModifiedTextArray.join(' '));
		
	},
	tripleSpaced() {
		let myString = this.text;
		var myModifiedTextArray = [];
		for (var i = 0; i < myString.length; i++) {
			if (myString.charAt(i) === ' ') {
				myModifiedTextArray.push("");
			}
			else {
			myModifiedTextArray.push(myString.charAt(i));
			}
		}
		this.modifiedText = (myModifiedTextArray.join('-'));
	},
	setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
}


  
});

 