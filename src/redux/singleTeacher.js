import axios from 'axios';
import { UPDATE_TEACHER_STUDENTS } from './singleStudent';

export const SET_TEACHER = 'SET_TEACHER';
const UPDATE_TEACHER = 'UPDATE_TEACHER';

const setTeacher = (teacher) => ({
  type: SET_TEACHER,
  teacher,
});

const updateTeacher = (teacher) => {
  return {
    type: UPDATE_TEACHER,
    teacher,
  };
};

export const fetchTeacher = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/teacheres/${id}`);
      dispatch(setTeacher(response.data));
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const updateTeacherThunk = (teacher) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/teacheres/${teacher.id}`, teacher);
      dispatch(updateTeacher(response.data));
    } catch (err) {
      console.log(err.response);
    }
  };
};

const teacherReducer = (teacher = {}, action) => {
  switch (action.type) {
    case SET_TEACHER:
      return action.teacher;
    case UPDATE_TEACHER:
      return { ...teacher, ...action.teacher };
    case UPDATE_TEACHER_STUDENTS:
      return {
        ...teacher,
        students: teacher.students.filter(
          (student) => student.id !== action.student.id
        ),
      };
    default:
      return teacher;
  }
};

export default teacherReducer;
