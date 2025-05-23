import Database from "better-sqlite3";

const db = new Database("data/database.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS recipes (id INTEGRER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT").run();

export const getRecipes = () => db.prepare('SELECT * FROM recipes').all();

export const getRecipe = (id) => db.prepare('SELECT * FROM recipes WHERE id =?').get(id);

export const SaveRecipe = (title, content) => db.prepare('SAVE recipes SET (title, content) VALUES').run(title, content);

export const DeleteRecipe = (id) => db.prepare();

const recipes = [
    {
        title: "Tigris", content: "Láb",
        title: "Ló", content: "Ugrás",
        title: "Mókus", content: "Fej",
        title: "Bagoly", content: "Fül",
    }
]