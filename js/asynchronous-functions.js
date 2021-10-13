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

const getUserDataById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 100) {
        const error = "Luis, don't cheat on me!";
        reject(error);
      } else {
        const user = {
          id: id,
          dni: "12345678-Q",
        };
        resolve(user);
      }
    }, 2000);
  });
};

export default { getUserId, getUserDataById };
