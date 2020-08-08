import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>

        <img src={logoImg} alt="proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {description && <p> {description}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
