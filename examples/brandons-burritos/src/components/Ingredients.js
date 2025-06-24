const Ingredients = (props) => {
    const label = props.label;
    const options = props.options;
    return (
        <>
            <u>{label}</u>
            {options.map((option)=>(
                <li>{option}</li>
            ))}
            <br></br>
        </>
    );
}

export default Ingredients;