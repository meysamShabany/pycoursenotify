# PyNotify ✨

![PyNotify Demo](https://raw.githubusercontent.com/your-username/pynotify/main/demo/screenshot.png)

**A modern, beautiful notification system with PyCourse style** - Fully customizable, responsive and lightweight for your web projects.

[![npm version](https://badge.fury.io/js/pynotify.svg)](https://badge.fury.io/js/pynotify)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/your-username/pynotify)](https://github.com/your-username/pynotify/stargazers)

## 🌟 Key Features

- 🎨 Modern design with PyCourse theme
- 📱 Fully responsive
- 🚀 Lightweight (~10KB minified)
- 🔧 10 different notification types
- 💫 Smooth animations
- 🔌 Dependency-free
- 🛠️ Customizable and extensible

## 📦 Installation

### Via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/pynotify@latest/dist/pynotify.min.js"></script>

Via NPM:
npm install pynotify

import PyNotify from 'pynotify';

const pynotify = new PyNotify();

🚀 Quick Start

1. Basic Alert

pynotify.alert({
  title: "Success",
  message: "Your changes have been saved successfully.",
  onClose: () => {
    console.log("User closed the alert");
  }
});

2. Confirmation Dialog

pynotify.confirm({
  title: "Delete Item",
  message: "Are you sure you want to delete this item?",
  onConfirm: () => {
    console.log("Item deleted");
  },
  onCancel: () => {
    console.log("Action cancelled");
  }
});

📚 Full Documentation

Available Notification Types:
Method	Description
alert()	Basic message with OK button
confirm()	Confirm/Cancel dialog
toast()	Temporary auto-dismiss message
prompt()	Get user input
advanced()	Customizable message with buttons
progress()	Progress indicator
multiSelect()	Multi-choice selection
timed()	Timed notification
snackbar()	Bottom quick message
fullscreen()	Fullscreen modal
Common Options:
Parameter	Type	Default	Description
title	string	-	Notification title
message	string	-	Notification message
duration	number	3000	Display duration (ms)
onClose	function	-	Callback when notification closes
🎨 Customization
You can customize styles via CSS:

/* Change theme colors */
.pynotify-container {
  --primary-color: #64ffda;
  --bg-color: #0a192f;
  --text-color: #ccd6f6;
}

🤝 Contributing
Contributions are welcome! Before submitting a PR:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact
For questions or suggestions:

Email: your-email@example.com

Twitter: @your-handle

GitHub: your-username

✨ Thank you for using PyNotify! ✨
