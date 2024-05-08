// const array = [1, 2, 3];const array2 = [{ name: "bob" }, { name: "alice" }, { name: "carl" }];// console.log(
//     array.map((elem) => {
//         return elem + 5;
//     }),
// );

// console.log(
//     array2.map((elem) => {
//         return elem.name;
//     }),
// );

const ads = document.querySelector(".ads");
const cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
    ads.parentElement.removeChild(ads);
});

const placeForSpec = document.querySelector("#active_spec");
const cards = document.querySelectorAll(".card");
cards.forEach((elem, ind) => {
    elem.addEventListener("click", () => {
        cards.forEach((item) => {
            item.classList.remove("active");
        });

        const p = elem.querySelector(".name");
        const text = p.innerHTML;
        const name = text.slice(7);
        placeForSpec.innerHTML = name;
        // placeForSpec.innerHTML = elem.querySelector(".name").innerHTML.slice(7);

        elem.classList.add("active");
    });
});
