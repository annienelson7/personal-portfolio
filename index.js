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

// Get the projects div
const projectsDiv = document.querySelector(".projects");

// Create an unordered list
const ul = document.createElement("ul");

// Loop through the projects array
projects.forEach((project) => {
	// Create list item
	const li = document.createElement("li");
	li.className = "project";

	// Create anchor element
	const a = document.createElement("a");
	a.setAttribute("href", project.URL);

	// Set target to _blank if URL is not just "#"
	if (project.URL !== "#") {
		a.setAttribute("target", "_blank");
	}

	// Create header for title
	const h3 = document.createElement("h3");
	h3.textContent = project.Title;

	// Create paragraph for description
	const p = document.createElement("p");
	p.textContent = project.Description;

	// Append header and paragraph to anchor
	a.appendChild(h3);
	a.appendChild(p);

	// Append anchor to list item
	li.appendChild(a);

	// Append list item to unordered list
	ul.appendChild(li);
});

// Append unordered list to projects div
projectsDiv.appendChild(ul);
