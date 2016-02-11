var spos=
[
	
	{title:'AIRBUS GROUP',src:'AIRBUS_Group_Flat_RGB.png',type:'Title Sponsor'},
	{title:'Altair',src:'altair-logo.jpg'},
	{title:'ASCE',src:'ASCE_Section_India_signature.jpg'},
	{title:'ASK ME',src:'askme-logo.png'},
	{title:'Avanti',src:'avanti_logo_ALC_with_margin_logo_1000px_image_1446x884px.png'}
];

var cat=[
	{
		title:'Title Sponsor',
		spos:[
			{title:'',src:'200px-Juniper_Networks_logo.png'}
		]
	},
	{
		title:'Associate Title Sponsor',
		spos:[
			{title:'',src:'VMware_logo_blk_RGB_300dpi.jpg'},
		]
	},
	{
		title:'Powered By',
		spos:[
			{title:'',src:'cugl.jpg'}
		]
	},
	{
		title:'Major Sponsor',
		spos:[
		{title:'Banking Partner',src:'sbi.png'},
		{title:'Payment Portal Partner',src:'Townscript.png'}
		]
	},
	{
		title:'Events Partners',
		spos:[
			{title:'Presented By Sponsor, Closing Night<br>Title Sponsor, Rule the Sky<br>Title Sponsor, Sky Sparks',src:'AIRBUS_Group_Flat_RGB.png'},
			{title:'Title Sponsor, Software Corner',src:'Samsung-Logo-PNG-blue-small.png'},
			{title:'Title Sponsor, Software Corner',src:'Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg'},
			{title:'Events Partner',src:'altair-logo.jpg'},
			{src:'ASCE_Section_India_signature.jpg'},
			{src:'askme-logo.png'},
			{title:'Major Events Partner',src:'Campus France.jpg'},
			{title:'Title Sponsor, IHPC',src:'cdac.png'},
			{title:'Logistics Partner',src:'DHL.png'},
			{title:'Co Title Sponsor, Software Corner',src:'Indeed_Logo_Untitled.png'},
			{title:'Title Sponsor, Bridge Design Challenge',src:'2.jpg'},
			{title:'Events Partner', src:'Mahindra Rise.jpg'},
			{title:'Powered By, 29 States',src:'mytaxiindia.jpg'},
			{title:'Education Partners', src:'10959279_10203721436857024_58091321_n.jpg'},
			{title:'Powered By Software Corner',src:'SAP_grad_C_pref.png'},
			{title:'Associate Title IOT',src:'Winjitlogo_White.psd.png'},
			{title:'Prizes Partner, Business events',src:'icici.jpg'},
			{src:'union bank.jpg',display:false}
			
		]
	},
	{
		title:'Other Sponsor',
		spos:[
			{title:'Music Accessories Partner',src:'zebronics1.png'}
		]
	},
];
var img_pre='img/spo/';
var updateSpo=function(){
	var main=$('.main-spos');
	for(var j=0;j<cat.length;j++){
		var spos=cat[j].spos;
		var heading=$('<div>');
		heading.addClass('quote');
		heading.append($('<span>'));
		var quote=$('<div>');
		quote.html(cat[j].title);
		heading.append(quote);
		main.append(heading);
		heading.append($('<span>'));
		for(var i=0;i<spos.length;i++){
			if(spos[i].display==false){
				continue;
			}
			var n=$('<div>');
			n.addClass('list-item');
			var img=$('<img>');
			img.attr('src',img_pre+spos[i].src);
			var title=$('<h3>');
			if(spos[i].title!=undefined){
				title.html(spos[i].title);
			}
			var link=$('<a>');
			link.addClass('list-item-link');
			link.append(img);
			link.append(title);
			n.append(link);
			main.append(n);
		}
	}
}
window.onload=updateSpo;