CREATE TYPE creature_enum AS ENUM ("")

CREATE TABLE human (
    human_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL
);

CREATE TABLE action (
    action_id SERIAL PRIMARY KEY,
    description text NOT NULL
); 

CREATE TABLE mind_status(
    mind_status_id SERIAL PRIMARY KEY,
    name varachar(255) NOT NULL,
    age int NOT NULL
);

CREATE TABLE creature(
    creature_id SERIAL PRIMARY KEY,
    known boolean NOT NULL
    creature_type  NOT NULL

);

CREATE TABLE sensation(
    sensation_id SERIAL PRIMARY KEY,
    description varchar(255) NOT NULL
);

CREATE TABLE action_consequence(
    action_consequence_id SERIAL PRIMARY KEY,
    action_id integer REFERENCES action(action_id) NOT NULL,
    mind_status_id integer REFERENCES mind_status(mind_status_id) NOT NULL 
);

INSERT INTO human VALUES
("David Bowman", 30 );

INSERT INTO action VALUES
("stir"),
("wake up"),
("get into"),
("destroy"),
("rage"),
("inspect");

INSERT INTO mind_status VALUES
(yes),
(no);

INSERT INTO  creature VALUES 
()