create table if not exists "news"(
    "id" int  generated always as identity,
    "author" varchar,
    "title" text,
    "description" varchar,
    "url" varchar,
    "urltoimage" varchar,
    "publishedat" varchar,
    "content" varchar,
    constraint "weather_test_pk" primary key ("id")
);