FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

COPY Carsties.sln ./
COPY src/IdentityService/IdentityService.csproj ./src/IdentityService/

# restore the dependencies
RUN dotnet restore ./src/IdentityService/IdentityService.csproj

# copy app folders over
COPY . .
RUN dotnet publish ./src/IdentityService/IdentityService.csproj  -c Release -o /app/publish

# build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT [ "dotnet", "IdentityService.dll" ]