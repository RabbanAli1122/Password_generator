# 🧾 Password Crafter  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-rabbanali1122.github.io-blue)](https://rabbanali1122.github.io/password-crafter-js/)
[![Python](https://img.shields.io/badge/Python-3.7%2B-blue.svg)](https://www.python.org/)

## ✅ Features

- Generate secure, random passwords instantly
- Choose password length (1–30 characters)
- Toggle lowercase, uppercase, numbers, and symbols
- Copy password to clipboard with a single click
- Responsive and modern UI using custom fonts and icons

## 🛠️ How It Works

```js
function generatepass(){
    let genpass = "";
    let all_char = "";
    all_char += lowercase.checked ? lowerchar : "";
    all_char += uppercase.checked ? upperchar : "";
    all_char += symbols.checked ? all_symbols : "";
    all_char += numbers.checked ? all_numbers : "";

    if (all_char.length === 0) return "";

    for (let i = 1; i <= inputslider.value; i++) {
        genpass += all_char.charAt(Math.floor(Math.random() * all_char.length));
    }
    return genpass;
}
```


## 📋 Requirements
- Modern web browser
- Internet connection (for Google Fonts and Icons)

  
## 📂 Files in Repository
- index.html – Main HTML layout and structure
- style.css – Responsive and styled CSS UI
- script.js – Password generation and copy logic
- LICENSE – MIT License

## 🚀 How to Run
```
# Clone the repository
git clone https://github.com/username/password-crafter.git
cd password-crafter
```
## Live Demo:
Visit the live demo: https://rabbanali1122.github.io/password-crafter-js/

## 📸 Screenshots

1. <img width="616" height="731" alt="Screenshot 2025-08-06 at 10 03 47 PM" src="https://github.com/user-attachments/assets/ec444638-a446-40ac-b19d-61099bf3d476" />
2. <img width="616" height="731" alt="Screenshot 2025-08-06 at 10 03 15 PM" src="https://github.com/user-attachments/assets/e89c8e87-728b-4f20-9e9b-cfc93586138b" />
3. <img width="616" height="731" alt="Screenshot 2025-08-06 at 10 03 06 PM" src="https://github.com/user-attachments/assets/7fb55c0e-d2d5-4af6-8583-13c89ea1e9d5" />

## 🧠 Lessons Learned
1. DOM manipulation for dynamic UI
2. Event handling and user interaction in JavaScript
3. Combining HTML, CSS, and JS for interactive tools


## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.
