FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

COPY Carsties.sln ./
COPY src/GatewayService/GatewayService.csproj ./src/GatewayService/

# restore the dependencies
RUN dotnet restore ./src/GatewayService/GatewayService.csproj

# copy app folders over
COPY . .
RUN dotnet publish ./src/GatewayService/GatewayService.csproj  -c Release -o /app/publish

# build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT [ "dotnet", "GatewayService.dll" ]