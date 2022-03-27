const cardsJSON = `[{"name": "Paolo Maldini","jobTitle": "Front End Developer",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "linkedInUrl": "paolo.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Node", "Express"
      ]
    },
    {
      "name": "Barbara Bonansea",
      "jobTitle": "Software Engineer",
      "company": "Excellence in the Cloud",
      "experience": "12 years",
      "school": "University of Southern California",
      "major": "Computer Science",
      "email": "barbara@example.com",
      "linkedInUrl": "barbara.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "JavaScript", "C", "Go"
      ]
    },
    {
      "name": "Javier Hernandez",
      "jobTitle": "User Experience Engineer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "Seattle University",
      "major": "Performing Arts",
      "email": "javier@example.com",
      "linkedInUrl": "javier.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS"
      ]
    },
    {
      "name": "Maribel Dominguez",
      "jobTitle": "Front End Engineer",
      "company": "Bits and Bytes",
      "experience": "6 years",
      "school": "University of Washington",
      "major": "Mechanical Engineering",
      "email": "maribel@example.com",
      "linkedInUrl": "maribel.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
      ]
    }
   ]`

  //  parsing the data
   const cards = JSON.parse(cardsJSON)

  //  adding the main content section
  
   const container = document.querySelector('main')

  //  for each section loop through and create HTML elements


   cards.forEach(function(el){

     let list = document.createElement('main')
     list.innerHTML = `
    <div class="main">
     <div class="divide">
     <div class="left">
          <img src="img/headshot.jpg" alt="headshot of Paolo's dog">
     <h2>${el.name}</h2>
     <h2>${el.jobTitle}</h2>
     </div>
     <div class="right">
				<h2>${el.company}</h2>
        <h2>${el.experience}</h2>
        <h2>${el.school}</h2>
        <h2>${el.major}</h2>
        <h2>${el.email}</h2>
				<p><img src="img/linkedin.svg" alt="linkedin logo"> paolo.linkedinprofile.com</p>
			</div>
      </div>
	

     `
    container.append(list)

   })

   