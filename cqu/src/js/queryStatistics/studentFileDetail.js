// JavaScript Document
$(function(){
	
	$("#examScore").datagrid({
		title:'考试成绩',
		url: 'examScore.json',
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
			
        	{field:'time',title:'考试时间',width:100},   
			{field:'major',title:'专业',width:100},    
			{field:'course',title:'课程',width:100},    
			{field:'score',title:'考试成绩',width:100}					
	
    	]]	 	
	});		


	
	

	$("#study").datagrid({
		url: 'learning.json',
	    title:'学习情况',
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
			
        	
			{field:'video',title:'视频名称',width:100},			
			{field:'status',title:'学习情况',width:100,sortable:true,
							formatter:function(value,res){								
								if(value == '1')
									return '已学习';
								else if(value == '0')
									return '未学习';								
								
						}},
			{field:'time',title:'学习时间',width:100}
	
    	]] 	
	});		
	

	$("#homeWork").datagrid({
		title:'作业',
		url: 'homeWork.json',
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
			
        	{field:'time',title:'时间',width:100},          	
			{field:'opinion',title:'批改意见',width:100},
			{field:'status',title:'作业状态',width:100,sortable:true,
							formatter:function(value,res){								
								if(value == '1')
									return '已批改';
								else if(value == '0')
									return '未批改';								
								
						}}
	
    	]]	 	
	});		
	

	

});

	