console.log("File Linked")


//1 Answer:

//For the given JSON iterate over all for loops (for, for in, for of, forEach)

const jsonObject = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

//Using various types of loops:

//1.Using a for...in loop:

for (let key in jsonObject) {
  if (jsonObject.hasOwnProperty(key)) {
    console.log(key, jsonObject[key]);
  }
}

//2.Using a for...of loop:

for (let value of Object.values(jsonObject)) {
  console.log(value);
}

//3.Using the forEach method:

Object.values(jsonObject).forEach(function(value) {
  console.log(value);
});

//4.Using a for loop with an index:

const keys = Object.keys(jsonObject);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = jsonObject[key];
  console.log(key, value);
}

//////////////////////////////////////////////////////////////////////////////////////

//2nd Answer:

{
  "name"; "Mahammad Shahid",
  "email"; "shahid.m130820@gmail.com",
  "phone"; "8328582166",
  "address"; "Maruthi Nagar,Anantapur(515001),Andhra Pradesh",
  "summary"; "Experienced software developer with a passion for creating web applications. Strong problem-solving skills and a focus on delivering high-quality code. Proficient in JavaScript and web development frameworks.",
  "education"; [
    {
      "degree": "Bachelor of Technology in Electronics and Communication Engineering",
      "college": "SBSP Univercity",
      "graduation_year": 2021
    }
  ],
  "experience"; [
    {
      "position": "Associate Software Engineer",
      "company": "GENEX TechCo Inc.",
      "start_date": "Jan 2021",
      "end_date": "Present",
      "responsibilities": [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Participated in code reviews to ensure code quality and consistency.",
        "Resolved bugs and improved application performance."
      ]
    }
  ],
  "skills"; [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Git",
    "Teamwork"
  ],
  "languages"; [
    {
      "language": "English",
      "proficiency": "Professional"
    },
    {
      "language": "Hindi",
      "proficiency": "Professional"
    }
  ]
}


////////////////////////////////////////////////////////////////////////////////////////