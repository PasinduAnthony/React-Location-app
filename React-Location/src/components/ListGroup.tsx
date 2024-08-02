import { Fragment, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  //   Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      {/* need when displaying multiple elemnets */}

      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) =>
          item.length > 5 ? (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ) : (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              No item found
            </li>
          )
        )}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
