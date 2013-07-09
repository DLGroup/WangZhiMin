var viewTab="01";
var isView = false;
$(function(){
	
	$("#submit").button();
	$("#cancel").button();
	
	$("div[id^='c_']:gt(0)").css("display","none");
	
	$("#examAnnouncement").datagrid({
		url: 'examAnnouncement.json',
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
        	{field:'id',title:'考试公告编码',width:100},
			{field:'class',title:'考试班级',width:100},
			{field:'course',title:'考试课程',width:100},   
        	{field:'date',title:'考试时间',width:100},  
			{field:'adress',title:'考试地点',width:100},
        	{field:'supervisor',title:'监考人员',width:100},
			{field:'creator',title:'创建人',width:100}
    	]]
	});	
	
	//添加考试公告
	//1.
	$("#add").click(function(){
		changetab("t_02");
		$("#examAnnouncementDetailTable :input:lt(8)").removeAttr("disabled").val("");
		$("#submit_Div").show();
	});
	
	//查看考试公告
	$("#view").click(function(){
		$("#submit_Div").hide();
		var $examAnnouncement = $("#examAnnouncement").datagrid("getSelected");
		if($examAnnouncement){
			//查看
			isView = true;
			changetab("t_02");
			setExamAnnouncementTable($examAnnouncement);
			$("#examAnnouncementDetailTable :input").attr("disabled","disabled");		
		}
	});
	
	//编辑
	//1.在查看中点击编辑
	//1.1在Datagrid中，选中一行点击编辑
	//2.使得课时能够编辑
	//2.1显示Tab2中的内容并设置其值
	//3.显示提交按钮
	$("#modify").click(function(){
		var $examAnnouncement = $("#examAnnouncement").datagrid("getSelected");
		if(isView){
			$("#examAnnouncementDetailTable :input:lt(8)").removeAttr("disabled");
			isView = false;
			$("#submit_Div").show();
		}
		if($examAnnouncement){
			changetab("t_02");
			setExamAnnouncementTable($examAnnouncement);
			$("#submit_Div").show();
		}
	});//编辑课时信息
	
});

function setExamAnnouncementTable($examAnnouncement){
	$("#id").val($examAnnouncement.id);
	$("#class").val($examAnnouncement.class);
	$("#course").val($examAnnouncement.course);
	$("#adress").val($examAnnouncement.adress);
	$("#supervisor").val($examAnnouncement.supervisor);
	$("#date").datebox("setValue",$examAnnouncement.date);
}

function changetab(id){
	id = id.replace("t_","");
	if(id!=viewTab){
		$("#c_"+viewTab).css("display","none");
		$("#t_"+viewTab).attr("class","taboff");
		$("#c_"+id).css("display","");
		$("#t_"+id).attr("class","tabon");
		viewTab = id;
	}
}