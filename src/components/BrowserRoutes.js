// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';

// mui.com/material-ui/guides/routing/

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Dashboard />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: 'students/:studentId',
//         element: <Student />,
//       },
//     ],
//   },
// ]);

const BrowserRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/signup' element={<SignUp />} />
      {/* <Route path='/schedule' element={<Schedule />} />
      <Route exact path='/assignments' element={<Assignments />} />
      <Route exact path='/students' element={<Students />} />
      <Route exact path='/teachers' element={<Teachers />} />
      <Route exact path='/notifications' element={<Notifications />} />
      <Route exact path='/events' element={<Events />} />
      <Route exact path='/classes' element={<Classes />} />
      <Route exact path='/forms' element={<Forms />} />
      <Route exact path='/assignments/:id' element={<Assignment />} />
      <Route exact path='/students/:id' element={<Students />} />
      <Route exact path='/teachers/:id' element={<Teachers />} />
      <Route exact path='/notifications/:id' element={<Notifications />} />
      <Route exact path='/events/:id' element={<Events />} />
      <Route exact path='/classes/:id' element={<Classes />} />
      <Route exact path='/forms/:id' element={<Forms />} /> */}
      <Route component={<ErrorPage />} />
    </Routes>
  );
};

export default BrowserRoutes;
