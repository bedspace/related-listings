FROM mysql:5.7

ENV MYSQL_DATABASE related_listings

COPY ./server/Schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3003