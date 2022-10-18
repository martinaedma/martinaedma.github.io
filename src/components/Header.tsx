import { useStore } from "../store";

export const Header = (): JSX.Element => {
  const setShowMenu = useStore((state) => state.setShowMenu);
  const showMenu = useStore((state) => state.showMenu);

  return (
    <div className="header-and-footer-container">
      <div className="menu-button" onClick={() => setShowMenu(!showMenu)}>
        <div
          className={`menu-button-bar ${showMenu ? "bar1" : ""}`}
        ></div>
        <div
          className={`menu-button-bar ${showMenu ? "bar2" : ""}`}
        ></div>
        <div
          className={`menu-button-bar ${showMenu ? "bar3" : ""}`}
        ></div>
      </div>
    </div>
  );
};
