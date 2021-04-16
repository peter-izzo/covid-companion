import { useEffect, useState } from "react";

const Question = ({
  data,
  name,
  prompt,
  type,
  when,
  answers,
  onChange,
  onHide,
}) => {
  // Input field visibility state
  const [visible, setVisible] = useState(false);

  // Side Effect for handling user changing previously selected options
  useEffect(() => {
    if (!visible) onHide(name);
  }, [name, visible, onHide]);

  // Side Effect for setting visibility of fields if 'when' property is included and is a function
  useEffect(() => {
    if (typeof when === "function") return setVisible(when(data));
    return setVisible(true);
  }, [data, when]);

  switch (type) {
    case "boolean":
    case "radio":
      return (
        <>
          {visible && (
            // <div className="ml3" style={{ marginRight: "4px" }}>
            <>
              {prompt}
              {answers.map((a) => (
                <>
                  <ol>
                    <input
                      // className="fw5"
                      // style={{ marginRight: "10px", marginLeft: "5px" }}
                      id={a}
                      type="radio"
                      name={name}
                      value={a}
                      onChange={onChange}
                    />
                    <label
                      style={{ marginLeft: "8px" }}
                      // cellSpacing="3"
                      htmlFor={a}
                    >
                      {a}
                    </label>
                  </ol>
                </>
              ))}
              {/* </div> */}
            </>
          )}
        </>
      );
    case "select":
      return (
        <>
          {visible && (
            <>
              {/* <div className="ml3" style={{ marginRight: "4px" }}> */}
              {prompt}
              <ol>
                <select
                  // className="ml2"
                  // style={{ marginLeft: "10px" }}
                  name={name}
                  onChange={onChange}
                >
                  {answers.map((a) => (
                    <option value={a}>{a}</option>
                  ))}
                </select>
              </ol>
              {/* </div> */}
            </>
          )}
        </>
      );
    case "date":
      return (
        <>
          {visible && (
            <>
              {/* <div className="ml3" style={{ marginRight: "4px" }}> */}
              {prompt}
              <ol>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name={name}
                  onChange={onChange}
                />
                {/* </div> */}
              </ol>
            </>
          )}
        </>
      );
    case "checkbox":
      return (
        <>
          {visible && (
            <>
              {/* <div className="ml3" style={{ marginRight: "4px" }}> */}
              {prompt}
              <input
                // className="pa3 w-100"
                type="checkbox"
                name={name}
                checked={data[name]}
                onChange={onChange}
              />
              {/* </div> */}
            </>
          )}
        </>
      );
    default:
      return null;
  }
};

export default Question;
