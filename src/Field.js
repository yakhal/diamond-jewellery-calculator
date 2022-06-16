function Field(props) {
    return (
        <div className='field'>
            <div className='field-name'>{props.fieldName}</div>
            <div className='field-result'>
                {props.unit === "₹" && props.unit} {props.result || 0} {props.unit !== "₹" && props.unit}
            </div>
        </div>
    );
}

export default Field;