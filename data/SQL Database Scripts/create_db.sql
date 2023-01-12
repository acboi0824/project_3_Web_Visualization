-- Active: 1673401506839@@localhost@5433@petfriends@public
CREATE DATABASE petfriends
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
    
drop table if exists adoptees;
CREATE TABLE public.adoptees (
    id bigint,
    url text,
    age text,
    gender text,
    type text,
    species text,
    name text,
    description text,
    status text,
    status_changed_at text,
    published_at text,
    "primary" text,
    secondary text,
    mixed boolean,
    address1 text,
    address2 text,
    city text,
    state text,
    zip text,
    country text,
    small_photo text,
    medium_photo text,
    large_photo text,
    breed text,
    state_name text,
    coordinates varchar
    
);
CREATE INDEX friends ON 
    adoptees ("age","gender","name","city","state","breed");