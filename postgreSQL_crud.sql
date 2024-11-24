CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  bio TEXT,
  user_id INTEGER UNIQUE REFERENCES users(id)
);


CREATE TABLE posts (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL,
content TEXT,
user_id INTEGER NOT NULL REFERENCES users(id) 
);

SELECT * FROM posts;

ALTER TABLE posts DROP CONSTRAINT posts_user_id_key;
