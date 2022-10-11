import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { hashBreadcrumb } from "utils";

// Header.propTypes = {};

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [breadcrumb, setBreadcrumb] = useState<{ title: any; path: string }[]>();

  useEffect(() => {
    if (pathname === "/") {
      setBreadcrumb([
        {
          title: "Trang chủ",
          path: "/",
        },
      ]);
    } else {
      const currentRouteList = pathname.replace('/admin', '').split("/").slice(1);
      const newBread = hashBreadcrumb(currentRouteList);
      setBreadcrumb(newBread);
    }
  }, [pathname]);

  const handleRenderBreadcrumb = (breadcrumb: { title: any; path: string }[]) => {
    if (!breadcrumb || !breadcrumb.length) return;
    return breadcrumb.map((item, index) => (
      <div key={index} className="text-[20px] text-tx-color">
        {index < breadcrumb.length - 1 && <Link to={item.path}>{item.title}</Link>}
        {index === breadcrumb.length - 1 && <span className="">{item.title}</span>}
        {breadcrumb.length > 1 && index < breadcrumb.length - 1 && <span className="mx-4px">{" > "}</span>}
      </div>
    ));
  };

  // const handleChangeTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <header className="">
      <div className="breadcrumb flex items-center">
        {breadcrumb && <div className="flex items-center opacity-80">{handleRenderBreadcrumb(breadcrumb)}</div>}
        {/* <div className="flex-1 text-right">
          <button className="text-tx-color" onClick={handleChangeTheme}>
            Change Mode
          </button>
        </div> */}
      </div>
      {breadcrumb && (
        <div className="title-page text-tx-color mt-16px text-[28px] font-medium">
          {breadcrumb?.length > 1 && breadcrumb[breadcrumb.length - 1]?.title && (
            <span className="">{breadcrumb[breadcrumb.length - 1].title}</span>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
