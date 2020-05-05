using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPIDevCode.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 5);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "MovieId", "Director", "Genre", "Title", "Url" },
                values: new object[,]
                {
                    { 1, "Martin Scorsese", "Drama", "The Departed", "https://www.imdb.com/title/tt0407887/mediaviewer/rm981113088" },
                    { 2, "Christopher Nolan", "Drama", "The Dark Knight", "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632" },
                    { 3, "Christopher Nolan", "Drama", "Inception", "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392" },
                    { 4, "David Gordon Green", "Comedy", "Pineapple Express", "https://www.imdb.com/title/tt0910936/mediaviewer/rm3325203968" },
                    { 5, "John McTiernan", "Action", "Die Hard", "https://www.imdb.com/title/tt0095016/mediaviewer/rm270892032" }
                });
        }
    }
}
