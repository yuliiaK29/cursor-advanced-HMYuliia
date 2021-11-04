class Student {
  constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = [5, 4, 4, 5];
      this.isStudy = true;
      this.recoverMarks = [];  
 }

 getInfo() {
    return this.university + ' ' + this.course + ' ' + this.fullName
 }

 get getMarks() {
  if (this.isStudy) {
    return this.marks;
  } else {
    return null;
  }
}

set setMarks(mark) {
  if (this.isStudy) {
    this.marks.push(mark);
    return this.marks;
  } else {
    return null;
  }
}
getAverageMark() {
return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
}

dismiss() {
  this.isStudy = false;
}

recover() {
  this.isStudy = true;
}
}

const yuliia = new Student('Університет Банківської справи', '6 курс', 'Юля Кульчицька');


console.log(yuliia.getInfo());
console.log(yuliia.getMarks);
console.log(`Середній бал ${yuliia.getAverageMark()}`);
yuliia.setMarks = 5;
yuliia.dismiss();
console.log(yuliia.getMarks);
yuliia.recover();
console.log(yuliia.getMarks);

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
      super(university, course, fullName);
      setInterval(() => this.getScholarship(), 30000);
  }
  getScholarship() {
      if (this.getAverageMark() >= 4) {
          console.log('Ви отримали 1400 грн. стипендії.');
      }
  }
}
const dmytro = new BudgetStudent('НУ ЛП', '6', 'Дмитро Кійко');


console.log(dmytro.getInfo());
dmytro.getScholarship();
dmytro.setMarks = 4;
dmytro.setMarks = 5;
dmytro.setMarks = 5;
console.log(`Середній бал ${dmytro.getAverageMark()}`);