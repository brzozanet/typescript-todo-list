const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
// const tasks: string[] = [
//   "Nauczyć się Typescript",
//   "Nauczyć sie Next.js",
//   "Skończyć zaległy kurs React",
//   "Zrobić portfolio",
//   "Znaleźć pracę",
// ];
const tasks = [
    {
        name: "Skończyć kurs GO IT",
        done: true,
    },
    {
        name: "Nauczyć się Typescript",
        done: false,
    },
    {
        name: "Nauczyć sie Next.js",
        done: false,
    },
    {
        name: "Skończyć zaległy kurs React",
        done: false,
    },
    {
        name: "Zrobić portfolio",
        done: false,
    },
    {
        name: "Znaleźć pracę",
        done: false,
    },
];
// <li>
//   <label for="task-1">Nauczyć się Typescript</label>
//   <input type="checkbox" id="task-1" name="Nauczyć się Typescript" />
// </li>
// NOTE: Opcja 1 jest bardziej tradycyjna i może być preferowana ze względów bezpieczeństwa,
// ponieważ tworzy elementy DOM programowo, co minimalizuje ryzyko ataków typu Cross-Site Scripting (XSS),
// gdy dane pochodzą z niezaufanych źródeł. Pozwala na bardziej kontrolowane tworzenie elementów i atrybutów,
// ale jest bardziej rozwlekła i wymaga więcej kodu do osiągnięcia tego samego efektu.
const renderTasks = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        const taskId = `task-${index}`;
        const checkboxElement = document.createElement("input");
        taskElement.innerText = task.name;
        labelElement.setAttribute("for", taskId);
        labelElement.setAttribute("name", task.name);
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = taskId;
        taskElement.append(labelElement, checkboxElement);
        tasksContainerElement.append(taskElement);
    });
};
// NOTE: Opcja 2 jest nowsza i bardziej zwięzła, ponieważ pozwala na bezpośrednie wstrzyknięcie HTML
// do elementu DOM za pomocą jednej instrukcji. Używa literałów szablonowych (template literals), co sprawia,
// że jest bardziej czytelna i pozwala na łatwe włączenie zmiennych do znaczników HTML.
// Jest to szczególnie przydatne przy budowaniu skomplikowanych struktur HTML.
// const renderTasks = () => {
//   tasksContainerElement.innerHTML = "";
//   tasks.forEach((task, index) => {
//     const taskElement: HTMLLIElement = document.createElement("li");
//     const taskId: string = `task-${index}`;
//     taskElement.innerHTML = `
//       <label for="task-${taskId}">${task.name}</label>
//       <input type="checkbox" id="task-${taskId}" name="${task.name}" />
//     `;
//     tasksContainerElement.append(taskElement);
//   });
// };
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    renderTasks();
});
renderTasks();
