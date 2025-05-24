import React from "react";
import { Select, SelectButtons, SelectName } from "../Home/Table/Table.styled";

export function FilterLine({ name, title, selectedText, isOpened, setOpened, children }) {

  function clickArrow(event) {
    event.stopPropagation()
    
    if (isOpened)
      setOpened("")
    else
      setOpened(name)
  }

  return (
    <Select>
      <SelectName>
        <span>{title}</span>
        {selectedText && <span>{selectedText}</span>}
        <div className="arrow" onClick={clickArrow}>
          <svg style={{ minWidth: "7px", minHeight: "7px" }} width="7" height="7" viewBox="0 0 7 7"><path d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z" fill="black" /></svg>
        </div>
      </SelectName>
      {
        isOpened
          && <SelectButtons onClick={(event) => event.stopPropagation()}>
            {children}
          </SelectButtons>
      }
    </Select>
  )
}
