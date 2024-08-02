import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import MapComponent from "./components/MapComponent";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectedItem}
  //     />
  //   </div>
  // );

  //   <div>
  //   <Alert>
  //     Hello <span>World</span>
  //   </Alert>
  // </div>

  return (
    <div>
      <MapComponent />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
