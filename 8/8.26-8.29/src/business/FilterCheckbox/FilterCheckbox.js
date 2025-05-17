import styles from './FilterCheckbox.module.css';
// Шаг 1
export const FilterCheckbox = ({ onChange, current, list }) => {
    // Шаг 16
    return (
        <nav>
            {
                list.map((item) => {
                    const {id, code, title} = item;

                    return (<span 
                        className={current === code ? styles.current : styles.alternative} 
                        key={id} 
                        onClick={() => onChange(code)}>
                            {title}
                    </span>);
                })
            }
        </nav>
    );
};