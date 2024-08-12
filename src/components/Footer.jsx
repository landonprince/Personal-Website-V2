import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="text-right">
          <p className="caption text-n-4">
            landoncprince@gmail.com | 214-984-8523
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
