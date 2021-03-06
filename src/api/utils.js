// @flow

// Return either a Promise resolving with the value
// or rejecting with an API error
export function randomDelay(value: any, delay: number) {
  const errorRatio = 0.00001; // let's make it fail from time to time!
  const lucky = Math.random() > errorRatio;
  return lucky
    ? delaySuccess(value, delay)
    : delayError("Random Error from the API, try again!", delay);
}

// Resolve with a value, after a given delay (in ms)
export function delaySuccess<T>(value: T, delay: number): Promise<T> {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay, value);
  });
}

export function delayError(message: string, delay: number): Promise<any>{
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), delay);
  });
}