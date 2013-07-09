// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'certificate.json',
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
        	  
        	{field:'name',title:'名称',width:100},  
        	
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onclick="remove()"><img src="../../images/remove.png" alt="删除"/>删除</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="modify()"><img src="../../images/modify.png"/>编辑</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="view()"><img src="../../images/tip.png"/>查看</a>'
							+'</span>';
							
						}
					}
    	]] , toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						window.location.href = 'addCertificate.html';
					}
				}], 		
	});	
	
	
});


function remove(){
	alert("remove");
}
function modify(){
	window.location.href = 'addCertificate.html';
}
function view(){
	window.location.href = 'addCertificate.html';
}