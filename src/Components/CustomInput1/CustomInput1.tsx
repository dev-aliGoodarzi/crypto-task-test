// React
import React, {
  /****** React Models */
  ChangeEventHandler,
  /****** React Models */
} from "react";
// React

// CSS
import styles from "./CustomInput1.module.css";
// CSS

type CustomInput1Props = {
  inputType: "text" | "number" | "email" | "password";
  placeHolder: string;

  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

  value: string | number;

  containerClassName: string;
  inputClassName: string;

  title: string;
  titleClassName: string;

  extraChildren?: React.ReactNode;
  forwardedRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;

  isDisabled?: boolean;

  isRequired?: boolean;

  errorData?: {
    inputName: string;
    errorMessages: string[];
  };

  canUseAutoComplete?: boolean;

  isTextArea?: boolean;

  isTitleRtl?: boolean;

  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  textAreaRows?: number;

  onTitleClick?: () => void;
};

const CustomInput1: React.FunctionComponent<CustomInput1Props> = ({
  containerClassName,
  inputClassName,
  inputType,
  onChange,
  placeHolder,
  value,
  title,
  titleClassName,
  extraChildren,
  forwardedRef,
  isDisabled,
  isRequired,
  errorData,
  canUseAutoComplete,
  isTextArea,
  isTitleRtl,
  onBlur,
  textAreaRows,
  onTitleClick,
}) => {
  return (
    <>
      {isTextArea ? (
        <div
          className={`${styles.textAreaContainer} relative flex flex-col items-end ${containerClassName}`}
        >
          <p
            className={`${styles.titleClassName} w-full pr-2 text-right !text-xs ${titleClassName}`}
          >
            {isTitleRtl ? (
              <>
                {isRequired ? <span className="text-falseMain">*</span> : null}
                <span className="rtl">{title}</span>
              </>
            ) : (
              <>
                <span className={`rtl ${titleClassName}`}>{title}</span>
                {isRequired ? <span className="text-falseMain">*</span> : null}
              </>
            )}
          </p>
          <textarea
            onChange={
              isDisabled
                ? () => false
                : (onChange as ChangeEventHandler<HTMLTextAreaElement>)
            }
            placeholder={placeHolder}
            value={value}
            className={`${styles.textArea} mt-[1px] rounded-lg p-2 ${
              isDisabled ? "text-textGray" : ""
            } ${inputClassName}`}
            ref={forwardedRef as React.RefObject<HTMLTextAreaElement>}
            name={errorData && errorData.inputName ? errorData.inputName : ""}
            rows={textAreaRows || 5}
          />
          <p className={`text-xs text-falseMain`} style={{ direction: "rtl" }}>
            {errorData &&
              errorData.errorMessages.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
          </p>
        </div>
      ) : (
        <div
          className={`${styles.customInput1Container} relative ${isDisabled && "cursor-not-allowed"} -mt-1 flex flex-col items-end ${containerClassName}`}
        >
          <p
            className={`${styles.titleClassName} w-full pr-2 text-right text-xs ${titleClassName}`}
            onClick={() => {
              if (typeof onTitleClick === "function" && !isDisabled) {
                onTitleClick();
              }
            }}
          >
            {isTitleRtl ? (
              <>
                {isRequired ? <span className="text-falseMain">*</span> : null}
                {title}
              </>
            ) : (
              <>
                {title}
                {isRequired ? <span className="text-falseMain">*</span> : null}
              </>
            )}
          </p>

          <input
            type={inputType}
            onChange={isDisabled ? () => false : onChange}
            placeholder={placeHolder}
            value={value}
            className={`${styles.input} mt-[1px] rounded-lg ${isDisabled && "cursor-not-allowed"} p-2 ${
              isDisabled ? "text-textGray" : ""
            } ${inputClassName}`}
            ref={forwardedRef as React.RefObject<HTMLInputElement>}
            name={errorData && errorData.inputName ? errorData.inputName : ""}
            autoComplete={canUseAutoComplete ? "on" : "new-password"}
            onBlur={onBlur}
          />

          {errorData && (
            <p
              className={`mb-2 !text-[12px] text-falseMain`}
              style={{ direction: "rtl" }}
            >
              {errorData &&
                errorData.errorMessages.map((item, index) => (
                  <span key={index} className={"!text-[12px]"}>
                    {item}
                  </span>
                ))}
            </p>
          )}
          {errorData &&
          errorData.errorMessages &&
          errorData.errorMessages.length > 0 ? (
            <div className={"-mt-1 w-full"}>{extraChildren}</div>
          ) : (
            <div className="mt-2">{extraChildren}</div>
          )}
        </div>
      )}
    </>
  );
};

export default CustomInput1;
