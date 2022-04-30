const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
  return (
    pendingTimers.length // Check one: Any pending setTimeout, setInterval, setImmediate?
    || pendingOSTasks.length // Check two: Any pending OS tasks? (Like server listening to port)
    || pendingOperations.length // Check three: Any pending long running operations? (Like fs module)
  );
}

// JS Code With new timers, tasks, operations are recorded from myFile running
pendingTimers.push('timer callback');
pendingOSTasks.push('server listening port');
pendingOperations.push('IO operation');

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // Node runs when needed:
  // 1) setTimeout, setInterval callback functions  
  // 2) pendingOSTasks and pendingOperations callback functions
  // 3) setImmediate callback functions
  // 4) 'close' event callbacks // stream.on('close', () => {}) , etc
}

// exit back to terminal
