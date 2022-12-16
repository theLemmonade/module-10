const Employee = require("../lib/Employee");

const createTeam = (team) => {
	const createManager = (manager) => {
		return `
        <div class="card main-cards">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `;
	};

	const createEngineer = (engineer) => {
		return `
        <div class="card main-cards">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
	};

	const createIntern = (intern) => {
		return `
        <div class="card main-cards">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>            
            </ul>
        </div>
    </div>
    `;
	};

	const htmlArr = [];

	htmlArr.push(
		team
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => createManager(manager))
	);
	htmlArr.push(
		team
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => createEngineer(engineer))
			.join("")
	);
	htmlArr.push(
		team
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => createIntern(intern))
			.join("")
	);

	return htmlArr.join("");
};

module.exports = (team) => {
	return `
    <!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Software Engineering Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-5 head">
                <h1 class="text-center">Meet the <u>Widget.io</u> Team!</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="main-area col-12 d-flex justify-content-center">
                ${createTeam(team)}
        
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
