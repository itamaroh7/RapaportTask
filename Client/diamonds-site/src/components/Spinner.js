function Spinner() {
    return (
        <div className="d-flex container-fluid align-items-center justify-content-center">
        <div style={{width:"200px", height:"200px"}} className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  export default Spinner;