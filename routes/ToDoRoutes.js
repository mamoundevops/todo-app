const { Router } = require("express");
const router = Router();

const {getToDo, saveToDo, updateToDo, deleteToDo} = require("../controllers/ToDoController")
router.get("/get-todo", getToDo);
router.post("/save-todo", saveToDo);
router.post("/update-todo", updateToDo);
router.post("/delete-todo", deleteToDo);



module.exports= router;