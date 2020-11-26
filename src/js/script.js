$(document).ready(function () {
    $("#button_search").click(
        function () {
            let movieTitle = $('#movie_title').val();
            sendAjaxForm(movieTitle,'https://api.themoviedb.org/3/search/movie')
        }
    );

    $("#button_clear").click(
        function () {
            document.getElementById('movie_title').value = '';
            $('#result_form').html("");
        }
    )

});

function sendAjaxForm(movieTitle, url) {
    let api_key = 'b4719f473108e407799e8f6170e52837';
    $.ajax({
        url: url,
        type: 'GET',
        data: {'query': movieTitle, 'language': 'RU', 'api_key': api_key, 'include_adult': true},
        success: function (result) {
            var table = drawTable(result);
            $('#result_form').html(table);
        },
        error: function (error) {
            $('#result_form').html('ERROR. DATA IS NOT SEND!');
        }
    });
}

function drawTable(result) {
    var arr = result.results;
    var html = '<table>';
    html+= '<caption>RESULTS</caption>';
    html+= '<thead><tr><td>Index</td><td>Value</td></tr></thead>';
    html+='<tbody>';
    $.each(arr, function (index, value) {
        html+='<thead><tr><td colspan="2"> '+ index + '</td></tr></thead>';
        $.each(value, function (index, value) {
            html+= '<tr>';
            html+= '<td>' + index + '</td>';
            html+= '<td>' + value + '</td>';
            html+= '</tr>';
        });
    });
    html+= '<tbody>';
    html+= '</table>';
    return html;
}