// replacement for scroll-behavior
$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

function submitForm() {
    alert("This feature is currently unavailable. Please check back later.");
}