import { memo } from 'react';

const MemoizedComponent = memo(function Component(props) {
    // реализация мемоизируемого компонента

    return <div>Мемоизируемый компонент + {props.alwaysChangeInParent}</div>;
});

export default MemoizedComponent;