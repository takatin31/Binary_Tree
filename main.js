var tree;
var node;

function setup()
{
	createCanvas(600, 400);
	background(51);
	tree = new Tree();


	for (var i = 0 ; i < 10 ; i ++)
		tree.addValue(floor(random(0,200)));
	tree.traverse();
	//tree.search(5);
}



