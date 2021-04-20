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
            <>
              {prompt}
              {answers.map((a) => (
                <>
                  <ol className="fw4">
                    <input
                      id={a}
                      type="radio"
                      name={name}
                      value={a}
                      onChange={onChange}
                    />
                    <label style={{ marginLeft: "8px" }} htmlFor={a}>
                      {a}
                    </label>
                  </ol>
                </>
              ))}
            </>
          )}
        </>
      );
    case "select":
      return (
        <>
          {visible && (
            <>
              {prompt}
              <ol>
                <select name={name} onChange={onChange}>
                  {answers.map((a) => (
                    <option value={a}>{a}</option>
                  ))}
                </select>
              </ol>
            </>
          )}
        </>
      );
    case "date":
      return (
        <>
          {visible && (
            <>
              {prompt}
              <ol>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name={name}
                  onChange={onChange}
                />
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
              {prompt}
              <input
                type="checkbox"
                name={name}
                checked={data[name]}
                onChange={onChange}
              />
            </>
          )}
        </>
      );
    default:
      return null;
  }
};

export default Question;
