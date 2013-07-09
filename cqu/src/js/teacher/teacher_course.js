// JavaScript Document
$(function(){
	
	$("#courseBackgroud").datagrid({
		url: 'course.json',
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
        	{field:'id',title:'课程编号',width:100},  
        	{field:'name',title:'课程名称',width:100},  
        	{field:'rank',title:'学时',width:100},
			{field:'category',title:'学分',width:100}
    	]]  	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addStudent.html';
	});

});

	