// JavaScript Document
$(function(){
	
	$("#learningBackgroud").datagrid({
		url: 'learning.json',
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
			{field:'major',title:'专业',width:100}, 
			{field:'course',title:'课程',width:100}, 
        	{field:'id',title:'学生学号',width:100},  
        	{field:'name',title:'学生姓名',width:100},  
			{field:'status',title:'学习进度',width:100},
			{field:'score',title:'考试得分',width:100},
			{field:'opt',title:'模拟考成绩查询',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="../../teacher/statistics/learning_examination.html">详情</a></span>';
							
						}
					}
    	]]  	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addTeacher.html';
	});

});

	