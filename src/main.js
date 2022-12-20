document.addEventListener("visibilitychange", () => {
  const favicon = document.getElementById("favicon");
  if (document.visibilityState === "hidden") {
    document.title = "Come back to my Portfolio";
    favicon.setAttribute("href", "./emoji.ico");
  } else {
    document.title = "Portfolio | Yassir Elkhaili";
    favicon.setAttribute("href", "./favicon.ico");
  }
});




