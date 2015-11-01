var appInit = function() {
	$.ajaxSetup({
		type : 'POST',
		url : '/server/converter.php',
		dataType : 'json',
		error : function(xhr) {
			console.log(xhr);
		},
		complete : function(xhr) {
			//
		}
	});

	$(".text-source").val("");
	$(".result-box").hide();

	$("#convert-btn").on(
			"click",
			function() {
				var inputText = $(".text-source").val();
				$.ajax({
					data : {
						text : inputText
					},
					complete : function(xhr) {
						//
					},
					success : function(jsondoc) {
						if (jsondoc.status == "ok") {
							if (typeof jsondoc.result != 'undefined') {

								var string = "";
								var counter = 0;
								for ( var x in jsondoc.result) {
									counter++;
									string += '"' + jsondoc.result[x].name
											+ '" = "' + jsondoc.result[x].value
											+ '"; <br>';
								}

								$(".result-panel .result-text").html(string);
								$(".stats .rows").text(counter);
								$(".result-box").show();

							}
						}
						else{
							console.log("Error");
						}
					}
				});
			});
}

$(document).ready(appInit());