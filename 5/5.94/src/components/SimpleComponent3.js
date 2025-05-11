import { queueComponentName } from '../utils';

export const SimpleComponent3 = ({ className, title }) => {
    queueComponentName.queue("SimpleComponent3");

    return (
        <div className={className}>SimpleComponent3, {title}</div>
    )
}