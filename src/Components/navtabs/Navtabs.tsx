import React from "react";
interface Headers {
  nome: string;
  active: string;
  tab: string;
}

interface NavTabsProps {
  cols: string;
  headers: Headers[];
  children: any;
}

const Navtabs = (props: NavTabsProps) => {
  return (
    <div className={props.cols}>
      <ul className="nav nav-tabs" id="custom-content-above-tab" role="tablist">
        {props.headers.map((h, i) => (
          <li className="nav-item" key={i}>
            <a
              className={h.active}
              data-toggle="pill"
              href={h.tab}
              role="tab"
              aria-controls="custom-content-above-home"
              aria-selected="true"
            >
              {h.nome}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="custom-content-below-tabContent">
        {props.children}
      </div>
    </div>
  );
};
export default Navtabs;
