        function rabbits () {
            for (var i = 0; i < 100; i++) {
                document.write("rabbit #" + i + "<br/>")
            }
        }

        function oddRabbits () {
            for (var i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    document.write("odd rabbit #" + i + "<br/>")
                }
            }
        }

        function evenRabbits () {
            for (var i = 0; i < 100; i++) {
                if (i % 2 == 1) {
                    document.write("even rabbit #" + i + "<br/>")
                }
            }
        }

        function showCurrentText(event) {
            var val = event.target.value.trim();

            if (val === oldVal) {
                return;
            }

            oldVal = val;

            $('body').append('<p>' + event.target.value + '</p>');
        }

$(document).ready(function() {
    var oldVal = "";

    $('.textInput').on('change textInput input', function(event) {
                
            var val = event.target.value.trim();

            if (val === oldVal) {
                return;
            }

            oldVal = val;

            $('body').append('<p>' + event.target.value + '</p>');
            });
});
