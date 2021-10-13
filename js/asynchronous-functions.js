// const errorMessage = document.querySelector(".error");

const getUserId = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const id = Math.floor(Math.random() * 120);
      if (name === "Luis") {
        const error = "I'm sick of you!";
        reject(error);
      } else {
        resolve(id);
      }
    }, 2000);
  });
};

export default getUserId;
