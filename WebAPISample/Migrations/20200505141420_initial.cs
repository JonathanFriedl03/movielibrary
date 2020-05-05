using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPIDevCode.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    MovieId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Director = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.MovieId);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
