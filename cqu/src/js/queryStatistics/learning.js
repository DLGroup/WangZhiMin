// JavaScript Document
$(function(){
	
	$("#learningBackgroud").datagrid({
		url: 'learning.json',
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
			
        	{field:'id',title:'学号',width:100},  
        	{field:'name',title:'姓名',width:100},  
			{field:'video',title:'视频名称',width:100},			
			{field:'status',title:'学习情况',width:40,sortable:true,
							formatter:function(value,res){								
								if(value == '1')
									return '已学习';
								else if(value == '0')
									return '未学习';								
								
						}},
	
    	]] ,toolbar:[{
					text:'考试成绩',
					iconCls:'icon-add',
					handler:function(){
						window.location.href = 'viewExamScore.html';
					}
				}], 	 	
	});		
	

});

	