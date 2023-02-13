const db = require(".").db;
// const Student = require("./models/Student");
// const Teacher = require("./models/Teacher");
const {faker} = require('@faker-js/faker')

const COLLECTIONS = ["teachers", "students", "classes","assignments"];

const createTeacher = () => {
  return   {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.helpers.unique(faker.random.numeric),
    password: ,
  },
}
const TEACHER_DATA = [
  {
    firstName: "dakota",
    lastName: "fabro",
    username: "dakotafabro",
    password: "pw",
  },
  {
    firstName: "fi",
    lastName: "murray",
    username: "fimurray",
    password: "pw",
  },
]; // TODO add seed data

const STUDENT_DATA = [
  {
    firstName: "koda",
    lastName: "fabro",
    username: "kodafabro",
    password: "pw",
    gradeLevel: 3,
    birthday: new Date("1992-05-11"),
    parent1_name: "dennis",
    parent1_phone: 9999999999,
  },
  {
    firstName: "fiona",
    lastName: "murray",
    username: "fionamurray",
    password: "pw",
    gradeLevel: 3,
    birthday: new Date("1998-06-03"),
    parent1_name: "bob",
    parent1_phone: 9999999999,
  },
]; // TODO add seed data

const CLASS_DATA = [{}]; // TODO add seed data

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
      .insertMany(TEACHER_DATA);

    const studentSeed = await db
      .collection("students")
      .insertMany(STUDENT_DATA);

    const classSeed = await db.collection("classes").insertMany(CLASS_DATA);

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
