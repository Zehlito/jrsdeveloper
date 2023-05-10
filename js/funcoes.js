function fechaVideo(){
	$("#videoVer").fadeOut(100);
	
	
}

function abreVideo(urlv){
	$("#videoVer").fadeIn(500);
	ajaxFunction(document.getElementById('videoVer'),'https://lyte.com.br/videover.php?url='+urlv);
	
}
function valida_trab()
{
  var nome = document.contatoc.nome.value
 

  var telefone = document.contatoc.fone.value;
 
  
 
  if ((nome=="")||(telefone=="")||(nome=="Nome")||(telefone=="Telefone"))
  {
    
	
	if((nome=="")||(nome=="Nome"))document.getElementById('nome').style.background='#FFE3BB';
	if((telefone=="")||(telefone=="Telefone"))document.getElementById('fone').style.background='#FFE3BB';
	
  }
var txtc = document.contatoc.email.value;
   if ((txtc.length != 0) && (txtc.indexOf("@") < 1) || (txtc==""))
  {
    alert('Email invalido');
	    document.contatoc.email.focus();
	return false;
  }
document.forms['contatoc'].submit();
}

function valida_orc()
{
  var nome = document.contatoc.nome.value
 

  var telefone = document.contatoc.fone.value;
 
    var mens = document.contatoc.mensagem.value;
	 var prod = document.contatoc.prod.value;
 
  if ((nome=="")||(telefone=="")||(mens=="")||(nome=="Nome")||(telefone=="Telefone")||(mens=="Mensagem"))
  {
    
	
	if((nome=="")||(nome=="Nome"))document.getElementById('nome').style.background='#FFE3BB';
	if((telefone=="")||(telefone=="Telefone"))document.getElementById('fone').style.background='#FFE3BB';
	
	if((mens=="")||(mens=="Mensagem"))document.getElementById('mensagem').style.background='#FFE3BB';
	return false;
  }
var txtc = document.contatoc.email.value;
   if ((txtc.length != 0) && (txtc.indexOf("@") < 1) || (txtc==""))
  {
    alert('Email invalido');
	    document.contatoc.email.focus();
	return false;
  }
document.forms['contatoc'].submit();
}

function fecha_ligamos(){
	
$(document).ready(function() {
			$("#tool").fadeOut(600);
			
			
		});
	$(document).ready(function() {
			$("#ligamos").fadeOut(600);
		});
	
	
}
function abre_ligamos(){
	var wip=$(window).width()
	
	wip=wip/2-350;
	
	
	$(document).ready(function() {
			$("#tool").fadeIn(600);
			
			
		});
	document.getElementById('ligamos').style.left=wip+'px';
	$(document).ready(function() {
			$("#ligamos").fadeIn(600);
			
			
		});
	//setCookie('ver', 'sim', 1);
}



function abreMenud1(){
	 	
	  $(".menu_link_d1").fadeIn(600);
 }

function abreOrc(){
	 	
	  $(".box-orc-out").fadeIn(600);
 }


function abreMenud2(){
	 	
	  $(".menu_link_d2").fadeIn(600);
 }
 function abreMenud3(){
	 	
	  $(".menu_link_d3").fadeIn(600);
 }
 var au=0;
  function abreSuperMenu(){
	 
	 if(au==0){$(".menu_dev_out").fadeIn(600);au=1}
			else{$(".menu_dev_out").fadeOut(600);au=0}	
	 
 }


function valida_orcamento()
{
	
	 var razao = document.orcamento.razao.value
  if (razao=="")
  {
    alert(" Nome!");
    document.orcamento.razao.focus();
    return false
  }
  
  
 
var txt = document.orcamento.email.value;
  if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)) || (txt==""))
  {
    alert('Email invalido');
	    document.orcamento.email.focus();
	return false;
  }
  var telefone = document.orcamento.telefone.value;
 
  if (telefone=="")
  {
    alert("Informe seu  telefone!");
    document.orcamento.fone.focus();
    return false
  }

   
 
  


document.forms['orcamento'].submit();

}





function montaCarrinho(){

var quantidade=0;

quantidade=document.getElementById('quantidade').value;
var nome=document.getElementById('nomec').value;
var car=document.getElementById('idc').value;




var q="id="+car+"&n="+nome+"&q="+quantidade;

			
			
				window.location='https://intecparts.com.br/monta_carrinho.php?'+q; 
					
								
}


 function verCarrinho(){
	 
	window.location='https://intecparts.com.br/carrinho'; 
	 
 }


$(document).ready(function(){
	$('.mestra_img').animate({"height":"135","padding":"0"}, 1500);
	
	
	
	
	
	
 });

function alteraFoto(foto){
	
	document.getElementById('fofodest').src='fotos/'+foto;
	
}
function abreProdutos(cat,nome){
	window.location='produtos.php?cat='+cat+'&ncat='+nome;	
	
}
function busca(busca){

window.location='produtos.php?busca='+busca;	
}

function busca2(){
var bb=document.getElementById('fbusca').value;
window.location='produtos.php?busca='+bb;	
}
function trocaMarca(){
	
	
    $('.jcarousel-skin-tango2 .jcarousel-next-horizontal').trigger('click');
	 $('.jcarousel-skin-tango3 .jcarousel-next-horizontal').trigger('click');

	setTimeout(trocaMarca,4000)
	
}



function valida_curriculo()
{
  var nomec = document.curriculo.nomec.value
  if ((nomec=="")||(nomec=='Nome'))
  {
    alert("Informe seu nome!");
    document.curriculo.nomec.focus();
    return false
  }
var txtc = document.curriculo.emailc.value;
  if ((txtc.length != 0) && ((txtc.indexOf("@") < 1) || (txtc.indexOf('.') < 7)) || (txtc==""))
  {
    alert('Email invalido');
	    document.curriculo.emailc.focus();
	return false;
  }
  var telefonec = document.curriculo.fonec.value;
 
  if ((telefonec=="")||(telefonec=='Telefone'))
  {
    alert("Informe seu  telefone!");
    document.curriculo.fonec.focus();
    return false
  }

   
 var end = document.curriculo.end.value;

  if( (end=="")||(end=='Endere�o'))
  {
    alert("Informe seu endereco!");
    document.curriculo.end.focus()
    return false
  }
  
  var quali = document.curriculo.quali.value;
 
  if( (quali=="")||(quali=='Qualifica��o'))
  {
    alert("Informe sua Qualifica��o!");
    document.curriculo.quali.focus()
    return false
  }
  
  var curriculo_file = document.curriculo.curriculo_file.value;
 
  if (curriculo_file=="")
  {
    alert("Anexe seu curriculo!");
    document.curriculo.curriculo_file.focus()
    return false
  }
  
   

document.forms['curriculo'].submit();

}

function valida_falef()
{
  var nome = document.contatof.nomef.value
  if ((nome=="Nome")||(nome==''))
  {
    alert("Informe seu nome!");
    document.contatof.nomef.focus();
    return false
  }
var txtc = document.contatof.emailf.value;
  if ((txtc.length != 0) && ((txtc.indexOf("@") < 1) || (txtc.indexOf('.') < 7)) || (txtc==""))
  {
    alert('Email invalido');
	    document.contatof.emailf.focus();
	return false;
  }
  var telefone = document.contatof.fonef.value;
 
  if ((telefone=="Telefone")||(telefone==''))
  {
    alert("Informe seu  telefone!");
    document.contatof.fonef.focus();
    return false
  }

   
 
  
   var mens = document.contatof.mensagemf.value;
 
  if ((mens=="Mensagem")||(mens==''))
  {
    alert("Digite sua mensagem!");
    document.contatof.mensagemf.focus()
    return false
  }

document.forms['contatof'].submit();

}


function valida_fale()
{
  var nome = document.contatoc.nome.value
 

  var telefone = document.contatoc.fone.value;
 
    var mens = document.contatoc.mensagem.value;
 
  if ((nome=="")||(telefone=="")||(mens=="")||(nome=="Nome")||(telefone=="Telefone")||(mens=="Mensagem"))
  {
    
	
	if((nome=="")||(nome=="Nome"))document.getElementById('nome').style.background='#FFE3BB';
	if((telefone=="")||(telefone=="Telefone"))document.getElementById('fone').style.background='#FFE3BB';
	
	if((mens=="")||(mens=="Mensagem"))document.getElementById('mensagem').style.background='#FFE3BB';
	return false;
  }
var txtc = document.contatoc.email.value;
   if ((txtc.length != 0) && (txtc.indexOf("@") < 1) || (txtc==""))
  {
    alert('Email invalido');
	    document.contatoc.email.focus();
	return false;
  }
 ajaxFunction(document.getElementById('fale'),'leva-contato.php?nome='+nome+'&email='+txtc+'&fone='+telefone+'&mensagem='+mens);
 document.getElementById('nome').value='Nome';
 document.getElementById('email').value='E-mail';
 document.getElementById('fone').value='Telefone';
 document.getElementById('mensagem').value='Mensagem';
}


// JavaScript Document

function fim(){
	$('#fim').fadeIn(1000);
 $('html, body').animate({
    scrollTop: $("#fim").offset().top
}, 1000);	
	
	
	
}

function fechaIndique(){
	alert('nana');
	$('#mask').hide();
		$('.window').hide();
}

$(document).ready(function() {	
 
	$('a[name=modal]').click(function(e) {
		e.preventDefault();
		
		var id = $(this).attr('href');
	
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		$('#mask').css({'width':maskWidth,'height':maskHeight});
 
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		$(id).css('top',  60);
		$(id).css('left', winW/2-$(id).width()/2);
	
		$(id).fadeIn(2000); 
	
	});
	
	$('.window .close').click(function (e) {
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});		
	
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});			
	
});
 
function limpaCampos(campo,valor){
	
	var valorc=document.getElementById(campo).value;

	if(valorc==valor)document.getElementById(campo).value='';
	
	
}

function abreDepoimento(){
	 $('html, body').animate({
    scrollTop: $("html").offset().top
}, 4000)
}

function trocaPagina(url){
	
	
	
	window.open(url,'_blank');
	
}
function trocaIndique(id,nome){
    
	  ajaxFunction(document.getElementById('indique_curso'),'indiquef.php?id='+id+'&nome='+nome);
	 $('html, body').animate({
    scrollTop: $("html").offset().top
}, 4000)
 }


function restauraCampos(campo,valor){
	
	var valorc=document.getElementById(campo).value;

	if(valorc=='')document.getElementById(campo).value=valor;
	
	
}

function limpaForm(){
	document.getElementById('limpa').click();
}
function abrePagina(pag){
	
	window.location=pag;	
}
function abreArea(area){
	
	window.location='?area='+area;	
}

function mostraSub(s){
	//alert(s);
	 ajaxFunction(document.getElementById('sub'),'sub.php?id='+s);	 
	
}
function mostraSubs(s){
	//alert(s);
	 ajaxFunction(document.getElementById('sub'),'subs.php?id='+s);	 
	
}

function abreDetalhes(id){
	
		 ajaxFunction(document.getElementById('mostra_d'),'detalhes_cursos.php?id='+id);
		 $('html, body').animate({
    scrollTop: $("body").offset().top
}, 1);
		
}
function abreComprar(id){
	
		 ajaxFunction(document.getElementById('mostra_d'),'detalhes_comprar.php?id='+id);
		 $('html, body').animate({
    scrollTop: $("body").offset().top
}, 1);
		
}

function abreDetalhesProdutos(id){
	
		 ajaxFunction(document.getElementById('mostra_d'),'detalhes_produtos.php?id='+id);
		 $('html, body').animate({
    scrollTop: $("body").offset().top
}, 1);
		
}

function abreDetalhesEspecial(id){
	
		 ajaxFunction(document.getElementById('mostra_d'),'detalhes_promocao.php?id='+id);
		 $('html, body').animate({
    scrollTop: $("body").offset().top
}, 1000);
		
}

function ChangeClass(objAttrib,NameClass)
{
//Tratamento para FF
if ((!document.all)&&(document.getElementById))
{
objAttrib.setAttribute("class",NameClass);
} 
//Tratamento para I.E
if ((document.all)&&(document.getElementById)){
objAttrib.setAttribute("className",NameClass);
}
}


function limpaEmail(vlr){
	if(vlr=='E-mail')
	document.getElementById('input_news').value='';
	if(vlr=='')
	document.getElementById('input_news').value='E-mail';
	
}

function limpaLogin(vlr){
	if(vlr=='Login')
	document.getElementById('top_login').value='';
	if(vlr=='')
	document.getElementById('top_login').value='Login';
	
}
function limpaSenha(vlr){
	if(vlr=='Senha')
	document.getElementById('top_senha').value='';
	if(vlr=='')
	document.getElementById('top_senha').value='Senha';
	
}

function voltar(){

window.history.go(-1);
	
}

function animeObras(an){
	
	$('#obrasbox1').fadeOut(0);
	$('#obrasbox2').fadeOut(0);
	$('#obrasbox3').fadeOut(0);
	$('#obrasbox'+an).fadeIn(600);
	
	$("#obrasl1").removeClass("obrasboxon");
	$("#obrasl2").removeClass("obrasboxon");
	$("#obrasl3").removeClass("obrasboxon");
	$("#obrasl1").addClass("obrasbox");
	$("#obrasl2").addClass("obrasbox");
	$("#obrasl3").addClass("obrasbox");
	
	$("#obrasl"+an).removeClass("obrasbox");
	$("#obrasl"+an).addClass("obrasboxon");
	
}

function animeBox(){
	

	 $("#menu3").animate({"height": "105px"}, 600);
	 $('#menu31').fadeIn(600);	
	  $('#menu32').fadeIn(600);	
	
	
}

function animeBoxOff(d){
	
	 
 $("#menu3").animate({"height": "35px"}, 600);
	 $('#menu31').fadeOut(600);	
	  $('#menu32').fadeOut(600);	
	
}





function effectmenu(id){

	
}

function effect(id){
	


	$("#"+id).animate({
        opacity: 0.5,

       
        
      }, 700 )
}
function effect2(id){
	


	$("#"+id).animate({
        opacity: 1,
       
       
      }, 500 )
}

 function moveCorretorI(){
	 
	  $("#box_cor").animate({"top": "+=290px"}, 1200);
	 // document.getElementById('$box_cor')style.display='scroll';
	 // document.getElementById('$box_cor').style.position='fixed';
	 
	 //fixaCorretor = setTimeout('fixa()', 1500);
	 //$("#box_cor").fadeOut(600);
	 timeCorretor = setTimeout('fixa()', 1200);
	 
	 
 }
 function moveLine(line){


		var pos= document.getElementById('top_line_effect').offsetLeft;
	 	var mix=0;
	if(line==1){
		
		$("#top_line_effect").animate({
    			left:320,
    			width:60},600);}
		
		if(line==2){
			
		
		$("#top_line_effect").animate({
    			left:400,
    			width:72},600);}
		if(line==3){
			
		
		$("#top_line_effect").animate({
    			left:498,
    			width:60},600);}
		
		if(line==4){
			
		
		$("#top_line_effect").animate({
    			left:580,
    			width:72},600);}
		
		if(line==5){
			
		
		$("#top_line_effect").animate({
    			left:672,
    			width:40},600);}
		
		if(line==6){
			
		
		$("#top_line_effect").animate({
    			left:735,
    			width:115},600);}
		
		if(line==7){
			
		
		$("#top_line_effect").animate({
    			left:880,
    			width:70},600);}
}
 function fixa(){
	 
	 document.getElementById('box_cor').style.position='fixed';
 }
 function fechaOnline(){
	 	
	  $("#box_cor").fadeOut(600);
 }
 function abreLink(linke){
	 
	 
	
	  ajaxFunction(document.getElementById('destaque'),linke);	 
 }
 function abrePerfil(){
	 window.location='seuperfil.php'; 
	 
 }
 
 function movePagina(pag){
  $('html, body').animate({
    scrollTop: $("#"+pag).offset().top
}, 1000);

}

 
 function abreProduto(id){
	 
	window.location='produto.php?id='+id; 
	 
 }
 
 

 
function ajaxFunction(elemento,pagina) {
elemento.style.visibility = 'visible';
elemento.innerHTML = '<img src="https://www.sgportas.com.br/img/loader_mini.gif">';
var xmlhttp;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else 
	if (window.ActiveXObject){ // code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		else{
			alert("Your browser does not support XMLHTTP!");
			}
xmlhttp.onreadystatechange=function(){
									if (xmlhttp.readyState==4){
										elemento.innerHTML = xmlhttp.responseText;
										}
									}
xmlhttp.open("GET",pagina,true);
xmlhttp.send(null);
}





var t;
var l = 0;
         
function roda_dir() {
	

    l = l - 10;
        //alert(largura);

//document.getElementById('seta_dir').className='dir';
document.getElementById('barra').style.left = l+'px';
if (navigator.appName != 'Microsoft Internet Explorer') 
	t = setTimeout('roda_dir()',80);
	else
	t = setTimeout('roda_dir()',100);
	
}

function roda_esq() {
//document.getElementById('seta_esq').className='esq';
if (l < 0 ) {
l = l + 10;
document.getElementById('barra').style.left = l+'px';
if (navigator.appName != 'Microsoft Internet Explorer') 
	t = setTimeout('roda_esq()',80);
	else
	t = setTimeout('roda_esq()',100);
}
}

function pararoda() {
document.getElementById('seta_dir').className='dir_40';
document.getElementById('seta_esq').className='esq_40';
clearTimeout(t);
}
var add='';
function addVer(v_num)

{
	add+=v_num;
	alert(add);
	
	
}


function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
  {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function checkCookie()
{
var username=getCookie("username");
if (username!=null && username!="")
  {
  alert("Welcome again " + username);
  }
else 
  {
  username=prompt("Please enter your name:","");
  if (username!=null && username!="")
    {
    setCookie("username",username,365);
    }
  }
}