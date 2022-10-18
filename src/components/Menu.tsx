import React, { useEffect, useState } from "react";
import { useStore } from "../store";

export const Menu = (): JSX.Element => {
  const showMenu = useStore((state) => state.showMenu);
  const setShowMenu = useStore((state) => state.setShowMenu)
  const setView = useStore((state) => state.setView);
  const view = useStore((state) => state.view);
  const [currentView, setCurrentView] = useState('')

  useEffect(() => {
    setCurrentView(prev => view)
  }, [view])

  const views = [
    'Etusivu',
    'Aikataulu',
    'Yhteystiedot'
  ]

  const handleClick = (e: React.MouseEvent, nextView: string) => {
    if(view !== nextView){
      setView(nextView);
      setShowMenu(false);
    }
  }

  return (
    <div className={`menu-background ${showMenu ? "fade-in" : ""}`} onClick={() => setShowMenu(false)}>
      {views.map((item, index) => {
        return <button className={`menu-item ${currentView === item ? 'selected' : ''}`} key={index} onClick={(e) => handleClick(e, item)}>
          <span>{item}</span>
        </button>
      })}
    </div>
  );
};
