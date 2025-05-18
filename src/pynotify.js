class PyNotify {
  constructor() {
    this.initStyles();
    this.toastQueue = [];
    this.isToastShowing = false;
  }

  initStyles() {
    const style = document.createElement("style");
    style.textContent = `
            .pynotify-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(10, 25, 47, 0.8);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }

            .pynotify-overlay.active {
                opacity: 1;
                pointer-events: all;
            }

            .pynotify-container {
                background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
                border: 1px solid rgba(100, 255, 218, 0.2);
                border-radius: 8px;
                width: 90%;
                max-width: 450px;
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(20px);
                transition: transform 0.3s ease;
            }

            .pynotify-overlay.active .pynotify-container {
                transform: translateY(0);
            }

            .pynotify-icon {
                font-size: 2.5rem;
                margin-bottom: 1rem;
                color: #64ffda;
            }

            .pynotify-title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                color: #ccd6f6;
            }

            .pynotify-message {
                font-size: 1rem;
                margin-bottom: 2rem;
                color: #a8b2d1;
                line-height: 1.5;
            }

            .pynotify-buttons {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
            }

            .pynotify-btn {
                padding: 0.5rem 1.5rem;
                border-radius: 5px;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s;
                border: none;
            }

            .pynotify-btn-ok {
                background-color: #64ffda;
                color: #0a192f;
            }

            .pynotify-btn-ok:hover {
                background-color: #52e0c4;
            }

            .pynotify-btn-cancel {
                background-color: transparent;
                color: #ccd6f6;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .pynotify-btn-cancel:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }

            .pynotify-toast {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
                border: 1px solid rgba(100, 255, 218, 0.2);
                border-radius: 8px;
                padding: 1rem 1.5rem;
                box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                max-width: 350px;
                display: flex;
                align-items: center;
                gap: 1rem;
                transform: translateX(150%);
                transition: transform 0.3s ease;
                z-index: 9998;
            }

            .pynotify-toast.active {
                transform: translateX(0);
            }

            .pynotify-toast-icon {
                font-size: 1.5rem;
                color: #64ffda;
            }

            .pynotify-toast-content {
                flex: 1;
            }

            .pynotify-toast-title {
                font-size: 1rem;
                margin-bottom: 0.3rem;
                color: #ccd6f6;
            }

            .pynotify-toast-message {
                font-size: 0.9rem;
                color: #a8b2d1;
            }

            .pynotify-toast-close {
                background: none;
                border: none;
                color: #a8b2d1;
                cursor: pointer;
                font-size: 1rem;
                transition: color 0.3s;
            }

            .pynotify-toast-close:hover {
                color: #64ffda;
            }

            .pynotify-progress {
                height: 5px;
                background-color: rgba(100, 255, 218, 0.2);
                border-radius: 3px;
                margin-bottom: 1.5rem;
                overflow: hidden;
            }

            .pynotify-progress-bar {
                height: 100%;
                background-color: #64ffda;
                width: 0%;
                transition: width 0.1s linear;
            }

            .pynotify-options {
                margin-bottom: 1.5rem;
            }

            .pynotify-option {
                display: flex;
                align-items: center;
                padding: 0.75rem;
                margin-bottom: 0.5rem;
                background-color: rgba(100, 255, 218, 0.1);
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .pynotify-option:hover {
                background-color: rgba(100, 255, 218, 0.2);
            }

            .pynotify-option input {
                margin-right: 0.75rem;
            }

            .pynotify-option-label {
                color: #ccd6f6;
            }

            .pynotify-snackbar {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
                border-top: 1px solid rgba(100, 255, 218, 0.2);
                padding: 1rem;
                box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                z-index: 9997;
            }

            .pynotify-snackbar.active {
                transform: translateY(0);
            }

            .pynotify-snackbar-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .pynotify-snackbar-icon {
                font-size: 1.2rem;
                color: #64ffda;
            }

            .pynotify-snackbar-message {
                color: #ccd6f6;
            }

            .pynotify-snackbar-action {
                background: none;
                border: none;
                color: #64ffda;
                font-weight: bold;
                cursor: pointer;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                transition: background-color 0.3s;
            }

            .pynotify-snackbar-action:hover {
                background-color: rgba(100, 255, 218, 0.1);
            }

            .pynotify-fullscreen {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #0a192f;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 2rem;
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }

            .pynotify-fullscreen.active {
                opacity: 1;
                pointer-events: all;
            }

            .pynotify-fullscreen-content {
                max-width: 600px;
                width: 100%;
                text-align: center;
            }

            .pynotify-fullscreen-icon {
                font-size: 4rem;
                color: #64ffda;
                margin-bottom: 2rem;
            }

            .pynotify-fullscreen-title {
                font-size: 2rem;
                margin-bottom: 1.5rem;
                color: #ccd6f6;
            }

            .pynotify-fullscreen-message {
                font-size: 1.1rem;
                margin-bottom: 3rem;
                color: #a8b2d1;
                line-height: 1.6;
            }

            @media (max-width: 768px) {
                .pynotify-container {
                    width: 95%;
                    padding: 1.5rem;
                }

                .pynotify-buttons {
                    flex-direction: column;
                }

                .pynotify-btn {
                    width: 100%;
                }

                .pynotify-toast {
                    bottom: 1rem;
                    right: 1rem;
                    left: 1rem;
                    max-width: calc(100% - 2rem);
                }

                .pynotify-fullscreen-icon {
                    font-size: 3rem;
                }

                .pynotify-fullscreen-title {
                    font-size: 1.5rem;
                }

                .pynotify-fullscreen-message {
                    font-size: 1rem;
                }
            }
        `;
    document.head.appendChild(style);
  }

  alert({ title, message, onClose }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">!</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <div class="pynotify-buttons">
                    <button class="pynotify-btn pynotify-btn-ok">OK</button>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const okBtn = overlay.querySelector(".pynotify-btn-ok");
    okBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onClose) onClose();
      }, 300);
    });
  }

  confirm({ title, message, onConfirm, onCancel }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">?</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <div class="pynotify-buttons">
                    <button class="pynotify-btn pynotify-btn-cancel">Cancel</button>
                    <button class="pynotify-btn pynotify-btn-ok">Confirm</button>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const okBtn = overlay.querySelector(".pynotify-btn-ok");
    const cancelBtn = overlay.querySelector(".pynotify-btn-cancel");

    okBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onConfirm) onConfirm();
      }, 300);
    });

    cancelBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onCancel) onCancel();
      }, 300);
    });
  }

  toast({ title, message, type = "info", duration = 3000 }) {
    const icons = {
      info: "i",
      success: "✓",
      warning: "!",
      error: "✕",
    };

    const toast = document.createElement("div");
    toast.className = "pynotify-toast";

    toast.innerHTML = `
            <div class="pynotify-toast-icon">${icons[type] || icons.info}</div>
            <div class="pynotify-toast-content">
                <h4 class="pynotify-toast-title">${title}</h4>
                <p class="pynotify-toast-message">${message}</p>
            </div>
            <button class="pynotify-toast-close">&times;</button>
        `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("active");
    }, 10);

    const closeBtn = toast.querySelector(".pynotify-toast-close");
    closeBtn.addEventListener("click", () => {
      toast.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    });

    if (duration > 0) {
      setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, duration);
    }
  }

  prompt({ title, message, defaultValue = "", onConfirm, onCancel }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">?</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <input type="text" class="pynotify-input" value="${defaultValue}" style="
                    width: 100%;
                    padding: 0.75rem;
                    margin-bottom: 1.5rem;
                    background: rgba(100, 255, 218, 0.1);
                    border: 1px solid rgba(100, 255, 218, 0.3);
                    border-radius: 5px;
                    color: #ccd6f6;
                    font-size: 1rem;
                ">
                <div class="pynotify-buttons">
                    <button class="pynotify-btn pynotify-btn-cancel">Cancel</button>
                    <button class="pynotify-btn pynotify-btn-ok">OK</button>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const okBtn = overlay.querySelector(".pynotify-btn-ok");
    const cancelBtn = overlay.querySelector(".pynotify-btn-cancel");
    const input = overlay.querySelector(".pynotify-input");

    okBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onConfirm) onConfirm(input.value);
      }, 300);
    });

    cancelBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onCancel) onCancel();
      }, 300);
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        overlay.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(overlay);
          if (onConfirm) onConfirm(input.value);
        }, 300);
      }
    });
  }

  advanced({
    title,
    message,
    icon = "!",
    buttons = [{ text: "OK", action: null, style: "primary" }],
    onClose,
  }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    const buttonsHTML = buttons
      .map((btn) => {
        const btnClass =
          btn.style === "primary" ? "pynotify-btn-ok" : "pynotify-btn-cancel";
        return `<button class="pynotify-btn ${btnClass}" data-action="${btn.action}">${btn.text}</button>`;
      })
      .join("");

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">${icon}</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <div class="pynotify-buttons">${buttonsHTML}</div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    overlay.querySelectorAll(".pynotify-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        overlay.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(overlay);
          if (onClose) onClose(action);
        }, 300);
      });
    });
  }


  progress({ title, message, duration = 5000, onComplete }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">↻</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <div class="pynotify-progress">
                    <div class="pynotify-progress-bar"></div>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const progressBar = overlay.querySelector(".pynotify-progress-bar");
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        overlay.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(overlay);
          if (onComplete) onComplete();
        }, 300);
      }
    }, duration / 100);
  }


  multiSelect({
    title,
    message,
    options = [],
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
  }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    const optionsHTML = options
      .map(
        (opt) => `
            <label class="pynotify-option">
                <input type="checkbox" value="${opt.value}" ${
          opt.selected ? "checked" : ""
        }>
                <span class="pynotify-option-label">${opt.label}</span>
            </label>
        `
      )
      .join("");

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">✓</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                <div class="pynotify-options">${optionsHTML}</div>
                <div class="pynotify-buttons">
                    <button class="pynotify-btn pynotify-btn-cancel">${cancelText}</button>
                    <button class="pynotify-btn pynotify-btn-ok">${confirmText}</button>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const okBtn = overlay.querySelector(".pynotify-btn-ok");
    const cancelBtn = overlay.querySelector(".pynotify-btn-cancel");

    okBtn.addEventListener("click", () => {
      const selectedOptions = [];
      overlay
        .querySelectorAll('input[type="checkbox"]:checked')
        .forEach((checkbox) => {
          selectedOptions.push(checkbox.value);
        });

      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onConfirm) onConfirm(selectedOptions);
      }, 300);
    });

    cancelBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onCancel) onCancel();
      }, 300);
    });
  }


  timed({ title, message, duration = 3000, showProgress = true, onClose }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-overlay";

    const progressHTML = showProgress
      ? `
            <div class="pynotify-progress">
                <div class="pynotify-progress-bar"></div>
            </div>
        `
      : "";

    overlay.innerHTML = `
            <div class="pynotify-container">
                <div class="pynotify-icon">⏳</div>
                <h3 class="pynotify-title">${title}</h3>
                <div class="pynotify-message">${message}</div>
                ${progressHTML}
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    if (showProgress) {
      const progressBar = overlay.querySelector(".pynotify-progress-bar");
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
          clearInterval(interval);
        }
      }, duration / 100);
    }

    setTimeout(() => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onClose) onClose();
      }, 300);
    }, duration);
  }


  snackbar({ message, actionText = null, duration = 3000, onAction }) {
    const snackbar = document.createElement("div");
    snackbar.className = "pynotify-snackbar";

    const actionHTML = actionText
      ? `
            <button class="pynotify-snackbar-action">${actionText}</button>
        `
      : "";

    snackbar.innerHTML = `
            <div class="pynotify-snackbar-content">
                <div class="pynotify-snackbar-icon">!</div>
                <div class="pynotify-snackbar-message">${message}</div>
            </div>
            ${actionHTML}
        `;

    document.body.appendChild(snackbar);

    setTimeout(() => {
      snackbar.classList.add("active");
    }, 10);

    if (actionText) {
      const actionBtn = snackbar.querySelector(".pynotify-snackbar-action");
      actionBtn.addEventListener("click", () => {
        snackbar.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(snackbar);
          if (onAction) onAction();
        }, 300);
      });
    }

    if (duration > 0) {
      setTimeout(() => {
        snackbar.classList.remove("active");
        setTimeout(() => {
          document.body.removeChild(snackbar);
        }, 300);
      }, duration);
    }
  }


  fullscreen({ title, message, icon = "★", buttonText = "Continue", onClose }) {
    const overlay = document.createElement("div");
    overlay.className = "pynotify-fullscreen";

    overlay.innerHTML = `
            <div class="pynotify-fullscreen-content">
                <div class="pynotify-fullscreen-icon">${icon}</div>
                <h2 class="pynotify-fullscreen-title">${title}</h2>
                <div class="pynotify-fullscreen-message">${message}</div>
                <button class="pynotify-btn pynotify-btn-ok">${buttonText}</button>
            </div>
        `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.classList.add("active");
    }, 10);

    const okBtn = overlay.querySelector(".pynotify-btn-ok");
    okBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      setTimeout(() => {
        document.body.removeChild(overlay);
        if (onClose) onClose();
      }, 300);
    });
  }
}
export default PyNotify;

