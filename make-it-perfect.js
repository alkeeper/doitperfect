
var persentage = 0;
var fink, min = -5, max = 5;

var progress = function(){
	if(persentage < fink){
		$('#progress-value').text((persentage++)+'%');
		setTimeout(progress, 117);
	}
}

var makePerfect = function(){
	fink = 85 - (Math.random() * (max - min) + min);
	$('#action').css('visibility', 'visible');
	$('#progress').css({ width: "0%" });
	persentage = 0;
	progress();
	$('#action p').html('Подождите. Делается пиздато.');
	$('#progress').animate({ width: fink+"%" }, 10000 );
	$('#progress').fadeTo(100, 0.35, function(){
		persentage = fink;
	});
	$('#progress').fadeTo(100, 1);
	$('#progress').fadeTo(100, 0.35);
	$('#progress').fadeTo(100, 1);
	$('#progress').fadeTo(100, 0.35);
	$('#progress').fadeTo(100, 1, function(){
		alert('Приложение обратилось по адресу #1b14c426v:0008, выполнило недопустимую операцию и будет прервано.');
		$('#action p').html('<span><span class="female">Пиздато</span> не получилось. Получилось <span class="male">хуёво</span>.</span>');
	});
}

$(document).ready(function(){
	$('#do-it').click(makePerfect);
});
