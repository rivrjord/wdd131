let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    {
      sectionNumber: "001", 
      enrolled: 85, 
      instructor: "Roberto Diaz Rodriguez"
    },

    {
      sectionNumber: "002", 
      enrolled: 80, 
      instructor: "Matt Richardson"
    },

    {
      sectionNumber: "003", 
      enrolled: 75, 
      instructor: "Jane Doe Bassey"
    },

    {
      sectionNumber: "004", 
      enrolled: 90, 
      instructor: "Joseph Fielding Smith"
    }
  ]
};

function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.title} - ${course.code}`;
}

function sectionTemplate(section) {
  return `<tr>
  <td>${section.sectionNumber}</td>
  <td>${section.enrolled}</td>
  <td>${section.instructor}
  </tr>`
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections tbody").innerHTML = html.join("");
  
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);
