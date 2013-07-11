// JavaScript Document
$(function(){
	var worker_id = [
		{id:"zls", name:"周老师"},
		{id:"lls", name:"李老师"},
		{id:"zls", name:"朱老师"},
	];

	function editrow(target){  
    $('#eduBackgroud').datagrid('beginEdit', getRowIndex(target));  
	};  
	function deleterow(target){  
    $.messager.confirm('Confirm','Are you sure?',function(r){  
        if (r){  
            $('#eduBackgroud').datagrid('deleteRow', getRowIndex(target));  
        }  
    });  
	};  
	function saverow(target){  
    $('#eduBackgroud').datagrid('endEdit', getRowIndex(target));  
	};  
	function cancelrow(target){  
    $('#eduBackgroud').datagrid('cancelEdit', getRowIndex(target));  
	}; 
	
	$("#eduBackgroud").datagrid({
		url: '/src/admin/adminManage/admin.json',
		width: 'auto',
		height: 'auto',
		striped: true,
		singleSelect : true,
		fitColumns: true,
		nowrap: true, //超出范围隐藏
		loadMsg: "数据加载中，请稍后...",
		rownumbers:true,
		columns:[[  
        	{field:'id',title:'审批人员',width:100, 
        	formatter:function(value){
        		for (var i = 0; i < worker_id.length; i++){
        			if (worker_id[i].id == value) return products[i].name;
        		}
        		return value;
        	},
        	editor:{type: 'combobox', options: {
        		valueField:'id',
        		textField: 'name',
        		data: worker_id,
        		required: true
        	}}
        	},  
        	{field:'authority',title:'审批权限',width:100},
        	{field:'action',title:'操作',width:70,align:'center',  
                formatter:function(value,row,index){  
                    if (row.editing){  
                        var s = '<a href="#" onclick="saverow(this)">保存</a> ';  
                        var c = '<a href="#" onclick="cancelrow(this)">取消</a>';  
                        return s+c;  
                    } else {  
                        var e = '<a href="#" onclick="editrow(this)">编辑</a> ';  
                        var d = '<a href="#" onclick="deleterow(this)">删除</a>';  
                        return e+d;  
                    }  
                }  
            } 			
    	]],toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						$("#eduBackgroud").datagrid('appendRow', {
								id: "",
								authority: ""

						});
					}
				}] 	    	
	});	

});

	
