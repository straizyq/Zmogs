const modal = document.querySelector(".modal");
const btnResult = document.querySelectorAll(".result");

const modalQuestion = document.querySelector(".modal_question");
const btnQuestions = document.querySelectorAll(".question");

const closeButtons = document.querySelectorAll(".close"); // Кнопка закрытия


// Закрытие модального окна при нажатии клавиши Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalService.classList.remove("modal_open");
    }
});

btnQuestions.forEach((btn) => {
    btn.addEventListener("click", () => {
        modalQuestion.classList.add("modal_open");
    });
});


closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // предотвращаем всплытие события
        modalQuestion.classList.remove("modal_open");
        modal.classList.remove("modal_open");
    });
});

modalQuestion.addEventListener("click", (event) => {
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("question")) {
        modalQuestion.classList.remove("modal_open");
    }
});

modal.addEventListener("click", (event) => {
    event.stopPropagation();
});


btnResult.forEach((item) => {
    item.addEventListener("click", () => {
        modal.classList.toggle("modal_open");
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("result")) {
        modal.classList.remove("modal_open");
    }
});


document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalQuestion.classList.remove("modal_open");
        modal.classList.remove("modal_open");
    }
});