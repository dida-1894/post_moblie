$(document).ready(function(){
	var count = 1;
	function load(assort){
		function draw() {
			count++;
			var back = window['back'] = function(data) {
				function toArray(obj) {
					var arr = [];
					for (i in obj) {
						if(obj.hasOwnProperty(i)) arr.push(obj[i]);
					}
					return arr;
				}
				var list = {list: toArray(data)};
				var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
				var views = Mustache.render(template, list);
				console.log(list);
				$('#data').append(views);
			};
			$.getScript('http://post.ecjtu.net/api.php/list?callback=back&'+assort+'&limit=40&page='+count);	
				console.log("ready!");

		}
		if(count == 1) {
			console.log($('#data').scrollTop() + $('#data').height());
			if( $('#data').scrollTop() + $('#data').height() >= 1130 ){
				draw();
				console.log(count);
			}
		} else {
			if ($('#data').scrollTop() + $('#data').height() >= 1130*count) {
				draw();
				console.log(count);
			}
		}
	

	}

	$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&page=1', function(data) {
		function toArray(obj) {
			var arr = [];
			for (i in obj) {
				if(obj.hasOwnProperty(i)) arr.push(obj[i]);
			}
			return arr;
		}
		var list = {list: toArray(data)};
		var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
		var views = Mustache.render(template, list);
		$('#data').append(views);
	});
	$('#data').bind('scroll', function(){
		console.log("both");
		$contentLoadTriggered = false;
		load('');
	});
// south or north 
var more = $('.more');
	more.hide();
	$('#drop').on('click', function() {
		$('.data').click(function(){
		more.slideUp('fast');
	});
		more.slideDown('fast');
		$(".south a").on('click',function(event){
			event.preventDefault();
			$('#data ul').html('');
			$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=南区&page=1', function(data) {
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
			console.log(list);
		});
		count = 1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('area=南区');
			console.log("south");
		});
		more.slideUp('fast');
		});
		$(".north a").on('click',function(event){
			event.preventDefault();
			$('#data ul').html('');
			$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&area=北区&page=1', function(data) {
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
			console.log(list);
		});
		count = 1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('area=北区');
			console.log("north");
		});
		more.slideUp('fast');
		});

	});

	// type
	var type = $(".type");
	type.hide();
	$('#type').click(function () {
		type.slideDown('fast');
		$('.data').click(function(){
		type.slideUp('fast');
	});
		$(".parecal a").on('click',function(event){
		event.preventDefault();
		$("#data ul").html('');
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=包裹&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
		});
		count=1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('type=包裹');
		});
		type.slideUp("fast");
		});
		// letter
		$(".letter a").on('click',function(event){
		event.preventDefault();
		$("#data ul").html('');
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=挂号信&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
		});
		count=1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('type=挂号信');
		});
		type.slideUp("fast");
		});
		// print
		$(".print a").on('click',function(event){
		event.preventDefault();
		$("#data ul").html('');
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=印刷品&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
		});
		count=1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('type=印刷品');
		});
		type.slideUp("fast");
		});
		// moneyOrder
		$(".moneyOrder a").on('click',function(event){
		event.preventDefault();
		$("#data ul").html('');
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=汇款单&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
		});
		count=1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('type=汇款单');
		});
		type.slideUp("fast");
		});
		// return
		$(".return a").on('click',function(event){
		event.preventDefault();
		$("#data ul").html('');
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&limit=40&type=退件&page=1', function(data) {		
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
			var list = {list: toArray(data)};
			var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
			var views = Mustache.render(template, list);
			$('#data').append(views);
		});
		count=1;
		$('#data').bind('scroll', function(){
			$contentLoadTriggered = false;
			load('type=退件');
		});
		type.slideUp("fast");
		});
	});
	// search
	$('.search input').on('blur', function(){

		var name = $(this).val();
		$.getJSON('http://post.ecjtu.net/api.php/list?callback=?&key='+name, function(data){
			function toArray(obj) {
				var arr = [];
				for (i in obj) {
					if(obj.hasOwnProperty(i)) arr.push(obj[i]);
				}
				return arr;
			}
		
				var list = {list: toArray(data)};
				if (toArray(data).length > 0){
					var template = "<ul>{{#list}}<li class='info'><ul><li>{{addressee}}</li><li>{{area}}</li><li>{{type}}</li><li>{{time}}</li></ul></li>{{/list}}</ul>";
					var views = Mustache.render(template, list);				
					$('#data').html('').append(views);
				} else {
					$('#error').css('display', 'block');
					$('#data').html('<p>'+'对不起，暂时没有您的信息呦~'+'</p>');
					console.log("uuuu");
					
				}
			
		});
		// console.log(name);
		$(this).siblings('input').blur();
	});
	

})