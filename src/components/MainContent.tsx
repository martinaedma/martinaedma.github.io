import { useEffect, useState } from "react";
import { useStore } from "../store";
import { Contact } from "./content/Contact";
import { Landing } from "./content/Landing";
import { Timetable } from "./content/Timetable";

export const MainContent = () => {
  const view = useStore((state) => state.view);
  const [currentView, setCurrentView] = useState('Etusivu');

  useEffect(() => {
    setCurrentView(prev => view)
  }, [view])

  const displayContent = (): JSX.Element => {
    switch (currentView) {
      case 'Aikataulu':
        return <Timetable/>;
      case 'Yhteystiedot':
        return <Contact/>;
      default:
        return <Landing />;
    }
  };

  return <div className="main-content-container">
    {displayContent()}
    </div>
};
