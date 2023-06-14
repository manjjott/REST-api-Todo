const db = require("../data/database");
const mongodb = require("mongodb");
class Todo {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }

  //   static method for fetching the todos

  static async getTodos() {
    const todoDocuments = await db.getDb().collection("todos").find().toArray();

    return todoDocuments.map(function (todoDocument) {
      return new Todo(todoDocument.text, todoDocument._id);
    });
  }

  async save() {
    if (this.id) {
      const todoId = new mongodb.ObjectId(this.id);
      return await db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { text: this.text } });
    } else {
      return await db
        .getDb()
        .collection("todos")
        .insertOne({ text: this.text });
    }
  }

  async delete() {
    if (!this.id) {
      throw new Error("Trying to delete a todo without id!");
    }

    const todoId = new mongodb.ObjectId(this.id);
    return await db.getDb().collection("todos").deleteOne({ _id: todoId });
  }
}


module.exports = Todo;