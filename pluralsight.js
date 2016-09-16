// Add a "0" character for alphabetical ordering
function lowerThanTen(n){
 if(n<10){
	return "0" + n;
 }
	return n;
}

// Shows first item of an array as 1 instead 0 (Human Readable)
function firstItemForHuman(n){
	return n+1;
}

// Interface for Humans
function forHuman(n)
{
	return lowerThanTen(firstItemForHuman(n))
}

function getVideoList()
{
var module = document.getElementsByClassName('module')
var video_head, titulo_video,clips,clip,titulo_clipe

for (var i=0; i<module.length; i++)
{
	video_head = module[i].getElementsByTagName('header');
	titulo_video = video_head[0].getElementsByTagName('h2');
	console.log("CAPITULO: " + forHuman(i) + ": " + titulo_video[0].innerText)

	//Clipes
	clips = module[i].getElementsByClassName('clips')
	clip_li = clips[0].getElementsByTagName('li');
	for (var j=0; j<clip_li.length; j++)
	{
		clip = clip_li[j].getElementsByTagName('h3');
		titulo_clipe = clip[0].innerText
		console.log(forHuman(i) + " - " + forHuman(j) + " - " + titulo_clipe)

		
	}
	
}
}

function getVideoUri(){
	var videouri = document.getElementsByClassName('vjs-tech')
	console.log(videouri[0].src)
}