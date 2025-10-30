function OnButton() {
  return (
      <>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /*onChange={ProcAndPlay} */ defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                  p1: ON
              </label>
          </div>
      </>
  );
}

export default OnButton;