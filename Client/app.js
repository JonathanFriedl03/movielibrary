$(function() {
	loadMovies();
});
(function($) {
	function processForm(e) {
		var dict = {
			Title: this['title'].value,
			Director: this['director'].value,
			Genre: this['genre'].value,
			Url: this['url'].value
		};

		$.ajax({
			url: 'https://localhost:44325/api/movie',
			dataType: 'json',
			type: 'post',
			contentType: 'application/json',
			data: JSON.stringify(dict),
			success: function(data, textStatus, jQxhr) {
				$('#movies2Load').append(`<tr><td>${data['title']}</td><td>${data['director']}</td>
				<td>${data['genre']}</td><td><button  onClick="GetImage('${data['url']}')">Images</button></td>
				<td><button  onClick="edit('${data['movieId']}', '${data['title']}', '${data['director']}', '${data['genre']}', '${data['url']}')">Edit</button></td>
				<td><button onClick="deleteMovie('${data['movieId']}')">Delete</button></td></tr>`);
				document.getElementById('my-form').reset();
			},
			error: function(jqXhr, textStatus, errorThrown) {
				console.log(errorThrown);
			}
		});
		e.preventDefault();
	}

	$('#my-form').submit(processForm);
})(jQuery);

function loadMovies() {
	let data = {};
	$.get('https://localhost:44325/api/movie', function(data) {
		$('#movies2Load').append(`<tr><th>Title</th><th>Director</th><th>Genre</th></tr>`);
		for (let i = 0; i < data.length; i++) {
			$('#movies2Load').append(`<tr><td>${data[i]['title']}</td><td>${data[i]['director']}</td>
			<td>${data[i]['genre']}</td>
			<td><button  onClick="edit('${data[i]['movieId']}', '${data[i]['title']}', '${data[i]['director']}', 
			'${data[i]['genre']}', '${data[i]['url']}')">Edit</button></td>
			<td><button onClick="deleteMovie('${data[i]['movieId']}')">Delete</button></td></tr>`);
		}
	});
}

function edit(id, title, genre, director, url) {
	console.log('edit');
	id = parseInt(id);
	var dict = {
		MovieId: id,
		Title: title,	
		Director: director,
		Genre: genre,
		Url: url
	};
	dict.Title = prompt('Enter the new title:');	
	dict.Director = prompt('Enter the new director:');
	dict.Genre = prompt('Enter the new genre:');
	dict.Url = prompt('Enter the IMDb url:');
	$.ajax({
		url: 'https://localhost:44325/api/movie',
		dataType: 'text',
		type: 'put',
		contentType: 'application/json',
		data: JSON.stringify(dict),
		success: function(data) {
			document.getElementById('movies2Load').innerHTML = '';
			loadMovies();
		},
		error: function(jqXhr, textStatus, errorThrown) {
			console.log(errorThrown);
		}
	});
}
	
function deleteMovie(id) {
	id = parseInt(id);
	$.ajax({
		url: 'https://localhost:44325/api/movie/' + id,
		dataType: 'text',
		type: 'delete',
		contentType: 'application/json',
		data: JSON.stringify(id),
		success: function(data) {
			alert("CLICKING 'OK' WILL DELETE THE ITEM! 'CANCEL' TO ABORT.");
			document.getElementById('movies2Load').innerHTML = '';
			document.getElementById('my-form').reset();
			loadMovies();
		},
		error: function(errorThrown) {
			console.log(errorThrown);
		}
	});
}

		// below is example of search bar from w3s my favorite part of the project 
		// <!-- https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_filters_table-->

		$(document).ready(function() {
			$('#myInput').on('keyup', function() {
				var value = $(this).val().toLowerCase();
				$('#movies2Load tr').filter(function() {
					$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				});
			});
		});

	//.replace(/\"/g,'')