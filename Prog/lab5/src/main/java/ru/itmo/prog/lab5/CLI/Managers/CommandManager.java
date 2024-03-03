package ru.itmo.prog.lab5.CLI.Managers;

import java.util.HashMap;

import ru.itmo.prog.lab5.CLI.Commands.*;

import ru.itmo.prog.lab5.Exceptions.InvalidCommandException;

public class CommandManager {

    public static HashMap<String, Command> commands = new HashMap<>();


    public void buildCommands(){
    
        Help help = new Help("help", "вывести справку по доступным командам");
        Info info = new Info("info", "вывести в стандартный поток вывода информацию о коллекции (тип, дата инициализации, количество элементов и т.д.)");
        Show show = new Show("show", "вывести в стандартный поток вывода все элементы коллекции в строковом представлении");
        Add add = new Add("add", "add {element} добавить новый элемент в коллекцию");
        UpdateId updateId = new UpdateId("update_id", "update_id {id} обновить значение элемента коллекции, id которого равен заданному");
        RemoveById removeById = new RemoveById("remove_by_id", "remove_by_id {id} удалить элемент из коллекции по его id");
        Clear clear = new Clear("clear", "очистить коллекцию");
        Save save = new Save("save", "сохранить коллекцию в файл");
        ExecuteScript executeScript = new ExecuteScript("execute_script", "execute_script {file_name} считать и исполнить скрипт из указанного файла. В скрипте содержатся команды в таком же виде, в котором их вводит пользователь в интерактивном режиме.");
        Exit exit = new Exit("exit", "завершить программу (без сохранения в файл)");
        RemoveLower removeLower = new RemoveLower("remove_lower", "remove_lower {element} удалить из коллекции все элементы, меньшие, чем заданный");
        History history = new History("history", "вывести последние 14 выполненных комманд");
        MinByNumberOfParticipants minByNumberOfParticipants = new MinByNumberOfParticipants("min_by_number_of_participants", "вывести любой объект из коллекции, значение поля numberOfParticipants которого является минимальным");
        GroupCountingById groupCountingById = new GroupCountingById("group_counting_by_id", "вывести количество элементов, значение поля id которых меньше заданного");
        
        commands.put(help.getName(), help);
        commands.put(info.getName(), info);
        commands.put(show.getName(), show);
        commands.put(add.getName(), add);
        commands.put(updateId.getName(), updateId);
        commands.put(removeById.getName(), removeById);
        commands.put(clear.getName(), clear);
        commands.put(save.getName(), save);
        commands.put(executeScript.getName(), executeScript);
        commands.put(exit.getName(), exit);
        commands.put(removeLower.getName(), removeLower);
        commands.put(history.getName(), history);
        commands.put(minByNumberOfParticipants.getName(), minByNumberOfParticipants);
        commands.put(groupCountingById.getName(), groupCountingById);
    }

    public void executeCommand(String[] args) throws InvalidCommandException{
        History.addCommandToHistory(String.join(" ", args));
        try {
            if (!(commands.containsKey(args[0].toLowerCase()))){
                throw new InvalidCommandException("No such command. Try again");
            }
            /*
             * Command command = commands.get(args[0].toLowerCase())
             * if (command.usermode != false){
             *     command.execute(args)
             * }
             * 
             */
            commands.get(args[0].toLowerCase()).execute(args);                
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static HashMap<String, Command> getCommandsHashMap() {
        return commands;
    }
}

