const InputField = ({ onChange, value, fieldTitle }) => {
    return (
        <div>
            <label htmlFor={fieldTitle}>{fieldTitle}</label>
            <input
                id={fieldTitle}
                onChange={onChange}
                value={value}
                type="number"
            />
        </div>
    );
}

export default InputField;