$.alert = function(w, msg) {
	var $wrap;
	$wrap = $('<div>', {
		'class': 'moyi-alert',
		html: '<b>&#215;</b><p></p>'
	});

	$wrap.find("b").css({
		cursor: 'pointer',
		float: 'right',
	});
	$wrap.find('p').css({
		padding: '8px 8px 4px',
		color: '#666',
		'text-align': 'center'
	});

	var offset = 0;
	var $moyiAlert = $("body .moyi-alert");
	if ($moyiAlert.length > 0) {
		offset = $($("body .moyi-alert")[$moyiAlert.length - 1]).offset().top + $($moyiAlert[$moyiAlert.length - 1]).height() + 10;
	} else {
		offset = ($(window).height() - $wrap.height()) / 3;
	};
	$wrap.find('p').html(msg);
	$wrap.css({
		position: 'absolute',
		top: offset + 'px',
		left: (($(window).width() - w) / 2) + 'px',
		display: 'none',
		width: w + 'px',
		border: 'solid #9547DD 4px',
		background: '#F0FBEB',
		zIndex: '999999'
	});
	$wrap.appendTo('body');
	$wrap.fadeIn("slow");
	// 关闭按钮
	$('.moyi-alert').on('click', 'b', function(event) {
		event.preventDefault();
		$(this).parent().remove();
	});
};