export function FormGroup({ name, label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} className="form-control" placeholder={label} value={value} onChange={onChange} />
    </div>
  );
}