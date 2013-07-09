// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'questionnaire.json',
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
		frozenColumns:[[
			{field:'ck',checkbox:true},
			{field:'number',title:'编码',width:100}			
		]],
		columns:[[  
        	  
        	{field:'name',title:'问卷名称',width:100},
			{field:'time',title:'时间',width:100},  
			{field:'state',title:'状态',width:100}, 
        	{field:'organiser',title:'发布人',width:100},  
        	
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onclick="view()"><img src="../../images/modify.png"/>填写问卷</a>'
							+'</span>';	
						}
					}
    	]]
	});	
	
	
});


function remove(){
	alert("remove");
}
function report(){
	
	
	 window.open('../../survey/admin/report.html','','');
}
function view(){

	 window.open('../../survey/admin/survey.htm','','');
}