CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    displayname VARCHAR(50) NOT NULL,
    content TEXT NOT NULL
);