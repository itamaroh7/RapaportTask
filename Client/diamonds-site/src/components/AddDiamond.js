function AddDiamond(props) {
  /**
   * Add diamond to the DB(csv file) and update the site
   * @param {event} e 
   */
  const addDiamond = async (e) => {
    e.preventDefault();

    try {
      let diamond = {
        shape: e.target.shape.value,
        size: e.target.size.value,
        color: e.target.color.value,
        clarity: e.target.clarity.value,
        price: e.target.price.value,
        listPrice: e.target.listPrice.value,
      };
      let fetchParams = {
        method: "POST",
        body: JSON.stringify(diamond),
        headers: { "Content-Type": "application/json" },
      };
      fetch(process.env.REACT_APP_API + "diamonds", fetchParams)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          //Checks if there any errors:
          if (data.errors) {
            if(data.errors.diamond)
              alert("Please enter all fields");
          }
          else if (data.detail) {
            alert(data.detail);
          }else if(data.shape){
            //Update the site after adding the diamond
            props.getDataFunc();
            document.getElementById("add-diamond-form").reset()
            alert("Added successfully")
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const inputElements = [
    {
      name: "shape",
      type: "Shape",
      img: "📐",
      pattern: "^[a-zA-Z]+$",
      placeHolder: "Example: Pear",
      feedback: "Must be in some Shape.",
    },
    {
      name: "size",
      type: "Size",
      img: "📏",
      pattern: "^[0-9]+([.]?[0-9])*$",
      placeHolder: "Example: 1.3",
      feedback: "Must be a decimal number.",
    },
    {
      name: "color",
      type: "Color",
      img: "🌈",
      pattern: "^[A-Z]$",
      placeHolder: "Example: G",
      feedback: "Must be a Capital Letter.",
    },
    {
      name: "clarity",
      type: "Clarity",
      img: "👓",
      pattern: "[a-zA-Z0-9]+",
      placeHolder: "Example: I2",
      feedback: "Cannot be empty.",
    },
    {
      name: "price",
      type: "Price",
      img: "💰",
      pattern: "^[0-9]+([.]?[0-9])*$",
      placeHolder: "Example: 12000",
      feedback: "Must be a decimal number.",
    },
    {
      name: "listPrice",
      type: "List Price",
      img: "💵",
      pattern: "^[0-9]+([.]?[0-9])*$",
      placeHolder: "Example: 13000",
      feedback: "Must be a decimal number.",
    },
  ];

  return (
    <div>
   <h1 className="mb-3 fst-italic" style={{ fontSize: "8vh" }}>Add Diamond</h1>
    <div className="container d-flex justify-content-center">
      <form
      id="add-diamond-form"
        onSubmit={addDiamond}
        className="row g-3 p-2 justify-content-center needs-validation was-validated shadow rounded"
        style={{ maxWidth: "500px" }}
        novalidate
      >
        {inputElements.map((elem,index) => {
          return (
            <div key={index} className="col-md-12">
              <strong className="form-label d-flex">{elem.type}</strong>
              <div className="input-group has-validation">
                <span className="input-group-text">{elem.img}</span>
                <input
                  name={elem.name}
                  type="text"
                  className="form-control"
                  aria-describedby="inputGroupPrepend"
                  pattern={elem.pattern}
                  placeholder={elem.placeHolder}
                  required=""
                />
                <div className="invalid-feedback">
                  {elem.feedback}
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-8 d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="submit">
            Add Diamond
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddDiamond;