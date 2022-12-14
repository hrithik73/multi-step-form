import { SxProps } from '@mui/material';
import theme from 'theme';

const styles: {
  [key: string]: SxProps;
} = {
  layoutWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
  formWrapper: {
    padding: '0 20px',
    borderRadius: '10px',
    border: '1px solid #e6e6e6',
    boxShadow: '0px 0px 10px #e6e6e6',
    backgroundColor: '#f4f6f8',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  header: {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstPageHeader: {
    height: '100px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
};

export default styles;
