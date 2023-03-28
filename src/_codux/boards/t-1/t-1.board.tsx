import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { T1 } from '../../../components/t-1/t-1';

export default createBoard({
    name: 'T1',
    Board: () => <T1 />
});
