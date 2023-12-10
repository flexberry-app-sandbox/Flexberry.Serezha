docker build --no-cache -f SQL\Dockerfile.PostgreSql -t serezha-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t serezha-java/app ../../..
