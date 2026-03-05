// Array of project objects
const projects = [
	{
		Title: "Project 1",
		URL: "#",
		Description: "Description of Project 1. ",
	},
	{
		Title: "Project 2",
		URL: "#",
		Description: "Description of Project 2. ",
	},
	{
		Title: "Project 3",
		URL: "#",
		Description: "Description of Project 3. ",
	},
];

const projectsDiv = document.querySelector(".projects");

const ul = document.createElement("ul");

projects.forEach((project) => {			
	
	const li = document.createElement("li");
	li.className = "project";

	const a = document.createElement("a");
	a.setAttribute("href", project.URL);

	if (project.URL !== "#") {
		a.setAttribute("target", "_blank");
	}

	const h3 = document.createElement("h3");
	h3.textContent = project.Title;

	const p = document.createElement("p");
	p.textContent = project.Description;

	a.appendChild(h3);
	a.appendChild(p);

	li.appendChild(a);

	ul.appendChild(li);
});

projectsDiv.appendChild(ul);
