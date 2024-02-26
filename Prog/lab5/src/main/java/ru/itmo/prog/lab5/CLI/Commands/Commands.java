package ru.itmo.prog.lab5.CLI.Commands;

public enum Commands {
    INFO("info"),
    SHOW("show"),
    ADD("add"),
    UPDATE_ID("update_id"),
    REMOVE_BY_ID("remove_by_id"),
    CLEAR("clear"),
    SAVE("save"),
    EXECUTE_SCRIPT("execute_script"),
    EXIT("exit"),
    REMOVE_LOWER("remove_lower"),
    HISTORY("history"),
    MIN_BY_NUMBER_OF_PARTICIPANTS("min_by_number_of_participants"),
    GROUP_COUNTRING_BY_ID("group_counting_by_id");

    private String name;
    Commands(String name){
        this.name = name;
    }
    public String getName() {
        return name;
    }
}
