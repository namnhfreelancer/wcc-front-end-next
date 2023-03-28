import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';
import NewComponent_module from '../../../components/new-component/new-component.module.css';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent className={NewComponent_module.test} />
});
