import { FC } from 'react';

const ContactMe: FC = () => {
  const openMailTo = () => {
    window.open('mailto:vaib1324@gmail.com');
  };

  return (
    <button className="mt-6 btn btn-primary" onClick={openMailTo}>
      Contact me
      <p className="fa fa-envelope" style={{ fontSize: '14px' }} />
    </button>
  );
};

export default ContactMe;
