// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'studentFile.json',
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
        	{field:'studentId',title:'学号',width:100},   
        	{field:'name',title:'姓名',width:100},  
        	
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onclick="view();"><img src="../../images/tip.png"/>查看</a></span>';
							
						}
					}
    	]] 
	});	
	
	
});



function view(){
	
	window.location.href = 'viewStudentFileDetail.html';
	
}