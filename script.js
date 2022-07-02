// Create Object
let ToDoList = {

    // Array
    TaskArray: [],

    // Arrow Function
    SaveTask: () => {
        console.log("The function run sucessfuly");
        let taskName = document.getElementById('taskName');
        let optionsSelector = document.getElementById('optionsSelector');
        let inputDate = document.getElementById('inputDate');
        let textArea = document.getElementById('textArea');
        let Task = {
            Name: taskName.value,
            Selector: optionsSelector.value,
            Calender: inputDate.value,
            text: textArea.value,
            // Container: TaskContainer.value,
        };

        // Array Of Object
        ToDoList.TaskArray.push(Task);
        console.log(ToDoList.TaskArray);
        console.log(JSON.stringify(ToDoList.TaskArray));
        console.log("Data Stored In Json Succesfuly.");
        ToDoList.ShowTasks();
    },
    ShowTasks: () => { 
        let TaskContainer = document.getElementById('TaskContainer');
        TaskContainer.innerHTML = "";
        let htmlExample = "";
        ToDoList.TaskArray.forEach(function (task , index) {
            htmlExample += "<div class='Law'><div style='width: 20%; float: left;'>"+task.Name+"</div>";
            htmlExample += "<div style='width: 20%; float: left;'>"+task.Selector+"</div>";
            htmlExample += "<div style='width: 20%; float: left;'>"+task.Calender+"</div>";
            htmlExample += "<div style='width: 20%; float: left;'>"+task.text+"</div></div>";
        });
        TaskContainer.innerHTML = htmlExample;
    },
    SaveInStorge: () => {

    }
}

let BTN = document.getElementById('btnSave');
// BTN.onclick = ToDoList.SaveTask;
BTN.addEventListener("click" , ToDoList.SaveTask);