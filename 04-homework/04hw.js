const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    const girls = [];
    const boys= [];
    const pairs = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].endsWith("а")){
          girls.push(students[i])
        }else {
            boys.push(students[i])
        };
    };

    for (let i = 0; i < boys.length; i++) {
        pairs.push([girls[i], boys[i]]);
    }
    return pairs;
}

const pairs = getPairs(students);
console.log(pairs);

const getThemes = (pairs, themes) => {
    const themesForStudents = [];

    for (let i = 0; i < pairs.length; i++) {
        themesForStudents.push([pairs[i][0] + ' i ' + pairs[i][1], themes[i]]);
    }
        return themesForStudents;
}

const themesForStudents = getThemes(pairs, themes);
console.log(themesForStudents);

const getMark = (students, marks) => {
    const studentMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentMarks.push([students[i], marks[i]]);
    }
    return studentMarks;
}

const studentMarks = getMark(students, marks);
console.log(studentMarks);

const randomMark = () => Math.floor(Math.random() * 5) + 1;

const getRandomMarks = (themesForStudents) => {
    const total = [];
    for (let i = 0; i < themesForStudents.length; i++) {
        total.push(themesForStudents[i].concat(randomMark()));
    }
    return total;
}

const total = getRandomMarks(themesForStudents);
console.log(total);



