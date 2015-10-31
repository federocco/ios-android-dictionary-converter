$(document).ready(function() {
	console.log("ready!");

	$.ajaxSetup({
		type : 'POST',
		url : '/server/converter.php',
		dataType : 'json',
		error : function(xhr) {
			console.log(xhr);
		},
		complete : function(xhr) {
			console.log('success');
		}
	});

	$("#android-to-ios").on("click", function() {
		
		var inputText = $("#textarea-android").val();
		
		
		$.ajax({
			data : {
				text : inputText
			},
			complete : function(xhr) {
				console.log('my response');
			},
			success : function(jsondoc) {
				console.log('success');
				
				$("#textarea-ios").val(jsondoc.result);
			}
		});
	});
});
