// JavaScript Document
$(function(){
	
	$("#jobBackgroud").datagrid({
		url: 'job.json',
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
        
        	{field:'name',title:'作业序号',width:100},  
        	{field:'rank',title:'作业标题',width:100},
			{field:'opt2',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#">下载</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><img src="../../images/remove.png" alt="删除"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../teacher/preparation/job_upload.html"><img src="../../images/modify.png"/></a></span>';
							
						}
					}
    	]],
			toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						window.location.href = 'job_upload.html';
					}
				}],   	
	});	
	
	$('#add').click(function(){
		window.location.href = 'addTeacher.html';
	});

});

	