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
        	{field:'organiser',title:'发布人',width:100},  
        	
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onclick="remove()"><img src="../../images/remove.png" alt="删除"/>删除</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="modify()"><img src="../../images/modify.png"/>编辑</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="report()"><img src="../../images/modify.png"/>统计结果</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="view()"><img src="../../images/tip.png"/>预览</a>'
							+'</span>';
							
						}
					}
    	]] , toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						
						//window.location.href = '../../survey/admin/addsurvay.html';
						// document.location.href = '../../survey/admin/addsurvay.html';
						 window.open('../../survey/admin/addsurvay.html','','');
					}
				}], 		
	});	
	
	
});


function remove(){
	alert("remove");
}
function modify(){
	window.open('../../survey/admin/addsurvay.html','','');

}
function report(){
	
	
	 window.open('../../survey/admin/report.html','','');
}
function view(){

	 window.open('../../survey/admin/survey.htm','','');
}