const getUserId = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = Math.floor(Math.random() * 99);
      if (name === "Luis") {
        reject();
      } else {
        resolve();
      }
    }, 2000);
  });
};

export default getUserId;
