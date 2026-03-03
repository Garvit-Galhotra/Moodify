const Form = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Form;
