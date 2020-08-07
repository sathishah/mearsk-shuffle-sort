$(function(){
    $.fn.shuffleChildren = function() {
        $.each(this.get(), function(index, el) {
            var $el = $(el);
            var $find = $el.children();

            $find.sort(function() {
              return 0.5 - Math.random();
            });

            $el.empty();
            $find.appendTo($el);
        });
    };

    $.fn.sortChildren = function() {
        var elem = $('#shuffleAndSort').find('li').sort(sortMe);
        function sortMe(a, b) {
            return a.className < b.className ? -1 : 1; 
        }
        $('#shuffleAndSort').append(elem);
    };

    $(window).load(function(event) {
        $(document).on('click', '#shuffle', function (event) {
            $("#shuffleAndSort").shuffleChildren();
        });
        $(document).on('click', '#sort', function (event) {
            $("#shuffleAndSort").sortChildren();
        });
    });
});