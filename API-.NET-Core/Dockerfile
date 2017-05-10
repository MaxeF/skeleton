FROM microsoft/aspnetcore-build:1.0.1
ADD /src /app
WORKDIR /app/api-core.net
RUN ["dotnet", "restore"]
EXPOSE 80
ENTRYPOINT ["dotnet", "run"]