﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPIDevCode.Data;

namespace WebAPIDevCode.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20200505141420_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPIDevCode.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Director")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            MovieId = 1,
                            Director = "Martin Scorsese",
                            Genre = "Drama",
                            Title = "The Departed",
                            Url = "https://www.imdb.com/title/tt0407887/mediaviewer/rm981113088"
                        },
                        new
                        {
                            MovieId = 2,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            Title = "The Dark Knight",
                            Url = "https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632"
                        },
                        new
                        {
                            MovieId = 3,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            Title = "Inception",
                            Url = "https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392"
                        },
                        new
                        {
                            MovieId = 4,
                            Director = "David Gordon Green",
                            Genre = "Comedy",
                            Title = "Pineapple Express",
                            Url = "https://www.imdb.com/title/tt0910936/mediaviewer/rm3325203968"
                        },
                        new
                        {
                            MovieId = 5,
                            Director = "John McTiernan",
                            Genre = "Action",
                            Title = "Die Hard",
                            Url = "https://www.imdb.com/title/tt0095016/mediaviewer/rm270892032"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
