import db from "./index.js";

const COLLECTIONS = ["teachers", "students", "classes"];

const TEACHER_DATA = [{}]; // TODO add seed data

const STUDENT_DATA = [{}]; // TODO add seed data

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

    const teacherSeed = await db.collection(
      "teachers".insertMany(TEACHER_DATA)
    );

    const studentSeed = await db.collection(
      "teachers".insertMany(STUDENT_DATA)
    );

    const classSeed = await db.collection("teachers".insertMany(CLASS_DATA));

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

const result = [];

await db.listCollections().forEach((collection) => {
  result.push(collection.name);
});

if (result.includes("teachers")) {
  drop();
}

seed();
