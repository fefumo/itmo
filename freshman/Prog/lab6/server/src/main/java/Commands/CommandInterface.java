package Commands;

import Communication.CommandResult;

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
    CommandResult execute(String[] args);

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
