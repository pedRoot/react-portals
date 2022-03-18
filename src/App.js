import { useState } from "react";

import Portal from "./Portal";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isOpenNotPortal, setIsOpenNotPortal] = useState(false);
  const [isOpenWithPortal, setIsOpenWithPortal] = useState(false);

  return (
    <>
      <div className="container">
        <div className="button-container">
          <button
            className="button"
            onClick={() => setIsOpenNotPortal(true)}
            disabled={isOpenNotPortal}
          >
            Not Portal
          </button>
          <button
            className="button"
            onClick={() => setIsOpenWithPortal(true)}
            disabled={isOpenWithPortal}
          >
            With Portal
          </button>
        </div>
        <div id="showModalHere">
          {isOpenNotPortal && (
            <Modal
              message="Epale gente..."
              onClose={() => setIsOpenNotPortal(false)}
            />
          )}
          {isOpenWithPortal && (
            <Portal>
              <Modal
                message={`Saludos desde un portal.`}
                onClose={() => setIsOpenWithPortal(false)}
              />
            </Portal>
          )}
        </div>
      </div>
    </>
  );
}
