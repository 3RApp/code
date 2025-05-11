import { queueComponentName } from '../utils';

export const SimpleComponent1 = ({ className, title }) => {
    queueComponentName.queue("SimpleComponent1");

    return (
        <h3 className={className}>SimpleComponent1, {title}</h3>
    )
}