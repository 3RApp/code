import { queueComponentName } from '../utils';
import { SimpleComponent1, SimpleComponent2, SimpleComponent3 } from '../components';

export const Business2 = () => {
    queueComponentName.queue("Business2");

    return (
        <div>
            <h2>Бизнес-компонент 2</h2>
            <SimpleComponent1 className="Business2" title="из Business2" />
            <SimpleComponent2 className="Business2" title="из Business2" />
            <SimpleComponent3 className="Business2" title="из Business2" />
        </div>
    );
};