class Calculator {
  constructor() {
    this.value = 0;
    this.commands = [];
  }

  execute(command) {
    this.value = command.execute(this.value);
    this.commands.push(command);
    return this.value;
  }

  undo() {
    const command = this.commands.pop();
    this.value = command.undo(this.value);
    return this.value;
  }
}

class AddCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue + this.value;
  }

  undo(currentValue) {
    return currentValue - this.value;
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue - this.value;
  }

  undo(currentValue) {
    return currentValue + this.value;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue * this.value;
  }

  undo(currentValue) {
    return currentValue / this.value;
  }
}

class DivideCommand {
  constructor(value) {
    this.value = value;
  }

  execute(currentValue) {
    return currentValue / this.value;
  }

  undo(currentValue) {
    return currentValue + this.value;
  }
}

class AddAndMultiplyCommand {
  constructor(addValue, multiplyValue) {
    this.addCommand = new AddCommand(addValue);
    this.multiplyCommand = new MultiplyCommand(multiplyValue);
  }

  execute(currentValue) {
    const afterAddValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(afterAddValue);
  }

  undo(currentValue) {
    const afterUndoMultiplyValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(afterUndoMultiplyValue);
  }
}

const calculator = new Calculator();
console.log(calculator.execute(new AddCommand(10)));
console.log(calculator.undo());
console.log(calculator.execute(new AddAndMultiplyCommand(2, 10)));
