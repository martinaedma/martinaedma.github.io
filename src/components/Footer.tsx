import { FacebookIcon, InstagramIcon } from "../svgicons";

export const Footer = (): JSX.Element => {
  return (
    <div className="header-and-footer-container footer">
      <a href="https://www.facebook.com/FXJiuJitsu">
        {<FacebookIcon />}
      </a>
      <a href="https://www.instagram.com/fxjiujitsu/">
        {<InstagramIcon />}
      </a>
    </div>
  );
};
