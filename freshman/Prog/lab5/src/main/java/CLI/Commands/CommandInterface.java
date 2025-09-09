package CLI.Commands;


/**
 * Abstract interface that abstract Command class iplements. Used mostly for architecture designing.
 *
 * @see Command
 */
public abstract interface CommandInterface {
    /**
     * Execute.
     *
     * @param args the args
     */
    void execute(String[] args);

    /**
     * Gets description.
     *
     */
    String getDescr();

    /**
     * Gets name.
     *
     * @return the name
     */
    String getName();
}
