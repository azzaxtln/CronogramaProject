import express from 'express';

const app = express();

let userInputArray = [];

app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});

app.get("/", (req, res) =>{
    const { nameDaysOfWeek} = week();
    res.render("index.ejs", {userInputArray, nameDaysOfWeek});
})

app.post("/submit", (req, res) =>{
const userInput = req.body.put;
const { nameDaysOfWeek } = week();
userInputArray.push(userInput);

res.redirect("/");
})



function week() {
    const atualDate = new Date();
    const dayOfWeek = atualDate.getDay();
    const namesDaysOfWeek = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const nameDaysOfWeek = namesDaysOfWeek[dayOfWeek];

    return { nameDaysOfWeek};
}