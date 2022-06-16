function Field({fieldName, result, unit}) {
    return (
        <div className='field'>
            <div className='field-name'>{fieldName}</div>
            <div className='field-result'>
                {unit === "₹" && unit} {result || 0} {unit !== "₹" && unit}
            </div>
        </div>
    );
}

export default Field;