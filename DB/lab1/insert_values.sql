INSERT INTO human (name, birthday)
VALUES
    ('David Bowman', '2005-04-28' );

INSERT INTO action (description)
VALUES 
    ('stir'),
    ('wake up'),
    ('get into'),
    ('destroy'),
    ('rage'),
    ('inspect');

INSERT INTO mind_status (sanity)
VALUES
    (true),
    (false);

INSERT INTO  creature (known, creature_type)
VALUES 
    (true, 'djin'),
    (false, 'something');

INSERT INTO action_consequence (action_id, mind_status_id)
VALUES
    (1,2);

INSERT INTO sensation (description)
VALUES
    ('fear'),
    ('hope'),
    ('happiness');