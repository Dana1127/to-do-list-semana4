const tasks = [
    { text: "Lectura de investigación en diseño", done: false },
    { text: "Tarea de Web", done: true },
    { text: "Terminar landing page en Figma", done: true },
    { text: "Adelantar de la Electiva", done: false },
    { text: "Leer para HCI", done: false },
    { text: "Revisar Intu", done: false },
    { text: "Organizar Teclado HCI", done: false }
  ];
  
  ///// Selector para cada sección de lista
  const allTasksHtml = document.getElementById("all");
  const pendingHtml = document.getElementById("pending");
  const completedHtml = document.getElementById("completed");
  

  function createTasks() {
  
    allTasksHtml.innerHTML = "";
    pendingHtml.innerHTML = "";
    completedHtml.innerHTML = "";
  
    tasks.forEach((task) => {
      const elem = document.createElement("li");
      elem.textContent = task.text;
      elem.className = task.done ? "checked" : "unchecked";
      elem.addEventListener("click", () => toggleCompletedTask(task));
  
      const cloneElem = elem.cloneNode(true);
      cloneElem.addEventListener("click", () => toggleCompletedTask(task));
      
      allTasksHtml.append(elem);
      
      if (task.done) {
        completedHtml.append(cloneElem);
      } else {
        pendingHtml.append(cloneElem);
      }
    });
  }
  
  createTasks();
  // Se crea método para llamar al event listener
  function toggleCompletedTask(task) {
    task.done = !task.done;

    
    createTasks();
  }
