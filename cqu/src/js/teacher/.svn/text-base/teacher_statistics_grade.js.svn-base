// JavaScript Document
$(function(){
	
	$("#gradeBackgroud").datagrid({
		url: 'coursegrade.json',
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
			{field:'major',title:'章节',width:100}, 
			{field:'course',title:'视频名称',width:100}, 
        	{field:'id',title:'参评人数',width:100},  
        	{field:'name',title:'总人数',width:100},  
			{field:'rate',title:'参评率',width:100},  
			{field:'status',title:'标准差',width:100},
			{field:'score',title:'课程评分',width:100}
			
    	]]  	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addTeacher.html';
	});

});

	