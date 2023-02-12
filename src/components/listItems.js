import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});
function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItemButton component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItemButton>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainListItems = (
  <React.Fragment>
    <ListItemLink to='/' primary='Dashboard' icon={<DashboardIcon />} />
    <ListItemLink
      to='/assignments'
      primary='Assignments'
      icon={<AssignmentIcon />}
    />
    <ListItemLink to='/students' primary='Students' icon={<PeopleIcon />} />
    <ListItemLink
      to='/notifications'
      primary='Notifications'
      icon={<NotificationsIcon />}
    />
    <ListItemLink to='/schedule' primary='Schedule' icon={<EventNoteIcon />} />
    <ListItemLink to='/events' primary='Events' icon={<EventIcon />} />
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Placeholder
    </ListSubheader>
    <ListItemLink to='/classes' primary='Classes' icon={<SchoolIcon />} />
    <ListItemLink to='/teachers' primary='Teachers' icon={<PeopleIcon />} />
    <ListItemLink to='/forms' primary='Forms' icon={<AssignmentIcon />} />
  </React.Fragment>
);
