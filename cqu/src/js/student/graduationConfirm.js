// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'graduationConfirm.json',
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
			{field:'id',title:'学号',width:80}			
		]],
		columns:[[  
        	  
        	{field:'name',title:'学员姓名',width:40},  
        	{field:'rank',title:'性别',width:30},
			{field:'major',title:'所选专业',width:80},
			{field:'sumCredit',title:'结业学分',width:30},
			{field:'credit',title:'已获得学分',width:30},
			{field:'status',title:'状态',width:40,sortable:true,
							formatter:function(value,res){
								
								if(value == '2')
									return '已确认';
								else if(value == '1')
									return '已结业';
								else if(value == '0')
									return '未结业';
								
						}},
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#" onclick="remove()"><img src="../../images/remove.png" alt="删除"/>删除</a>'	
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick="view()"><img src="../../images/tip.png"/>查看</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick="confirm()"><img src="../../images/tip.png"/>确认</a>'
							+'</span>';
							
						}
					}
    	]] , toolbar:[{
					text:'批量确认',
					iconCls:'icon-add',
					handler:function(){
						confirm();
					}
				}], 		
	});	
	
	
});


function remove(){
	alert("remove");
}

function view(){
	window.location.href = 'graduationInfo.html';
}
function confirm(){
	$('#examine_profile_trigger').fancybox( {
		href: '#div_profile',
		showCloseButton: true,
		hideOnOverlayClick: false,
		scrolling: false,
		overlayShow: false,
		margin: 0,
		padding: 0
	}).trigger('click');
}


//关闭弹出框
function submit(){

$.fancybox.close();
}
