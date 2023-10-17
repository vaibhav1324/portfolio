import { FC } from 'react';

const LINKS = [
  {
    name: 'fa fa-envelope',
    url: 'mailto:vaib1324@gmail.com',
  },
  {
    name: 'fa fa-linkedin',
    url: 'https://www.linkedin.com/in/vaibhav-naik-27b5671a2/',
  },
  {
    name: 'fa fa-github',
    url: 'https://www.github.com/vaibhav1324/',
  },
  {
    name: 'fa fa-instagram',
    url: 'https://www.instagram.com/vbhv.ts/',
  },
  {
    name: 'fa fa-brands fa-medium',
    url: 'https://medium.com/@vaib1324',
  },
];

const ContactMe: FC = () => {
  return (
    <div className="mt-6 flex gap-3">
      {LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-circle btn-outline">
          <p className={link.name} />
        </a>
      ))}
    </div>
  );
};

export default ContactMe;
