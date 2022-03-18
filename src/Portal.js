import { memo, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  const [namePortalDynamic] = useState(Date.now().toString(36));

  const el = useRef(
    document.getElementById(namePortalDynamic) || document.createElement("div")
  );

  const [dynamic] = useState(!el.current.parentElement);

  useEffect(() => {
    let elCurrent;

    if (dynamic) {
      el.current.id = namePortalDynamic;
      elCurrent = el.current;
      document.body.appendChild(el.current);
    }

    return () => {
      if (dynamic && elCurrent.parentElement) {
        elCurrent.parentElement.removeChild(elCurrent);
      }
    };
  }, [dynamic, namePortalDynamic]);

  return createPortal(children, el.current);
};

export default memo(Portal);
