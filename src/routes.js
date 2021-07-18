import DashboardIcon from '@material-ui/icons/Dashboard'; 
import AssessmentIcon from '@material-ui/icons/Assessment';

const routes = [
    {
      title: 'Home',
      path: '/',
      icon: <AssessmentIcon />,
      cName: 'nav-text'
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />,
      cName: 'nav-text'
    },
]

export default routes;