function slide_0() {
	document.getElementById("comment-1").style.display = 'block';
	document.getElementById("comment-2").style.display = 'none';
	document.getElementById("comment-3").style.display = 'none';
	document.getElementById("name-1").style.display = 'inline-block';
	document.getElementById("name-2").style.display = 'none';
	document.getElementById("name-3").style.display = 'none';
	document.getElementById("block-click-1").style.background = '#ffffff';
	document.getElementById("block-click-2").style.background = 'transparent';
	document.getElementById("block-click-3").style.background = 'transparent';
}

function slide_1() {
	document.getElementById("comment-1").style.display = 'none';
	document.getElementById("comment-2").style.display = 'block';
	document.getElementById("comment-3").style.display = 'none';
	document.getElementById("name-1").style.display = 'none';
	document.getElementById("name-2").style.display = 'inline-block';
	document.getElementById("name-3").style.display = 'none';
	document.getElementById("block-click-1").style.background = 'transparent';
	document.getElementById("block-click-2").style.background = '#ffffff';
	document.getElementById("block-click-3").style.background = 'transparent';
}

function slide_2() {
	document.getElementById("comment-1").style.display = 'none';
	document.getElementById("comment-2").style.display = 'none';
	document.getElementById("comment-3").style.display = 'block';
	document.getElementById("name-1").style.display = 'none';
	document.getElementById("name-2").style.display = 'none';
	document.getElementById("name-3").style.display = 'inline-block';
	document.getElementById("block-click-1").style.background = 'transparent';
	document.getElementById("block-click-2").style.background = 'transparent';
	document.getElementById("block-click-3").style.background = '#ffffff';
}