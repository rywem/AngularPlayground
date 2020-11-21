# AngularPlayground
A repository for Angular related projects


## dotnet cli
`dotnet -h`

`dotnet new -h`

New Solution with name as containing folder: `dotnet new sln`

New WebAPI project (output to the API folder): `dotnet new webapi -o API`

Add WebAPI project to solution: `dotnet sln add API`

### VS Code Extensions
- C# for Visual Studio Code (powered by OmniSharp)
     - Yes to add assets.
- C# Extensions (there's two, get the one that hasn't been abandoned)
- Material Icon Theme
- Nuget Gallery
    - Open with ctrl-shift-p (type nuget)
- SQLite
### Nuget Packages
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.EntityFrameworkCore.Design
### dotNet Tools
`dotnet tool install --global dotnet-ef --version 5.0.0` [Source](https://www.nuget.org/packages/dotnet-ef/)

Add Migrations: `dotnet ef migrations add InitialCreate -o Data/Migrations`

Update database: `dotnet ef database update`
### Reference
Build an App with AspNet Core and Angular from Scratch [Course](https://www.udemy.com/course/build-an-app-with-aspnet-core-and-angular-from-scratch/)