export const ValidateAttributes = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const [{validity}] = e.target.elements;
        console.log(validity);
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <input required name="simpletext" />
            <button type="submit">Отправить</button>
        </form>
    );
}