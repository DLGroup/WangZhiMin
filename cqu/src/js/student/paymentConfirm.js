// JavaScript Document
$(function(){
	
	$("#eduBackgroud").datagrid({
		url: 'paymentConfirm.json',
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
			{field:'major',title:'所选专业',width:100},
			{field:'tuition',title:'学费(元)',width:100},
			{field:'status',title:'状态',width:40,sortable:true,
							formatter:function(value,res){
								
								if(value == '2')
									return '已确认';
								if(value == '1')
									return '已缴费';
								if(value == '0')
									return '未缴费';
								
						}},
			{field:'opt',title:'操作',width:106,align:'center', rowspan:2,
						formatter:function(value,rec){
							return '<span style="color:red"><a href="#"><img src="../../images/remove.png" alt="删除"/>删除</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick="view();"><img src="../../images/modify.png"/>查看</a>'
							+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onClick="show();"><img src="../../images/tip.png"/>确认</a>'
							+'</span>';
							
						}
					}
    	]] ,toolbar:[{
					text:'批量审批',
					iconCls:'icon-add',
					handler:function(){
					//	window.location.href = 'studentInfo.html';
					show();
					}
				}] 	  	
	});	
	
	

});

//查看缴费情况
function view (){
window.location.href = 'paymentInfo.html';

}
	
//显示弹出框
function show(){
		
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
