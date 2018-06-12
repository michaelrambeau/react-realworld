// Return either a Promise resolving with the value
// or rejecting with an API error
export function randomDelay(value, delay) {
  const errorRatio = 0.1; // let's make it fail from time to time!
  const lucky = Math.random() > errorRatio;
  return lucky
    ? delaySuccess(value, delay)
    : delayError("Unexpected Error from the API", delay);
}
export function delaySuccess(value, delay = 500) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(value), delay);
  });
}

export const delayError = (message, delay = 500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), delay);
  });
