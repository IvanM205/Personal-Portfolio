const skillsContent = document.getElementById("skills-content");
let numb = skillsContent.childElementCount;
arrayElements = [];

const handleEvent = (event) => {
  let chosenEl = event.target.parentElement;
  console.log(chosenEl);
  let resultArray = [];
  for (let each of arrayElements) {
    if (each !== chosenEl) {
      resultArray.push(each);
    }
  };
  const arrayLen = resultArray.length;
  const midIdx = Math.floor(arrayLen/2);
  //console.log(resultArray);
  console.log(chosenEl)
  resultArray = resultArray.slice(0, midIdx).concat(chosenEl, resultArray.slice(midIdx));
  //console.log(resultArray);
  skillsContent.innerHTML = "";
  for (let each of resultArray) {
    skillsContent.appendChild(each);
  }
  console.log(resultArray);
};

for (const child of skillsContent.children) {
  arrayElements.push(child);
}

skillsContent.addEventListener('click', handleEvent);