function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(function () {
	var firstName = getParameterByName("fname");
	var lastName = getParameterByName("lname");
	var email = getParameterByName("email");
	var complianceNumber = getParameterByName("ca");

	$("#00N36000006wnhQ").val(complianceNumber);
	$("#first_name").val(firstName);
	$("#last_name").val(lastName);
	$("#email").val(email);
});