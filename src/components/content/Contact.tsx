import { EmailIcon, FxIcon, LocationIcon, PhoneIcon } from "../../svgicons";

export const Contact = (): JSX.Element => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-container-overlay">
          <FxIcon/>
        </div>
        <a href="https://www.google.com/maps/place/Fx+Jiu+Jitsu/@62.2996647,25.7124731,15z/data=!4m2!3m1!1s0x0:0x6f9aac69226763d6?sa=X&ved=2ahUKEwiogPmC6eb6AhVEx4sKHadtDVEQ_BJ6BAhhEAU">
          <LocationIcon />
          <div className="contact-location-text">
            <span>Kirrinpolku 2, </span>
            <span>40270, </span>
            <span>Jyväskylä</span>
          </div>
        </a>

        <a href="tel:358-40-730-1020">
          <PhoneIcon />
          <div className="contact-location-text">
            <span>(+358) 40 730 1020 </span>
          </div>
        </a>

        <a href="mailto:info@fxjj.fi">
          <EmailIcon />
          <div className="contact-location-text">
            <span>info@fxjj.fi</span>
          </div>
        </a>
      </div>
      <div className="contact-container background-image"></div>
    </>
  );
};
