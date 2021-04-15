import React, { useState } from "react";

const Form = ({ list, updateList }) => {
  // State variables
  const [field, setField] = useState("0");
  // Callback function: for input
  const changedField = (event) => {
    const linkField = event.target.value;
    setField(linkField);
    console.log(field);
  };
  // Callback function: for button
  const submitLink = (event) => {
    const newList = [...list, field];
    updateList(newList);
  };
  // return JSX
  return (
    <div>
      <input value={field} onChange={changedField} />
      <button type="submit" value="Click Me" onClick={submitLink}>
        Click Me!
      </button>
    </div>
  );
};

const LinkList = ({ links }) => {
  console.log("this is the list");
  return <div>Lnks</div>;
};

const ReadLinks = () => {
  console.log("this is the list");
  return <div>Read</div>;
};

export default function App() {
  const [links, setLinks] = useState([]);
  console.log(`link list: ${links}`);
  return (
    <div>
      This is App.jsx
      <Form list={links} updateList={(linkArr) => setLinks(linkArr)} />
      <LinkList list={links} />
      <ReadLinks />
    </div>
  );
}
