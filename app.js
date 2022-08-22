
jQuery(document).ready(function(){

	
setInterval(majid,100);
	function majid(){
		var _sec=parseInt(jQuery(".sec").text());
		_sec +=1;
		
		if (_sec > 9) {
			_sec = 0;
			var _min=parseInt(jQuery(".min").text());
			_min +=1;
			if(_min> 9){
				_min=0;
				var _hours=parseInt(jQuery(".hours").text());
				_hours +=1;
				if (_hours > 0 && _hours < 12) {
					var f="AM";
				}
				else{
					if( _hours > 23 ){
						_hours = 0;
					}
					var f="PM";
				}
			}
		}


		jQuery(".sec").text(_sec);
		jQuery(".min").text(_min);
		jQuery(".hours").text(_hours);
		jQuery(".f").text(f);
	}

});