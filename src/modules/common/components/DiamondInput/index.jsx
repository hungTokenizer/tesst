import React from "react";
import cx from "classnames";
import style from "./DiamondInput.module.scss";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const DiamondInput = ({
  type,
  value,
  icon,
  subLabel,
  maxBtn,
  handleChange,
  handleMax,
  theme,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cx(style.diamond__input__container)}>
        <div className={cx(style.diamond__input__subLabelContainer)}>
          {icon && icon}{" "}
          <span
            className={cx(style.diamond__input__subLabel)}
            style={{
              color: theme?.isDarkmode
                ? "#fff"
                : "#8236ce",
            }}
          >
            {subLabel}
          </span>
        </div>

        <div className={cx(style.diamond__input__inputContainer)}>
          <input
            className={cx(style.diamond__input__inputField, theme?.isDarkmode && style.diamond__input__darkInputField)}
            type={type || "text"}
            value={value}
            onChange={handleChange}
          />
          {maxBtn && (
            <button
              className={cx(style.diamond__input__maxBtn)}
              type="button"
              onClick={handleMax}
              style={{
                color: theme?.isDarkmode
                  ? "#fff"
                  : "#8236ce",
              }}
            >
              MAX
            </button>
          )}
        </div>
      </div>
    </>
  );
};

DiamondInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  icon: PropTypes.any,
  subLabel: PropTypes.string,
  maxBtn: PropTypes.bool,
  disabledEnter: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleMax: PropTypes.func,
};

export default DiamondInput;
