const svgElement = document.querySelector("svg");
const pointTextElement = document.querySelector(".point-text");
const header = document.querySelector("header");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

const today = new Date().toISOString().split("T")[0];
startDateInput.setAttribute("min", today);
endDateInput.setAttribute("min", today);

function updatePointTextHeight(){
    const svgHeight = svgElement.getBoundingClientRect().height;
    pointTextElement.style.height = `${svgHeight + 220}px`;
};

function handleScroll(){
    header.classList.toggle("not-transparent", window.scrollY > 50);
};

startDateInput.addEventListener("change", () => {
    const startDate = startDateInput.value;
    endDateInput.setAttribute("min", startDate);
    if (endDateInput.value < startDate) endDateInput.value = "";
});

updatePointTextHeight();
window.addEventListener("resize", updatePointTextHeight);
window.addEventListener("scroll", handleScroll);

function getData(el) {
    if (el.city.value === "default" || !el.startDate.value || !el.endDate.value) {
        alert("Введіть всі дані!");
        return false;
    }

    confirm(
        "Обране місто: " + el.city.value + "\n" +
        "Дата початку: " + el.startDate.value + "\n" +
        "Дата завершення: " + el.endDate.value
    );

    el.startDate.value = null;
    el.endDate.value = null;
    el.city.value = "default";

    return false;
}