package ru.itmo.prog.lab5.CLI.Commands;

public abstract class Command implements CommandInterface {
    String name;
    String descr;
    Object argument;

    public Command (String name, String descr){
        this.name = name;
        this.descr = descr;
    }
    
    @Override
    public String getDescr() {
        return descr;
    }
    @Override
    public String getName() {
        return name;
    }

    @Override
    public abstract void execute(String[] args);


    public Object getArgument(){
        return argument;
    }
}
