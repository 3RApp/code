import { queueComponentName } from '../utils';

export const SimpleComponent2 = ({ className, title }) => {
    queueComponentName.queue("SimpleComponent2");

    return (
        <button className={className}>SimpleComponent2, {title}</button>
    )
}