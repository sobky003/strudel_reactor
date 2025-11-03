function PreProcess({value, onChange }) {
  return (
      <>
          <div className="col" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              <textarea className="form-control" rows="15" value={value} onChange={onChange} id="proc" ></textarea>
          </div>
      </>
  );
}

export default PreProcess;