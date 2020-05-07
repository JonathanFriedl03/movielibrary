

	

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
				$('#movies2Load').append(`<tr><td>${data['title']}</td><td>${data['genre']}</td><td>${data[
					'director'
				]}</td><td><button  onClick="Edit('${data['movieId']}', '${data[
					'title'
				]}', '${data['genre']}', '${data['director']}', '${data[
					'url'
				]}')">Edit</button></td><td><button onClick="deleteMovie('${data[
					'movieId'
				]}')">Delete</button></td></tr>`
			);
					
				 
				
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
		$('#movies2Load').append(`<tr><th>Title</th><th>Director</th><th>Genre</th></tr>`)
		for(let i = 0; i < data.length; i++){
			$("#movies2Load").append(`<tr><td>${data[i]["title"]}</td>
			<td>${data[i]["director"]}</td>
			<td>${data[i]["genre"]}</td>
			<td><button onClick="deleteMovie('${data[i][movieId]}')">Delete</button></td></tr>
			<td><button onClick="edit('${data[i]['movieId']}', '${data[i]["title"]}', '${data[i]["director"]}', '${data[i]["genre"]}', '${data[i]["url"]}')">Edit</button></td>`);
			
		}
		})
	};
	function edit(id, title, genre, director){
		id = parseInt(id);
		var dict = {
			MovieId : id,
			Title : title,
			Director: director,
			Genre: genre,
			Url : url
			
		};
		dict.Title = prompt(`Enter the new Title:`);
		dict.Director = prompt(`Enter the new Director:`);
		dict.Genre = prompt(`Enter the new Genre:`);
		dict.Url = prompt(`Enter the new Url:`);
		$.ajax({
			url: 'https://localhost:44325/api/movie',
            dataType: 'text',
            type: 'put',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
				document.getElementById('movies2Load').innerHTML = '';
				loadMovies();
		},
		error: function( jqXhr, textStatus, errorThrown ){
			console.log( errorThrown );
		}
		});
	}
	$(function(){
		loadMovies();
		});
		function deleteMovie(id){
			id = parseInt9id;
			$.ajax({
				url: 'https://localhost:44325/api/movie',
				dataType: 'text',
				type: 'delete',
				contentType: 'application/json',
				data: JSON.stringify(id),
				success: function( data, textStatus, jQxhr ){
					document.getElementById('movies2Load').innerHTML = '';
					loadMovies();
			},
			error: function( jqXhr, textStatus, errorThrown ){
				console.log( errorThrown );
			}
			})
		}
	//.replace(/\"/g,'')