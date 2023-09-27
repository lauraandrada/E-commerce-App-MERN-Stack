import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ Color: ["blue", "green", "red"] }, { RAM: ["1TB", "2TB"] }].map(
        (item, idx) => {
          return (
            <div key={idx} className="mb-3">
              <Form.Label>{Object.keys(item)}</Form.Label>
              {item[Object.keys(item)].map((i, idx) => (
                <Form.Check type="checkbox" id="default-checkbox" label={i} />
              ))}
            </div>
          );
        }
      )}
    </>
  );
};

export default AttributesFilterComponent;
