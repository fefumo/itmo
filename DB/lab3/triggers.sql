--функция которая выкидывает Notice при удалении из таблицы Sensation 
CREATE OR REPLACE FUNCTION Sensation_delete()
RETURNS TRIGGER AS $$
BEGIN
    RAISE NOTICE 'Delete: Sensation named %', OLD.description;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER Sensation_delete_trigger
    AFTER DELETE ON sensation
    FOR EACH ROW 
    EXECUTE FUNCTION Sensation_delete();

--функция которая выкидывает Notice при добавлении в таблцу Sensation
CREATE OR REPLACE FUNCTION Sensation_insert()
RETURNS TRIGGER AS $$
BEGIN
    RAISE NOTICE 'Insert: Sensation named %', NEW.description;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER Sensation_insert_trigger
    BEFORE INSERT ON sensation
    FOR EACH ROW
    EXECUTE FUNCTION Sensation_insert();

--каждый раз, когда будет вставлена новая запись в таблицу interaction,
--триггер будет срабатывать и обновлять sanity у соответствующего человека, если он взаимодействовал с базилиском.

CREATE OR REPLACE FUNCTION update_human_sanity()
RETURNS TRIGGER AS $$
DECLARE
    creature_type creature_enum;
BEGIN
    -- Получаем тип существа
    SELECT c.creature_type
    INTO creature_type
    FROM creature c
    WHERE c.creature_id = NEW.creature_id;

    -- Проверка для отладки
    RAISE NOTICE 'Creature type: %', creature_type;

    -- Если существо является базилиском, снижаем sanity человека
    IF creature_type = 'basilisk' THEN
        UPDATE mind_status
        SET sanity = FALSE
        WHERE mind_status_id IN (SELECT h.mind_status_id FROM human h WHERE h.human_id = NEW.human_id);

        -- Генерация уведомления о выполнении обновления
        RAISE NOTICE 'Sanity is updated to FALSE for human_id = %', NEW.human_id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_update_human_sanity
AFTER INSERT ON interaction
FOR EACH ROW
EXECUTE FUNCTION update_human_sanity();

--проверка 

--проверка для последних двух триггеров 
INSERT INTO sensation (description)
VALUES
    ('helpless')
;

DELETE FROM sensation
WHERE sensation_id = 0 OR sensation_id = 1;

-- проверка для последнего триггера

INSERT INTO mind_status (sanity) VALUES (TRUE), (TRUE);
INSERT INTO human (name, birthday, mind_status_id) VALUES ('Dude #1', '1990-01-01', 1), ('Dude #2', '1985-05-05', 2);
INSERT INTO action (description) VALUES ('Saw a creature');
INSERT INTO creature (known, creature_type) VALUES (TRUE, 'basilisk'), (TRUE, 'chimera');

SELECT 'Before interaction' AS phase, * FROM mind_status;

INSERT INTO interaction (human_id, creature_id, action_id) VALUES (1, 1, 1);
INSERT INTO interaction (human_id, creature_id, action_id) VALUES (2, 2, 1);

SELECT 'After interaction' AS phase, * FROM mind_status;

-- Проверяем все записи
SELECT * FROM human;
SELECT * FROM interaction;
