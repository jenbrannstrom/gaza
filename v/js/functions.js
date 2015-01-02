$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});

	// Set parameters
	var minutes = parseInt($('.form-wrap').attr('data-minutes'));
	var seconds = parseInt($('.form-wrap').attr('data-seconds'));

	var minutes = parseInt($('.box').attr('data-minutes'));
	var seconds = parseInt($('.box').attr('data-seconds'));

	show_box(minutes, seconds, '.form-wrap');
	show_box(minutes, seconds, '.box');

});

function show_box(minutes, seconds, _box) {
	var _interval = (minutes * 60)*1000 + seconds*1000;
	setTimeout( function(){
		$(_box).fadeIn(800);
	}, _interval);
}