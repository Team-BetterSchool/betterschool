import axios from 'axios';

const SET_TEACHERS = 'SET_TEACHERS';
const CREATE_TEACHER = 'CREATE_TEACHER';
const DELETE_TEACHER = 'DELETE_TEACHER';

export const setTeachers = (teachers) => ({
  type: SET_TEACHERS,
  teachers,
});

const createTeacher = (teacher) => {
  return {
    type: CREATE_TEACHER,
    teacher,
  };
};

const deleteTeacher = (teacher) => {
  return {
    type: DELETE_TEACHER,
    teacher,
  };
};

export const fetchTeachers = () => async (dispatch) => {
  const teachersResponse = await axios.get('/api/teachers');
  dispatch(setTeachers(teachersResponse.data));
};

export const createTeacherThunk = (teacher, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/teachers`, teacher);
      dispatch(createTeacher(response.data));
      history.push('/teachers');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export const deleteTeacherThunk = (id, history) => {
  return async (dispatch) => {
    try {
      const { data: teacher } = await axios.delete(`/api/teachers/${id}`);
      dispatch(deleteTeacher(teacher));
      history.push('/teachers');
    } catch (err) {
      console.log(err.response);
    }
  };
};

export default function teachersReducer(teachers = [], action) {
  switch (action.type) {
    case SET_TEACHERS:
      return action.teachers;
    case CREATE_TEACHER:
      return [...teachers, action.teacher];
    case DELETE_TEACHER:
      return teachers.filter((teacher) => teacher.id !== action.teacher.id);
    default:
      return teachers;
  }
}
