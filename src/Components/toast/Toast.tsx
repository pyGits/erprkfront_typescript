import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Toast = () => {
  const toast = useSelector((state: any) => state.application.toast);
  const dispatch = useDispatch();
  return (
    <>
      {toast.status === "SHOW" &&
        setInterval(() => {
          dispatch({ type: "SHOW_TOAST", payload: { status: "HIDE" } });
        }, 5000)}
      {toast.status === "SHOW" && (
        <div id="toastsContainerTopRight" className="toasts-top-right fixed">
          <div
            className={"toast bg-" + toast.type + " fade show"}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="mr-auto">{toast.title}</strong>
              <small>Fechar</small>
              <button
                data-dismiss="toasts-top-right"
                type="button"
                className="ml-2 mb-1 close"
                aria-label="Close"
                onClick={() =>
                  dispatch({ type: "SHOW_TOAST", payload: { status: "HIDE" } })
                }
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div className="toast-body">{toast.text}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
