var viewTab ="01";
var isView = false;
$(function(){
	
	$("div[id^=c_]:gt(0)").css("display","none");
	
	//添加详细弹出框
		$('#addOrEdit-detail').dialog({
			autoOpen: false,
			width: 900,
			modal: true,
			resizable: false,
			buttons: {
				"确定": function() {
					$(this).dialog("close");
				},
				"取消": function() {
					$(this).dialog("close");
				}
			}
		});//end添加详细弹出框
		
		//删除按钮弹出确认框
		$('#delCourseHour').dialog({
			autoOpen: false,
			width: 300,
			modal: true,
			resizable: false,
			buttons: {
				"删除": function() {
					$(this).dialog("close");
				},
				"取消": function() {
					$(this).dialog("close");
				}
			}
		});//end删除按钮弹出确认框
		
		
	
	$("#courseTimetable").datagrid({
		url: 'courseTimetable.json',
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
        	{field:'id',title:'课表编码',width:100},  
        	{field:'name',title:'课表名称',width:100}, 
			 {field:'creator',title:'创建人',width:100},
        	{field:'createTime',title:'创建时间',width:100},
			{field:'remark',title:'备注',width:100}    
    	]]  	
	});	
	//绑定添加事件
	$("#add").click(function(){
		$("#c_01").hide();
		$("#c_02").show();
		$("#veiwAndEdit-datagrid").hide();
		$("#add-datagrid").show();

		
		$("#name").val("");
		$("#remark").val("");

		$("#addCourseTimetableDetail").datagrid({
				url: '',
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
					{field:'cdate',title:'日期',width:100},  
					{field:'startTime',title:'开始时间',width:100},  
					{field:'endTime',title:'结束时间',width:100},  
					{field:'course',title:'课程名称',width:100},
					{field:'department',title:'部门',width:100},
					{field:'teacher',title:'老师姓名',width:100},
					{field:'remark',title:'备注',width:100}    
				]],
				toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						$('#addOrEdit-detail').attr("title","添加课时");
						$('#addOrEdit-detail').dialog('open');
					}
				},'-',{
					text:'编辑',
					iconCls:'icon-edit',
					handler:function(){
						if($("#addCourseTimetableDetail").datagrid("getSelected")){
							$('#addOrEdit-detail').attr("title","编辑课时");
							$('#addOrEdit-detail').dialog('open');
						}
					}
				},'-',{
					text:'删除',
					iconCls:'icon-remove',
					handler:function(){
						$('#delCourseHour').dialog('open');
						return false;
					}}  ]	
			});
	});
	
	//绑定查看事件
	//是否选中:1.选中则查看 2.未选中则不做任何事
	//选中后，取得courseTimetable中取得值，2.取得课程表的详细信息并展示
	$("#view").click(function(){
		var courseTimetable = $("#courseTimetable").datagrid("getSelected");
		if(courseTimetable){
			//查看
			viewTab = "02";
			isView = true;
			$("#t_01").attr("class","taboff");
			$("#t_02").attr("class","tabon");
			$("#c_01").hide();
			$("#c_02").show();
			$("#add-datagrid").hide();
			$("#veiwAndEdit-datagrid").show();
			$("#id").val(courseTimetable.id);
			$("#name").val(courseTimetable.name);
			$("#remark").val(courseTimetable.remark);
			$("#createTime").val(courseTimetable.createTime);
			$("#createTime").addClass("easyui-datebox");
			$("#viewCourseTimetable :input").attr("disabled","disabled");

			$("#veiwAndEditcourseTimetableDetail").datagrid({
				url: 'courseTimetableDetail.json',
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
					{field:'cdate',title:'日期',width:100},  
					{field:'startTime',title:'开始时间',width:100},  
					{field:'endTime',title:'结束时间',width:100},  
					{field:'course',title:'课程名称',width:100},
					{field:'department',title:'部门',width:100},
					{field:'teacher',title:'老师姓名',width:100},
					{field:'remark',title:'备注',width:100}    
				]],
				toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						$('#addOrEdit-detail').attr("title","添加课时");
						$('#addOrEdit-detail').dialog('open');
					}
				},'-',{
					text:'编辑',
					iconCls:'icon-edit',
					handler:function(){
						var temp = $("#veiwAndEditcourseTimetableDetail").datagrid("getSelected");
						if(temp){
							editDetail(temp);
							$('#addOrEdit-detail').attr("title","编辑课时");
							$('#addOrEdit-detail').dialog('open');
						}
					}
				},'-',{
					text:'删除',
					iconCls:'icon-remove',
					handler:function(){
						$('#delCourseHour').dialog('open');
						return false;
					}}  ]	
			});
			$("#veiwAndEdit-datagrid .datagrid-toolbar").css("display","none");
		}
	});
	//编辑课表信息
	$("#modify").click(function(){
		if(isView){
			$("#name").removeAttr("disabled");
			$("#remark").removeAttr("disabled");
			$("#veiwAndEdit-datagrid .datagrid-toolbar").css("display","");
			isView = false;
		}
	});
	
	
});

//编辑课时信息
//取得选中的课时信息放入到dialog里
function editDetail(courseHour){
	$("#date").datebox("setValue",courseHour.cdate);
	$("#startTime").datebox("setValue",courseHour.startTime);
	$("#endTime").datebox("setValue",courseHour.endTime);
	$("#course").val(courseHour.course);
	$("#courseHourRemark").val(courseHour.remark);
	$("#department").val(courseHour.department);
	$("#teacher").val(courseHour.teacher);	
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