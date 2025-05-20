# PyNotif - Complete Documentation

## Introduction

**pynotif** is a modern, customizable notification system designed for web applications. This documentation provides detailed information about all available methods and their usage.

---

## CDN
<script src="https://github.com/meysamShabany/pycoursenotify/blob/master/src/pynotify.js"></script>

## Test
you can test pycourse notification 

https://meysamshabany.github.io/pycoursenotify/

### 1. Basic Alert

Displays a simple alert message with an OK button.

```javascript
pynotif.alert({
  title: "Alert Title",
  message: "Your alert message here",
  onClose: () => {
    console.log("Alert closed");
  }
});
```

**Parameters**:

- `title` (String): Notification title  
- `message` (String): Notification content  
- `onClose` (Function): Callback when notification is closed  

---

### 2. Confirmation Dialog

Shows a confirmation dialog with Confirm and Cancel buttons.

```javascript
pynotif.confirm({
  title: "Confirm Action",
  message: "Are you sure you want to proceed?",
  confirmText: "Yes",
  cancelText: "No",
  onConfirm: () => {
    console.log("Action confirmed");
  },
  onCancel: () => {
    console.log("Action cancelled");
  }
});
```

**Additional Parameters**:

- `confirmText` (String): Custom text for confirm button  
- `cancelText` (String): Custom text for cancel button  
- `onConfirm` (Function): Confirm button callback  
- `onCancel` (Function): Cancel button callback  

---

### 3. Toast Notification

Displays a temporary notification that auto-dismisses.

```javascript
pynotif.toast({
  title: "Update",
  message: "Settings saved successfully",
  type: "success",
  duration: 5000,
  onClose: () => {
    console.log("Toast dismissed");
  }
});
```

**Additional Parameters**:

- `type` (String): "info", "success", "warning", or "error"  
- `duration` (Number): Display duration in milliseconds (0 = persistent)  

---

### 4. Input Prompt

Shows a dialog with an input field.

```javascript
pynotif.prompt({
  title: "Enter your name",
  message: "Please provide your full name:",
  defaultValue: "John Doe",
  onConfirm: (value) => {
    console.log("User entered:", value);
  },
  onCancel: () => {
    console.log("Prompt cancelled");
  }
});
```

**Additional Parameters**:

- `defaultValue` (String): Initial input value  
- `onConfirm` (Function): Receives the input value  

---

## Advanced Methods

### 5. Custom Dialog

Creates a dialog with custom buttons and actions.

```javascript
pynotif.advanced({
  title: "Custom Dialog",
  message: "Select an action:",
  icon: "?",
  buttons: [
    { text: "Save", action: "save", style: "primary" },
    { text: "Delete", action: "delete", style: "cancel" },
    { text: "Cancel", action: "cancel", style: "cancel" }
  ],
  onClose: (action) => {
    console.log("Selected action:", action);
  }
});
```

---

### 6. Progress Indicator

Shows a progress bar notification.

```javascript
const progressNotification = pynotif.progress({
  title: "Processing",
  message: "Uploading your files...",
  duration: 10000,
  onComplete: () => {
    console.log("Progress complete");
  }
});

progressNotification.updateProgress(50); // 50%
```

---

### 7. Multi-select Dialog

Displays a list of options for multiple selection.

```javascript
pynotif.multiSelect({
  title: "Select options",
  message: "Choose your preferences:",
  options: [
    { label: "Option 1", value: "opt1", selected: true },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" }
  ],
  onConfirm: (selectedValues) => {
    console.log("Selected:", selectedValues);
  }
});
```

---

## Utility Methods

### 8. Timed Notification

```javascript
pynotif.timed({
  title: "Temporary",
  message: "This will close in 5 seconds",
  duration: 5000,
  showProgress: true,
  onClose: () => {
    console.log("Timed notification closed");
  }
});
```

---

### 9. Snackbar

```javascript
pynotif.snackbar({
  message: "Changes saved",
  actionText: "UNDO",
  duration: 4000,
  onAction: () => {
    console.log("Snackbar action clicked");
  }
});
```

---

### 10. Fullscreen Modal

```javascript
pynotif.fullscreen({
  title: "Welcome",
  message: "Thank you for using our service!",
  icon: "👋",
  buttonText: "Get Started",
  onClose: () => {
    console.log("Fullscreen modal closed");
  }
});
```

---

## Customization Options

### Global Configuration

```javascript
PyNotif.config = {
  defaultDuration: 3000,
  theme: {
    primaryColor: "#64ffda",
    backgroundColor: "#0a192f",
    textColor: "#ccd6f6"
  }
};
```

### CSS Customization

```css
.pynotify-container {
  --primary-color: #your-color;
  --bg-color: #your-bg;
  --text-color: #your-text;
}

.pynotify-toast {
  animation: your-animation 0.3s ease;
}
```

---

## Best Practices

- **Use appropriate notification types**: alerts for critical messages, toasts for updates, snackbars for quick feedback.  
- **Keep messages concise**: titles < 5 words, messages < 20 words.  
- **Provide clear actions**: use intuitive button texts.  
- **Consider timing**:  
  - Important messages: 5-8s  
  - Informational: 3-5s  
  - Errors: Until dismissed  

---

## Troubleshooting

| Issue                  | Solution |
|------------------------|----------|
| Notification not showing | Check PyNotify initialization, JS console, z-index conflicts |
| Styling issues | Verify CSS overrides and contrast |
| Memory leaks | Use `onClose` properly, clean up listeners |

---

## API Reference

### Common Methods

| Method         | Description         | Returns               |
|----------------|---------------------|------------------------|
| `alert(options)` | Basic alert        | Notification instance  |
| `confirm(options)` | Confirmation dialog | Notification instance  |
| `toast(options)` | Temporary message  | Notification instance  |

### Advanced Methods

| Method            | Description        | Returns               |
|-------------------|--------------------|------------------------|
| `advanced(options)` | Custom dialog    | Notification instance  |
| `progress(options)` | Progress bar     | ProgressController     |
| `multiSelect(options)` | Multi-select | Notification instance  |

### Utility Methods

| Method             | Description             |
|--------------------|--------------------------|
| `destroyAll()`     | Closes all notifications |
| `setDefaults(options)` | Set global defaults |
| `getActiveCount()` | Number of active toasts  |

---

This documentation covers all current PyNotify functionality. For more examples, refer to the GitHub repository.