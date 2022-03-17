import { useState } from "react";

import Portal from "./Portal";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isOpenNotPortal, setIsOpenNotPortal] = useState(false);
  const [isOpenWithPortal, setIsOpenWithPortal] = useState(false);

  const [namePortalDynamic, setNamePortalDynamic] = useState();
  const handleChangeName = () => {
    setNamePortalDynamic(Date.now().toString(36));
    setIsOpenWithPortal(true);
  };

  return (
    <>
      <div className="container">
        <div className="button-container">
          <button className="button" onClick={() => setIsOpenNotPortal(true)}>
            Not Portal
          </button>
          <button className="button" onClick={() => handleChangeName()}>
            With Portal
          </button>
        </div>
        <div>
          <Modal
            message="Epale gente..."
            close={isOpenNotPortal}
            onClose={() => setIsOpenNotPortal(false)}
          />
          {isOpenWithPortal && (
            <Portal id={namePortalDynamic}>
              <Modal
                message={`Saludos Sr. ${namePortalDynamic}`}
                close={isOpenWithPortal}
                onClose={() => setIsOpenWithPortal(false)}
              />
            </Portal>
          )}
        </div>
      </div>
    </>
  );
}
