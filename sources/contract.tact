// Define a Task structure to store task details
struct Task {
    receiver: Address;    // Address of the task completer
    reward: Int as int257;          // Reward for completing the task
    isValidated: Bool;    // Task validation flag (sent from backend)
}

contract TaskCompletion {

    // Task struct to store task status and reward information
    task: Task;

    // Address of the deployer (the one sending rewards)
    deployer: Address;

    init () {
        self.deployer = sender();  // Store the deployer's address
        self.task = Task{receiver: sender(), reward: 0, isValidated: true};
    }

    // Function to add or update a task (called by the backend)
    fun addTask(taskId: Int, receiver: Address, reward: Int, isValidated: Bool) {
        self.task = Task{
            receiver: receiver,
            reward: reward,
            isValidated: isValidated
        };
    }

    // Function to transfer the reward to the task receiver
    fun transferReward(taskId: Int) {
        // Ensure the task is validated before transferring the reward
        require(self.task.isValidated, "Task not validated");
        
        // Ensure the deployer has enough balance to cover the reward
        require(myBalance() >= self.task.reward, "Insufficient balance to transfer reward");

        // Ensure only the deployer can transfer the reward
        require(sender() == self.deployer, "Only the deployer can transfer rewards");

        // Transfer the reward to the receiver
        send(SendParameters{
            to: self.task.receiver,   // The receiver's address
            bounce: false,            // Do not bounce the transaction
            value: self.task.reward,  // The reward value
            mode: SendRemainingBalance + SendIgnoreErrors   // Ensure no errors on sending
        });

        // Optionally, update task status or perform other actions after transfer
        self.task.isValidated = false;  // Set the task as completed, or reset the task for reuse
    }

    // Function to check contract balance (optional for debugging or management)
    fun myBalance():Int {
        return myBalance();
    }
}
