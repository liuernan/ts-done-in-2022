const hello: string = "hello, TypeScript.";

const App = document.querySelector("#app");

App && (App.innerHTML = hello);
