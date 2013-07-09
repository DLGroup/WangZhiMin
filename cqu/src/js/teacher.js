// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'student.json',
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
        	{field:'id',title:'学号',width:100},  
        	{field:'name',title:'学员姓名',width:100},  
        	{field:'rank',title:'性别',width:100},
			{field:'category',title:'分数',width:100},
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#"><img src="../../images/remove.png" alt="删除"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><img src="../../images/modify.png"/></a></span>';
							
						}
					}
    	]]  	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addStudent.html';
	});

});

	