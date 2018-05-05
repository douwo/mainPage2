$(function(){
	titleZeroText_P = $("#titlezero").offset().top;
	titleOneText_P = $("#titleone").offset().top + 320;
	titleTwoText_P = $("#titletwo").offset().top + 320;
	$("#goTop").hide();
	$("#jianjie").html("<p>重庆（中美）海吉亚国际医院位于重庆大学城，与重庆大学一墙之隔。占地80亩，规划建筑面积8.6万方，床位1500张，总投资20亿人民币，按三级甲等医院的标准建立的一所集临床、科研、预防、教学、康复于一体的现代化国际医院,目前开放床位500张。</p>"+
	"<p>医院拥有全套进口CT、DR、钼靶、磁共振、PET-CT、直线加速器、陀螺刀、TOMO等大型医疗设备，为西南地区最大的外资医院，经重庆市卫计委批准设立，是沙坪坝区人民政府重点建设民生工程。</P>"+
	"<p>同时与国外多所知名大学建立长期战略合作伙伴关系，目前已开通与美国和日本多家医院国际会诊和转诊平台，如美国MD安德森癌症中心、斯坦福大学医学院、梅奥诊所、内布拉斯加州医学院，日本藤田大学医学院、癌症研究会有明医院、群马大学重粒子医学中心等。</p>"+
	"<p>我院拥有一批重庆市有突出贡献专家、市级学科带头人、硕士生职导师。医院医务人员大多来自市内及上海各大三甲医院。我院是以肿瘤治疗为特色的大型综合性医院，开设科室有：肿瘤内科、肿瘤放疗科、胸外科、胃肠外科、甲状腺乳腺科、肝胆外科、泌尿外科、皮肤科、耳鼻喉科、腹瘤中心、骨科、心内科、消化内科、呼吸内科、内分泌科、神经内科、妇科、中医科、体检中心，急诊科，重症医学科等临床科室。</p>"+
	"<p>本着以“让医疗更温暖”的院训，突出“说实话、办实事、讲诚信”的医院文化，为老百姓的健康保驾护航。医院以回馈社会、慈善为先的理念，按照二级医院的收费，让患者享受到三甲医院的医疗,也为有特殊需求的患者提供高端国际医疗服务。</p>")
})

$(".users-nav-title>li>a").on("click", function() {
	$(".users-nav-title>li").removeClass("active");
	$(this).parent("li").addClass("active");
})
$.get("text.json", function(result) {
	$.each(result.newsTitle, function(i) {
		$("#news>li:eq(" + i + ")>a>span:first").html(result.newsTitle[i]);
		$("#news>li:eq(" + i + ")>a>span:first").attr("title",result.newsTitle[i])
	});
	$.each(result.newsContent, function(i) {
		$("#newsContent" + (i + 1) + "_Text").html(result.newsContent[i]);
	});
})
$("#goTop").click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
})
$(document).scroll(function() {
	var top = $(document).scrollTop();
	if(top < 250) {
		$('#goTop').hide(300);
	} else {
		$('#goTop').show(300);
	}
//	if(top<titleOneText_P){
//		$("body").css("background-color","lightblue");
//	}else if(top<titleTwoText_P){
//		$("body").css("background-color","#5FBDCE");
//	}else{
//		$("body").css("background-color","#5f9ece");
//	}
})
$("#zero").click(function(){
	$('body,html').animate({
		scrollTop: titleZeroText_P
	}, 600);
})
$("#one").click(function(){
	$('body,html').animate({
		scrollTop: titleOneText_P
	}, 600);
})
$("#two").click(function(){
	$('body,html').animate({
		scrollTop: titleTwoText_P
	}, 600);
})
