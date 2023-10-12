




  
const experiences = [
    {   company: "ProgressNow",
        title:"Mobile Engineer",
        points:[
            "Responsible for the mobile development of ProgressNow's mobile application. The application's purpose is to help volunteers manage social media. Implemented features according to technical documents.",
            "Implemented error handling for stability. Used Sentry to log errors to the system.",
            "Integrated legacy WebOauth authentication into the app, ensuring a smooth and secure user login process.",
            "I worked on a small team and was self-directed with development. Participated in code reviews for iOS, Android, and Web."
    ]},
    {   company: "Plumbum",
        title:"Founder",
        points:[
            "Organizing, planning, and promoting successful writers' workshops for aspiring writers of various skill levels and backgrounds.",
            "Facilitate engaging workshops, ensuring a welcoming and inclusive environment for participants. Providing individualized guidance and feedback, identifying strengths and weaknesses in the writing of attendees. Helping them achieve their writing goals.",
            "Collaborating with workshop attendees to address writing challenges. Developing and implementing workshop materials, including writing exercises, prompts, and resources.",
            "Developed Android native mobile application using Jetpack Compose and Firestore. Now on the Google Play Store.",
            "Organizing and hosting writers' workshops teaching others how to improve their writing."]
    },
    {   company:"Quantum Helath",
        title:"Android Engineer",
        points:[
            "Provided guidance on complex product development projects, with a focus on revamping an existing product.",
            "Developed features for assigned projects and assisted in the development and implementation of the product. Created API and UI to create a mobile application.",
            "Created documentation as code for testing purposes. Created documentation on Confluence improving hiring practices and teaching team members on development tools and practices.",
            "Created calls to an API with Retrofit and OKHttp.Created UI using CGRect. Used AndroidViewBinding to include legacy code.",
            "Wrote unit tests in mockk, and implemented Gradle script CI testing of line coverage with Kover. Wrote documentation and steps to replicate work for code reviews and to improve processes."
        ]}
]
const workSection = document.getElementById("work")
experiences.forEach(ex => {
    const div = document.createElement("div");
    div.className = "grid-item"
    const h5 = document.createElement("h5");
    const title = document.createElement("h6")
    const list = document.createElement("ul")
    ex.points.forEach(point => {
       const li = document.createElement("li")
       li.className = "task-item"
       li.textContent = point
       list.appendChild(li)

    })
    h5.textContent = ex.company;
    title.textContent = ex.title
    div.appendChild(h5);
    div.appendChild(title)
    div.appendChild(list);
    workSection.appendChild(div);
  });