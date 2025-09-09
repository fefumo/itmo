-- Удаление таблиц, если они существуют
DROP TABLE IF EXISTS creature_action CASCADE;
DROP TABLE IF EXISTS action CASCADE;
DROP TABLE IF EXISTS mind_status CASCADE;
DROP TABLE IF EXISTS creature CASCADE;
DROP TABLE IF EXISTS sensation CASCADE;
DROP TABLE IF EXISTS human CASCADE;
DROP TABLE IF EXISTS interaction CASCADE;

-- Удаление типа ENUM, если он существует
DROP TYPE IF EXISTS creature_enum CASCADE;
