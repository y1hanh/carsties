FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

COPY Carsties.sln ./
COPY src/AuctionService/AuctionService.csproj ./src/AuctionService/
COPY src/Contracts/Contracts.csproj src/Contracts/

# restore the dependencies
RUN dotnet restore ./src/AuctionService/AuctionService.csproj

# copy app folders over
COPY . .
RUN dotnet publish ./src/AuctionService/AuctionService.csproj  -c Release -o /app/publish

# build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT [ "dotnet", "AuctionService.dll" ]