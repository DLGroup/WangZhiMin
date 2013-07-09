// JavaScript Document
$(function(){
	
	$("#materialBackgroud").datagrid({
		url: 'material.json',
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
			{field:'number',title:'序号',width:100},
        	{field:'rank',title:'标题',width:100},
			{field:'time',title:'上传时间',width:100},
			{field:'opt1',title:'教学资料',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#">视频资料</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">文档资料</a></span>';
						}
					},
			{field:'opt2',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#"><img src="../../images/remove.png" alt="删除"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="addmaterial.html"><img src="../../images/modify.png"/></a></span>';
							
						}
					}
    	]],
			toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						window.location.href = 'addmaterial.html';
					}
				}], 
	});	

	$('#add').click(function(){
		window.location.href = 'addmaterial.html';
	});

});

	