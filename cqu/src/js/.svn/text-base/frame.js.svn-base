if (typeof _$ == 'undefined') _$ = function (id) { return document.getElementById(id) };
function menuswitch(id,n){
	var i =1;
	for(;i<=n;i++){
		_$('m_t0'+i).className='offtop';
		_$('m_c0'+i).className='offcont';
		_$('m_b0'+i).className='offbot';
		
		_$('c_0'+i).style.display='none';
	}
	_$('m_t0'+id).className='ontop';
	_$('m_c0'+id).className='oncont';
	_$('m_b0'+id).className='onbot';
	
	_$('c_0'+id).style.display='';
}

function mouseover(obj){
	obj.className='menuboxon';
}
function mouseout(obj){
	obj.className='menubox';
}
function changetab(id,n){
	var i=1;
	for(;i<=n;i++){
		_$('t_0'+i).className='taboff';
		_$('c_0'+i).style.display='none';
	}
	_$('t_0'+id).className='tabon';
	_$('c_0'+id).style.display='';
}