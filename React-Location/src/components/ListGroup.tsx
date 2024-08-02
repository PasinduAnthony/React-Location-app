import { Fragment, useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
                onSelectItem(item);
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
                onSelectItem(item);
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
