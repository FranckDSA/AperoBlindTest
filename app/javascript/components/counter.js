const initCounterTenSeconds = (linearProgress) => {
  let progressCounter = 0;
  const interval = setInterval( () => {
    progressCounter += 0.1;
    linearProgress.progress = progressCounter;
    console.log(progressCounter);
    if (progressCounter >= 1) {
      clearInterval(interval);
    }
  }, 1000);
}

export { initCounterTenSeconds };
