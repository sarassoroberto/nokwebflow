function form_searching(e){form_data=""==e?document.getElementById("form_data").value:document.getElementById("form_data_"+e).value,form_datas=form_data.split("___"),form_id=form_datas[0],form_field=form_datas[1],form_landing=form_datas[3],form_values=form_field.split(","),search_values="";for(var a=0;a<form_values.length;a++){"checkbox"==$("#form_field_"+form_values[a]).attr("type")?1==$("#form_field_"+form_values[a]+":checked").prop("checked")?search_values=search_values+"&f"+form_values[a]+"=1":search_values=search_values+"&f"+form_values[a]+"=0":search_values=search_values+"&f"+form_values[a]+"="+document.getElementById("form_field_"+form_values[a]).value.replace(/^\s+|\s+$/g,"")}result=form_landing+"?q="+form_id+search_values,window.location=result}function form_select_refresh(e,a,t,_){form_data=""==_?document.getElementById("form_data").value:document.getElementById("form_data_"+_).value,form_datas=form_data.split("___"),form_path=form_datas[2];var l={form_field_id:e,form_field_value:a,form_field_id_child:t};return $.ajax({type:"POST",url:form_path+"/frontend/functions_search_refresh.php",data:l,success:function(e){$("#"+t).html(e)}}),!1}function form_validate(e){if(void 0!==(a=$("#"+e).attr("min"))&&!1!==a){if(a.includes("/"))if(a.includes(":")){a=a.split(" "),attr_min_date=a[0].split("/");var a=new Date(attr_min_date[2]+"/"+attr_min_date[1]+"/"+attr_min_date[0]+" "+a[1]).getTime();t=document.getElementById(e).value.split(" "),my_value_date=t[0].split("/");var t=new Date(my_value_date[2]+"/"+my_value_date[1]+"/"+my_value_date[0]+" "+t[1]).getTime()}else{a=a.split("/");a=new Date(a[2]+"/"+a[1]+"/"+a[0]).getTime();t=document.getElementById(e).value.split("/");t=new Date(t[2]+"/"+t[1]+"/"+t[0]).getTime()}else if(a.includes(":")){a=(a=a.split(":"))[0]+a[1],t=(t=document.getElementById(e).value.split(":"))[0]+t[1];a=parseInt(a),t=parseInt(t)}else a=a,t=$("#"+e).val();""!=t&&t<a&&(document.querySelector("#"+e).setCustomValidity($("#"+e).attr("title")),form_validation="ko")}if(void 0!==(_=$("#"+e).attr("max"))&&!1!==_){if(_.includes("/"))if(_.includes(":")){_=_.split(" "),attr_max_date=_[0].split("/");var _=new Date(attr_max_date[2]+"/"+attr_max_date[1]+"/"+attr_max_date[0]+" "+_[1]).getTime();t=document.getElementById(e).value.split(" "),my_value_date=t[0].split("/");t=new Date(my_value_date[2]+"/"+my_value_date[1]+"/"+my_value_date[0]+" "+t[1]).getTime()}else{_=_.split("/");_=new Date(_[2]+"/"+_[1]+"/"+_[0]).getTime();t=document.getElementById(e).value.split("/");t=new Date(t[2]+"/"+t[1]+"/"+t[0]).getTime()}else if(_.includes(":"))_=(_=_.split(":"))[0]+_[1],t=(t=document.getElementById(e).value.split(":"))[0]+t[1];else _=_,t=$("#"+e).val();""!=t&&t>_&&(document.querySelector("#"+e).setCustomValidity($("#"+e).attr("title")),form_validation="ko")}return form_validation}function form_input_refresh(e){document.querySelector("#"+e).setCustomValidity("")}function form_sending(e){form_validation="ok",form_data=""==e?document.getElementById("form_data").value:document.getElementById("form_data_"+e).value,form_datas=form_data.split("___"),form_id=form_datas[0],form_field=form_datas[1],form_path=form_datas[2],form_landing=form_datas[3],form_values=form_field.split(",");for(var a=0;a<form_values.length;a++)form_validate("form_field_"+form_values[a]);if("ok"==form_validation){$.ajaxSetup({cache:!1});var t={form_id:form_id,form_field:form_field,form_landing:form_landing};for(a=0;a<form_values.length;a++){var _="form_field_"+form_values[a];if("checkbox"==$("#form_field_"+form_values[a]).attr("type"))if(1==$("#form_field_"+form_values[a]+":checked").prop("checked"))var l="ok";else l="";else l=document.getElementById("form_field_"+form_values[a]).value.replace(/^\s+|\s+$/g,"");l=l.replace(/"/g,"&quot;");t[_]=l}return $.ajax({type:"POST",url:form_path+"/frontend/functions_send.php",data:t,success:function(a){"0"!=a?window.location=a:document.getElementById("form_alert_"+e).style.display="block"}}),!1}}function form_saving(e){form_validation="ok",form_data=""==e?document.getElementById("form_data").value:document.getElementById("form_data_"+e).value,form_datas=form_data.split("___"),form_id=form_datas[0],form_field=form_datas[1],form_path=form_datas[2],form_landing=form_datas[3],language_num=form_datas[4],form_values=form_field.split(",");for(var a=0;a<form_values.length;a++){if("1"==$("#form_field_"+form_values[a]+"_1").attr("data-multilanguage"))for(var t=1;t<=language_num;t++)form_validate("form_field_"+form_values[a]+"_"+t);else form_validate("form_field_"+form_values[a]+"_1")}if("ok"==form_validation){$.ajaxSetup({cache:!1});var _={form_id:form_id,form_field:form_field,form_landing:form_landing};for(a=0;a<form_values.length;a++){if("1"==$("#form_field_"+form_values[a]+"_1").attr("data-multilanguage"))for(t=1;t<=language_num;t++){var l="form_field_"+form_values[a]+"_"+t,r=(r=document.getElementById("form_field_"+form_values[a]+"_"+t).value.replace(/^\s+|\s+$/g,"")).replace(/"/g,"&quot;");_[l]=r}else{l="form_field_"+form_values[a]+"_1";if("checkbox"==$("#form_field_"+form_values[a]+"_1").attr("type"))if(1==$("#form_field_"+form_values[a]+"_1:checked").prop("checked"))r="1";else r="";else r=document.getElementById("form_field_"+form_values[a]+"_1").value.replace(/^\s+|\s+$/g,"");r=r.replace(/"/g,"&quot;");_[l]=r}}return $.ajax({type:"POST",url:form_path+"/frontend/functions_save.php",data:_,success:function(a){"0"!=a?window.location=a:document.getElementById("form_alert_"+e).style.display="block"}}),!1}}