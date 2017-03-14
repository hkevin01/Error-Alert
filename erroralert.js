
/**
 * Displays error alert
 * @param jqXHR
 * @param exception
 * @param errorThrown
 */
function errorAlert(jqXHR,exception,errorThrown){

	 if (jqXHR.status === 0) {
         alert('Not connect.\n Verify Network.');
     } else if (jqXHR.status == 404) {
         alert('Requested page not found. [404]');
     } else if (jqXHR.status == 500) {
         alert('Internal Server Error [500].');
     } else if (exception === 'parsererror') {
         alert('Requested JSON parse failed.' + errorThrown);
     } else if (exception === 'timeout') {
         alert('Time out error.');
     } else if (exception === 'abort') {
         alert('Ajax request aborted.');
     } else {
         alert('Uncaught Error.\n' + jqXHR.responseText);
     }
}
