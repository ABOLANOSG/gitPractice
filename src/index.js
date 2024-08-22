//module.exports = sum = (a) => a.reduce((t, v) => t + v, 0);

const practiceFunctions = {
  longestString: (arr) => {
    let longestWord = "";

    arr.forEach(elem => {
      if(elem.length > longestWord.length) {
        longestWord = elem;
      }
    });
    return longestWord;
  },
  orderByAge: (arr) => {
    
    return arr.sort((a, b) => a.age - b.age);
  
  },
  toUpperCase: (arr) => {
    return arr.map(elem => elem.toUpperCase());
  },
  returnApproved: (arr) => {

    let approved = arr.filter(student => student.passed === true)//filters students who passed
    .map( student => {
      //calculate avg grade
      const averageGrade = student.grades.reduce((accumulated, grade) => accumulated + grade, 0) / student.grades.length;

      return {name: student.name, averageGrade: averageGrade};
    })
    return approved;

  },
  

  };
  
module.exports = practiceFunctions;