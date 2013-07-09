// JavaScript Document
var viewTabGroup = 0;//正在查看的父菜单分组
var TabGroups;//父菜单分组总数
var viewTab=0;//正在查看的父菜单



$(function(){
	TabGroups= $("div[id^=m_t]").size()/6;
	
	menuSwitch(0);
	
	for(i=0;i<6;i++)
	{
		$("#m_t"+i).css("display","");
		$("#m_c"+i).css("display","");
		$("#m_b"+i).css("display","");
	}
});


//隐藏正在显示的菜单组
//
function nextTabGroup(){

	for(i=0;i<6;i++)
	{
		var index = viewTabGroup*6+i;

		$("#m_t"+index).css("display","none");
		$("#m_c"+index).css("display","none");
		$("#m_b"+index).css("display","none");
	}
	if(viewTabGroup < TabGroups - 1) 
		viewTabGroup++;
	else
		viewTabGroup =0 ;
	for(i=0;i<6;i++)
	{
		var index = viewTabGroup*6+i;

		$("#m_t"+index).css("display","");
		$("#m_c"+index).css("display","");
		$("#m_b"+index).css("display","");
	}
}

//隐藏正在显示的子菜单组
//显示出选择的子菜单组的第一组
//检测菜单下子菜单有几组：大于1组则使得NEXT可点击
function menuSwitch(id){
	
	$("#m_c"+viewTab+"_children").css("display","none");
	$("#m_t"+viewTab).attr("class","offtop");
	$("#m_c"+viewTab).attr("class","offcont");
	$("#m_b"+viewTab).attr("class","offbot");
	
	$("#m_c"+id+"_children").css("display","");
	$("#m_t"+id).attr("class","ontop");
	$("#m_c"+id).attr("class","oncont");
	$("#m_b"+id).attr("class","onbot");

	
	viewTab=id;
}

//展示下一组子菜单

function nextMenuGroup(){
	$("#m_c"+viewTab+"_children_"+viewMenuGroup).css("display","none");
	$(".prev").bind('click',prevMenuGroup);
	$(".prev").css("cursor","pointer");
	viewMenuGroup++;
	$("#m_c"+viewTab+"_children_"+viewMenuGroup).css("display","");
	if(viewMenuGroup == menuGroups){
		$(".next").unbind('click',nextMenuGroup);
		$(".next").css("cursor","");
	}
}

//上一组子菜单
function prevMenuGroup(){
	$("#m_c"+viewTab+"_children_"+viewMenuGroup).css("display","none");
	$(".next").bind('click',nextMenuGroup);
	$(".next").css("cursor","pointer");
	viewMenuGroup--;
	$("#m_c"+viewTab+"_children_"+viewMenuGroup).css("display","");
	if(viewMenuGroup == 0){
		$(".prev").unbind('click',prevMenuGroup);
		$(".prev").css("cursor","");
	}
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