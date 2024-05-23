CREATE TYPE creature_enum AS ENUM ('basilisk', 'banshee', 'chimera', 'changeling', 'djin', 'something');

CREATE TABLE IF NOT EXISTS mind_status(
    mind_status_id SERIAL PRIMARY KEY,
    sanity boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS human (
    human_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    birthday date NOT NULL,
    mind_status_id integer REFERENCES mind_status(mind_status_id) NOT NULL
);

CREATE TABLE IF NOT EXISTS action (
    action_id SERIAL PRIMARY KEY,
    description text NOT NULL
);

CREATE TABLE IF NOT EXISTS creature(
    creature_id SERIAL PRIMARY KEY,
    known boolean NOT NULL,
    creature_type creature_enum NOT NULL
);

CREATE TABLE IF NOT EXISTS sensation(
    sensation_id SERIAL PRIMARY KEY,
    description varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS creature_action (
    creature_action_id SERIAL PRIMARY KEY,
    creature_id integer REFERENCES creature(creature_id) NOT NULL,
    action_id integer REFERENCES action(action_id) NOT NULL
);

CREATE TABLE IF NOT EXISTS interaction (
    interaction_id SERIAL PRIMARY KEY,
    human_id integer REFERENCES human(human_id) NOT NULL,
    creature_id integer REFERENCES creature(creature_id) NOT NULL,
    action_id integer REFERENCES action(action_id) NOT NULL,
    interaction_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
