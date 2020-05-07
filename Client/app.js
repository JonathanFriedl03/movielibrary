

$(function(){
	loadMovies();
});

(function($){
    function processForm( e ){
		console.log(e);
		
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
        	Genre: this["genre"].value,
        	Url: this["url"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
				$('#title').append(`<tr><td>${data['title']}</td></tr>`);
				$('#director').append(`<tr><td>${data['director']}</td></tr>`);
				$('#genre').append(`<tr><td>${data['genre']}</td></tr>`);

					
				 
				
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);

	function loadMovies(){
		let data = {}
		$.get("https://localhost:44325/api/movie", function(data){
		console.log(data);
		$('#movies2Load').append(`<tr><th>Title</th><th>Director</th><th>Genre</th><th>Url</th></tr>`)
		for(let i = 0; i < data.length; i++){
			$("#movies2Load").append(`<tr><td>${data[i]["title"]}</td>
			<td>${data[i]["director"]}</td>
			<td>${data[i]["genre"]}</td>
			<td>${data[i]["url"]}</td>
			<td><button onClick="Edit('${data[i]['movieId']}', '${data[i]["title"]}', '${data[i]["director"]}', '${data[i]["genre"]}', '${data[i]["url"]}')">Edit</button></td>
			<td>`);
			
		}
		})
	};
	//.replace(/\"/g,'')