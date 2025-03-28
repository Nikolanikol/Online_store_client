import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  if (!device.types) return <div>dont founded types</div>;
  return (
    <ListGroup variant="flush" defaultActiveKey="#link1">
      {device.types.map((type, i) => {
        return (
          <ListGroup.Item
            onClick={() => {
              device.setSelectedType(type);
              device.setSortedDeviceList(null, type.id);
            }}
            key={type.name}
            variant="secondary"
            action
            href={`#link1 + ${i}`}
          >
            {type.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default TypeBar;
