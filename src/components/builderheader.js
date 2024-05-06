import Drawer from "react-modern-drawer";
import React from "react";
import ReactDom from "react-dom";
import "react-modern-drawer/dist/index.css";
import Builder_header from "../builder_components/builder_header";
//import "../css/header.scss";

const Builderheader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <section className="builder-header">
        <div className="container-fluid">
          <div className="row py-2 d-flex justify-content-center text-center">
            <div className="col-8 d-flex justify-content-start py-4">
              {/* <p className="editor-label">website builder</p> */}
              <div className="site-view">
                <h1>this will display the site view </h1>
              </div>
            </div>
            <div className="col-4 py-4 d-flex justify-content-start">
              {/* <button onClick={toggleDrawer} className="buttonstyle">
                Show
              </button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-grip-horizontal drawer"
                viewBox="0 0 16 16"
                onClick={toggleDrawer}
              >
                <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla"
              >
                <div>
                  <Builder_header />
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Builderheader;
