
function PreProcess({ value, onChange }) {
  return (
      <>
          <div className="col" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              {/*text area changes based on value passed and onchange updates the songText in parent*/ }
              <textarea className="form-control" rows="15" value={value} onChange={onChange} id="proc" ></textarea>
          </div>
      </>
  );
}

export default PreProcess;