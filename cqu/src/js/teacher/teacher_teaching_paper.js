// JavaScript Document
$(function(){
	
	$("#teachingpaperBackgroud").datagrid({
		url: 'paper.json',
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
			{field:'title',title:'论文题目',width:100}, 
        	{field:'id',title:'学生学号',width:100},  
        	{field:'name',title:'学生姓名',width:100},  
			{field:'status',title:'状态',width:100},
			{field:'score',title:'得分',width:90},
			{field:'opt',title:'操作',width:116,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#">下载</a>&nbsp;<a href="../../teacher/teaching/paper_score.html">评分</a>&nbsp;<a href="../../teacher/teaching/paper_score.html">查看评语</a></span>';
							
						}
					}
    	]]  	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addTeacher.html';
	});

});

	