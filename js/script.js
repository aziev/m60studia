jQuery.noConflict();

jQuery(document).ready(function(){

	jQuery('.item').children('a').hover(function(){
		jQuery(this).prev().animate({'opacity':0.5},{duration:300,queue:false});
	},function(){
		jQuery(this).prev().animate({'opacity':1},{duration:300,queue:false});
	});
	
	jQuery(document).scroll(function(){
		var options= {duration:150,queue:false,easing:'linear'};
		if ( (jQuery('body').scrollTop() >= 350 || jQuery('html').scrollTop() >= 350) && jQuery('.fixed').css('height')!=130)
		{
			jQuery('#logo').animate({'height':'60%'},options);
			jQuery('.fixed').animate({'height':110},options);
			jQuery('.button').animate({'padding-top':'40px','height':'70px'},options);
		}else{
			jQuery('#logo').animate({'height':'99px'},options);
			jQuery('.fixed').animate({'height':130},options);
			jQuery('.button').animate({'padding-top':'50px','height':'80px'},options);
		}
	});
	
	jQuery('button.header-button').click(function(){
		scrollHeight= parseInt(jQuery('body').css('height')) - parseInt(jQuery(window).height());
		jQuery('html,body').animate({scrollTop : scrollHeight},{duration:800,erasing:'linear'});
		window.setTimeout(jQuery('#name').focus(),1000);
	});
	
	jQuery('form').submit(function(){
		alert('Спасибо! Заявка отправлена.');
		return true;
	});	
});
function scrollingTo(id)
{
	var scr = 0;
	jQuery(id).prevAll().each(function(index,element){
		scr+= jQuery(element).outerHeight();
	});
	console.log(scr);
	jQuery('body,html').animate({scrollTop : scr + 20},{duration:1200,erasing:'linear'});
	//jQuery('body,html').scrollTop(scr + 20); /* на 20 уменьшилась высота меню*/
	return false;
}