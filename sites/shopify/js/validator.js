function incluyeJs(file){
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}


//Aqui incluyo la encriptacion
incluyeJs('js/md5.js');
incluyeJs('js/sha1.js');
incluyeJs('jsNew/notify.min.js');

function ValidarCampos(){
	document.getElementById("divEstadoIconUser").innerHTML="";
	document.getElementById("divEstadoIconPass").innerHTML="";
	if(document.getElementById("password").value == ''){
		document.getElementById("form-group-pass").classList.remove('has-success');
		document.getElementById("form-group-pass").classList.add('has-error');
		document.getElementById("divEstadoIconPass").innerHTML="<span class=\"fa fa-times form-control-feedback\" aria-hidden=\"true\"></span>";
		$("#password").notify("Contraseña no válida","danger");
		
	}else{
		document.getElementById("form-group-pass").classList.remove('has-error');
		document.getElementById("form-group-pass").classList.add('has-success');
		document.getElementById("divEstadoIconPass").innerHTML="<span class=\"fa fa-check form-control-feedback\" aria-hidden=\"true\"></span>";
	}
		
	if(document.getElementById("username").value == ''){
		document.getElementById("form-group-user").classList.remove('has-success');
		document.getElementById("form-group-user").classList.add('has-error');
		document.getElementById("divEstadoIconUser").innerHTML="<span class=\"fa fa-times form-control-feedback\" aria-hidden=\"true\"></span>";
		$("#username").notify("Ingresa un usuario","danger");
		
	}else{
		document.getElementById("form-group-user").classList.remove('has-error');
		document.getElementById("form-group-user").classList.add('has-success');
		document.getElementById("divEstadoIconUser").innerHTML="<span class=\"fa fa-check form-control-feedback\" aria-hidden=\"true\"></span>";
	}
}


function dato(){
	var string;
	var blnEnviar = 1;
	if(document.getElementById("password").value == ''){
		//$("#password").notify("Contraseña no válida","danger");
		var blnEnviar = 0;
	}
		
	if(document.getElementById("username").value == ''){
		//$("#username").notify("Ingresa un usuario","danger");
		var blnEnviar = 0;
	}
	
	if(blnEnviar>0){
		if(document.getElementById("g-recaptcha-response").value==''){
			alert("Favor comprobar el Captcha");
		} else {
			string = hex_md5(document.getElementById("password").value);
			string = hex_sha1(string);
			//console.log(string);
			document.getElementById("password").value=string;
			document.forms[0].submit();
		}
	}
	
}