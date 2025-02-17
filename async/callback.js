console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

function printDelay(print, timeout) {
  setTimeout(print, timeout);
}

printDelay(() => console.log("async callback"), 2000);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "son" && password === "qwe") ||
        (id === "kim" && password === "123")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "son") {
        onSuccess({ name: "son", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    },1000);
  }
}
