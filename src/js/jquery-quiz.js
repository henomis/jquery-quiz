
function reveal(item)
{
	$(item).val( $(item).attr("answ"));
}

$(document).ready(function() {

// autosize input:text
$.each($("input:text"),function(i,item){
	var p = $(item).attr("answ");
	$(item).attr("size",p.length);
	if($(item).attr("help") == "true")
		$("<div style=\"background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAdpQTFRFAAAA//8AWzw5XDs5AQEAVj476bht6blu6bht67pr6blu8M2Z9uLC8dOm17R+i42IjI6J9+TI361819jU2drXq0E3q0A26JKR1tXU19XT55WV1a15szU1l4eDtDg309XR6ZaVszc3nkZGtTc26JeX29vYi42J2djWmIiEmn572NPR2trYmIqGm4B92tXUztHM6sbFsVNRslVU6tDQ2NnWs1dWnI6Kn4aCtVpZ7c3M397d4Nza79nY3qx7rzUrrjQr3qt79uHC6bhu9uTH3at63Kp69ePH7syY4rJq79Glyql3a21pfX56fH55aWpnx6Fx7tCk6Lht4LFpgWc7AAAAAAAAAAAAd1833a9ov2VXvHh16uzp6+zqvHl2v2RW2ImH7nt6+evr+vr5+ezs8I2N2ouJv2RX14eG8mJi8DU18URE9Hh42oqJu2Vj7Xl44Ts740hI8UVF8YyMvWdm+evq9+vq5Obj9/f27u7t4uTh+fn5+Pj37O3r9+zr+vDwwFtZ7UlJ81pa442N5a2t83Bw7kdHwVpYwltN3EBA81tb83Jy8Dc32z09wlpN3D8/7UZG7uTh9PXz9vf28+vp7UZF2zw8v1hWx8rE19nU19rVyMvFv0lIwlpM/v7+UiDzngAAAFl0Uk5TAAAAAAAAJEsvCF7O9dmkZpf26v7+3d3+/Pz+pd963/7+3w3h/v5m/Hp9/Px6ffz+/t7h/v7fe33h/vz8/uvh4uz1S/ft7vjPJduuhKqqh7HcXjEPCw0MEDKuKJByAAAAAWJLR0SdBrvysQAAAAlwSFlzAAAN1gAADdYBkG95nAAAAQdJREFUGNNjYGBkY+fgZAACTg52NkYGBkYubh5ePn4BAX4+Xh5uLkYGNm5Bocgo4egYkdg4IUFuNgZ2HiHR+ITEpKTklFQxIR52Bg7etPSMTHEJSams7Jw4Xg4GTuncvMx8GVlZuYLComJpoPH88iUKikoMDErKKqWqakDbBMqS1DWANJOmVnmFAEigskpbB0gz6+pV1wAFWPj1aw0MlViZlIyM60zUWBg4+eobGptMzcwtmlta2/g4gda2d2R2WlpZ23R19/QCrWXnsbXr658wcdLkKVPtHRydgE53dumdNn3GzFmz57i6uXuAPefp5e3j6+cfwMMdCPIuG3tQcEhoaFh4BMj7ALXPNe7+CYVlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTAzLTA0VDEwOjAzOjI2KzAxOjAw2xc39gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMy0wMy0wNFQxMDowMzoyNiswMTowMKpKj0oAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC'); width: 16px; height: 16px; display: inline-block; cursor:help;\"></div>").insertAfter($(item)).click(function(){ reveal($(item));});
});

$(".subm").click(function() {
	var myform=$(this).parent();
	var ok=0;
	var tot=$(myform).children("input:text").size();
	$.each($(myform).children("input:text"), function(i,item) {
		
		if(item.value.toLowerCase() == $(item).attr("answ").toLowerCase()){
			$(item).removeClass("answ_error");
			$(item).addClass("answ_ok");
			ok+=1;
		} else {
			$(item).removeClass("answ_ok");
			$(item).addClass("answ_error");
		}
	});
	$(myform).attr("ok",ok);
	$(myform).attr("tot",tot);
});

});
