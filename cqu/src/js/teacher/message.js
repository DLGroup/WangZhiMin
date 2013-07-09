// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'message.json',
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
        	{field:'time',title:'发布时间',width:100},
			{field:'status',title:'信息状态',width:40,sortable:true,
							formatter:function(value,res){								
								if(value == '1')
									return '已读';
								else if(value == '0')
									return '未读';								
								
						}},
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onClick="viewMessage();"><img src="../../images/tip.png"/>查看</a></span>';
							
						}
					}
    	]]  	
	});	
	
	

});

function viewMessage(){
	window.location.href='viewMessage.html';
}
	