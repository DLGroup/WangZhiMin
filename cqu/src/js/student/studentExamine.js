// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'student.json',
		width: 'auto',
		height: 'auto',
		striped: true,
		singleSelect : false,
		fitColumns: true,
		nowrap: true, //超出范围隐藏
		loadMsg: "数据加载中，请稍后...",
		pageNumber:1,
		pageList:[5,10,20,30,40,50,60,70],
		pagination:true,
		rownumbers:true,
		frozenColumns:[[
			{field:'ck',checkbox:true},
			{field:'id',title:'学号',width:100}			
		]],
		columns:[[  
        	  
        	{field:'name',title:'学员姓名',width:100},  
        	{field:'rank',title:'性别',width:100},
			{field:'category',title:'分数',width:100},
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" ><img src="../../images/remove.png" alt="删除"/>删除</a>'
						
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0);" id="examine"><img src="../../images/tip.png"/>审批</a>'
							+'</span>';
							
						}
					}
    	]],toolbar:[{
					text:'批量审批',
					iconCls:'icon-add',
					handler:function(){
					//	window.location.href = 'studentInfo.html';
					}
				}] 	  	
	});	
	


});

	