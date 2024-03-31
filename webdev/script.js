fetch("https://github.com/draczihper").then(response => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
})