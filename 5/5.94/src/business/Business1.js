import { queueComponentName } from '../utils';
import { SimpleComponent2, SimpleComponent3 } from '../components';

export const Business1 = () => {
    queueComponentName.queue("Business1");

    return (
        <div>
            <h2>Бизнес-компонент 1</h2>
            <SimpleComponent2 className="Business1" title="из Business1" />
            <SimpleComponent3 className="Business1" title="из Business1" />
        </div>
    );
};