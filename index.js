import  express  from 'express';

const app = express();


 

 const students = [
    {
        id: 1,
        name: "gehad",
        city: "shibeen",
    },
    {
        id: 2,
        name: "abdallah",
        city: "tanta",
    },
    {
        id:3,
        name: "abdel3azez",
        city: "menofia",
    },
    {
        id:4,
        name: "ahmed",
        city: "alx",
    },
    {
        id:5,
        name: "mehrez",
        city: "cairo",
    },
    
]; 
const studentsFunction = (request, response)=> {
    let output = '<ul>';

    for(let i=0; i<students.length; i++){
        const student = students[i];
        output += '<li>'+student.name+'</li>';
    }
    output += '</ul>'
    response.send(output);
    console.log("khaled");
    
};

app.get('/students',studentsFunction);
app.listen(6000);
