import React from "react";
import cx from "classnames";
import style from "./DiamondCard.module.scss";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const DiamondCard = ({ label, children, cardStyle, classes, theme }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={cx(style.diamond__card__container, theme?.isDarkmode && style.diamond__card__darkContainer, classes)} style={cardStyle}>
        {children}
      </div>
      {label && <label className={cx(style.diamond__card__label)} style={{color: theme?.isDarkmode && '#fff'}}>{t(label)}</label>}
    </>
  );
};

DiamondCard.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  cardStyle: PropTypes.object,
  classes: PropTypes.any,
};

export default DiamondCard;
