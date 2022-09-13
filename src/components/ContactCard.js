import React from "react";

function ContactCard(props) {
  return (
    <React.Fragment>
      {/* {Object.keys(props.selectData).length > 0 ? ( */}
      {/* <React.Fragment> */}
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header bg-info ">
          <h2>User's Details</h2>
        </div>
        <div className="card-body">
          <img
            src={props.selectData.image}
            alt=""
            className="img-thumbnail rounded-circle w-50"
          />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Name : {props.selectData.firstName}{" "}
          </li>
          <li className="list-group-item">
            gender : {props.selectData.gender}{" "}
          </li>
          <li className="list-group-item">age : {props.selectData.age} </li>
          <li className="list-group-item">email : {props.selectData.email} </li>
          <li className="list-group-item">phone : {props.selectData.phone} </li>
        </ul>
      </div>
      {/* </React.Fragment> */}
      {/* ) : null} */}
    </React.Fragment>
  );
}

export default ContactCard;
