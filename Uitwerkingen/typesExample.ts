function example() {

	//example list
    let list:Array<string>=["Van","Smurfen","maak", "je", "ijs"];
	list.reverse();
	let result:string;
	result = list[0]+ list[1]+ list[2]+ list[3]+ list[4];

	//example tuple
	let x: [string, number];
	x = ["hello", 5];
	console.log(x[0]);
	console.log(x[1]);
	return result;


}

function exampleLetVar(){
	for (var i = 0; i < 10 ; i++) {

		setTimeout(function() { console.log("var"+ i); }, 100 * i);
	}
	for (let i = 0; i < 10 ; i++) {
		setTimeout(function() { console.log("let"+ i); }, 100 * i);
	}

	return "done";
}

//interface example
interface Point {
	x: number;
	y: number;
}

function printPoint(point: Point){
	return point.x +","+ point.y;
}

document.body.innerHTML = printPoint({ x: 10, y: 20 });