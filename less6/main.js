const form = document.querySelector("form");form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    console.log(e.target.action);
    // const res = await fetch(e.target.action);
    // const data = await res.json();
    // console.log(data);
});
