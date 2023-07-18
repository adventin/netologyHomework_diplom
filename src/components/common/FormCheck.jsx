export function FormCheck({ isFormChecked, setIsFormChecked }) {
  return (
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="agreement" checked={isFormChecked} onChange={() => setIsFormChecked(!isFormChecked)} />
      <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
    </div>
  );
}