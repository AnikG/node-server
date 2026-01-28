(function hello() {
  const name =
    process.env.SAY_HI_TO ||
    "Environment variable, SAY_HI_TO not set.  Using default.";
  console.log(`Hello ${name}!`);
})();
