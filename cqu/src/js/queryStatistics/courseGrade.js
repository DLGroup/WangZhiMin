// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'courseGrade.json',
		width: 'auto',
		height: 'auto',
		striped: true,
		singleSelect : true,
		fitColumns: true,
		nowrap: true, //超出范围隐藏
		loadMsg: "数据加载中，请稍后...",
		pageNumber:1,
		pageList:[5,10,20,30,40,50,60,70],
		pagination:true,
		rownumbers:true,
		
		columns:[[  
        	  
        	{field:'name',title:'名称',width:100},			
			{field:'participatingNum',title:'参评人数',width:100}, 			
			{field:'score',title:'平均分',width:100},         	
			
    	]] 		
	});	
	
	
});




function view(){
	//window.location.href = 'addCertificate.html';
}