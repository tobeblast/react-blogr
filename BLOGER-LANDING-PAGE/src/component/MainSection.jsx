import "../index.scss";
import illustrationDesktop from "../assets/illustrationDesktop.svg";
import illustrationPhone from "../assets/illustrationPhones.svg";
import illustrationLaptop from "../assets/illustrationLaptopDesktop.svg";

export function MainSection() {
  return (
    <>
      <main>
        <div className="future container d-flex align-item-center justify-content-center"  data-aos="fade-down" data-aos-duration="3000">
          <h1 className="fs-1">Designed for the future</h1>
        </div>

        <div className="introduction container d-flex align-item-center justify-content-center">
          <div className="editor"  data-aos="fade-right" data-aos-duration="3000">
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <div className="desktop-div">
            <div className="desktop position-reletive" data-aos="fade-left" data-aos-duration="3000">
              <img src={illustrationDesktop} alt="Close icon" />
            </div>
          </div>
        </div>

        <div className="phone-div">
          <div className="state d-flex container align-item-center justify-content-between gap-5">
            <div className="phone">
              <div>
                <div className="position-relative" data-aos="fade-down" data-aos-duration="3000">
                  <img
                    src={illustrationPhone}
                    alt="phone"
                    className="position-absolute"
                  />
                </div>
              </div>
            </div>
            <div className="art" data-aos="fade-up" data-aos-duration="3000">
              <div className="text-white">
                <h3> State of the Art Infrastructure</h3>
                <p>
                  With reliability and speed in mind, worldwide data centers
                  provide the backbone for ultra-fast connectivity. This ensures
                  your site will load instantly, no matter where your readers
                  are, keeping your site competitive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="laptop-div container">
          <div className="lap d-flex align-item-center justify-content-between">
            <div className="laptop">
              <div>
                <div className="position-relative" data-aos="zoom-out" data-aos-duration="3000">
                  <img
                    src={illustrationLaptop}
                    alt="Laptop"
                    className="position-absolute"
                  />
                </div>
              </div>
            </div>
            <div className="open" data-aos="zoom-top-in" data-aos-duration="3000">
              <h3> Free, open, simple</h3>
              <p>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
              <h3> Powerful tooling</h3>
              <p>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
