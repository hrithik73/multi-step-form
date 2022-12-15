import React from 'react';
import { Box } from '@mui/system';

import { incrementCurrentFormNumber, updateDepartment } from 'redux/action';
import { useAppDispatch } from 'redux/store';
import Button from 'components/Button';
import Text from 'components/Text';
import styles from './style';

const optionData = [
  {
    title: 'Marketing',
    value: 1,
  },
  {
    title: 'Sales',
    value: 2,
  },
  {
    title: 'Developent',
    value: 3,
  },
];
const Department = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = (option: string) => {
    dispatch(incrementCurrentFormNumber());
    dispatch(updateDepartment(option));
  };

  return (
    <Box sx={styles.departmentWrapper}>
      <Text>Great! What department do you work in ?</Text>
      <Button
        onClick={() => onClickHandler(optionData[0].title)}
        title={optionData[0].title}
      />
      <Button
        onClick={() => onClickHandler(optionData[1].title)}
        title={optionData[1].title}
      />
      <Button
        onClick={() => onClickHandler(optionData[2].title)}
        title={optionData[2].title}
      />
    </Box>
  );
};

export default Department;
