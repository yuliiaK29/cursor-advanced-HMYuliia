const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  const getSubjects = (students) => {
    const subjectForStudent = Object.keys(students.subjects)
    .map((subject) => subject.substring(0, 1).toUpperCase() + subject.substring(1).toLowerCase().replaceAll('_', ' '));
    return subjectForStudent;
  }
  console.log(getSubjects(students[1]));

  const getAverageMark = (student) => {
    const arrayGrouptedMarksOfSubjects = Object.values(student.subjects);
    const marksOfAllSubjects = [].concat(...arrayGrouptedMarksOfSubjects);
    const averageMark = (marksOfAllSubjects.reduce((a, b) => a + b, 0) / marksOfAllSubjects.length);
    return +averageMark.toFixed(2);
  }
  console.log(getAverageMark(students[0]));

  const getStudentInfo = (students) => {
    return{course: students.course, name: students.name, averageMark: getAverageMark(students)};
  }
  console.log(getStudentInfo(students[0]));

  const getStudentsNames = (students) => {
    return students.map((students) => students.name).sort();
  }
  console.log(getStudentsNames(students));

  const getBestStudent = (students) => {
    return students.reduce((previousStudent, currentStudent) => getAverageMark(previousStudent) > getAverageMark(currentStudent) ? previousStudent : currentStudent).name;
  }
  console.log(getBestStudent(students));

  const calculateWordLetters = (word) => {
  const quantityOfLetters = word.split('').reduce((accumulator, letter) => {
      if (accumulator[letter]) {
        accumulator[letter]++
      } else {
        accumulator[letter] = 1
      }
      return accumulator}, {})
    return quantityOfLetters
};

console.log(JSON.stringify(calculateWordLetters("тест")));
