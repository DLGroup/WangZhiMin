

// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'course.json',
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
		
		columns:[[
					{field:'major',title:'专业名称',width:150},
					{field:'name',title:'课程名称',width:150},
					{field:'credit',title:'学分',width:150},
					{field:'classHour',title:'课时',width:220,rowspan:2}
				
				]],toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						window.location.href = 'addCourse.html';
					}
				}] 	
	});	
	


});

	