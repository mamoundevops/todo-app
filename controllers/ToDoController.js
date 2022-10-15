const ToDoModel =require("../models/ToDoModel");

module.exports.getToDo = async (req, res)=> {
    const Todo = await ToDoModel.find();
    res.send(Todo);
}

module.exports.saveToDo = async (req, res)=> {
    const  {text} = req.body;
    ToDoModel
    .create({text})
    .then(()=>res.set(201).send("Aded sesucffuuly ...."))
    .catch((err)=> console.log(err))
}

module.exports.deleteToDo = async (req, res )=>{
    const {_id} = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.set(201).send("deleted sesucffuuly ...."))
    .catch((err)=> console.log(err))
}

module.exports.updateToDo = async (req, res )=>{
    const {_id, text} = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.set(201).send("updated sesucffuuly ...."))
    .catch((err)=> console.log(err))
}