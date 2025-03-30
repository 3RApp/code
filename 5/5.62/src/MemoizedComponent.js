import { memo } from 'react';
import { arePropsEquals } from './5.62';

const MemoizedComponent = memo(function Component(props) {
    // реализация мемоизируемого компонента

    return <div>Мемоизируемый компонент + {props.alwaysChangeInParent}</div>;
}, arePropsEquals);

export default MemoizedComponent;