const db = require(".").db;
// const Student = require("./models/Student");
// const Teacher = require("./models/Teacher");
const {faker} = require('@faker-js/faker')

const COLLECTIONS = ["teachers", "students", "classes","assignments"];

const createTeacher = () => {
  return   {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.random.numeric(7),
  }
}

const createStudent = () => {
  return   {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.random.numeric(7),
    gradeLevel: faker.helpers.arrayElement(1,2,3,4,5),
    birthday: faker.date.between('2010-01-01T00:00:00.000Z', '2018-01-01T00:00:00.000Z'),
    parent1_name: faker.name.fullName(),
    parent1_phone: faker.phone.number(),
  }
}


const createUsers = (numUsers = 5,cb) => {
  return new Array(numUsers)
    .fill(undefined)
    .map(cb);
}

let fakeTeachers = createUsers(5,createTeacher)
let fakeStudents = createUsers(5,createStudent)
let fakeClasses = [{}]


const drop = async () => {
  try {
    COLLECTIONS.forEach(
      async (collection) => await db.collection(collection).drop()
    );

    console.log("All collections dropped from db 🫡");
  } catch (x) {
    console.error(x);
  }
};

const seed = async () => {
  try {
    COLLECTIONS.forEach(async (collection) => await db.collection(collection));

    const teacherSeed = await db
      .collection("teachers")
      .insertMany(fakeTeachers);

    const studentSeed = await db
      .collection("students")
      .insertMany(fakeStudents);

    const classSeed = await db.collection("classes").insertMany(fakeClasses);

    console.log("Database seeded 🌱");

    return {
      data: {
        teachers: teacherSeed,
        students: studentSeed,
        classes: classSeed,
      },
    };
  } catch (x) {
    console.error(x);
    return { error: x };
  }
};

// const getCollections = () => {
//   const result = [];

//   const collections = db.listCollections();

//   for (let i = 0; i < collections.length; i++) {
//     result.push(collections[i].name);
//   }

//   return result;
// };

// const collectionResults = getCollections();

// console.log(collectionResults);

// if (collectionResults.includes("teachers")) {
//   drop();
// }

seed();
