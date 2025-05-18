npm version
License: MIT
GitHub stars
🌟 ویژگی‌های کلیدی
🎨 طراحی مدرن با تم PyCourse

📱 کاملاً ریسپانسیو

🚀 سبک‌وزن (~10KB minified)

🔧 ۱۰ نوع مختلف نوتیفیکیشن

💫 انیمیشن‌های نرم و زیبا

🔌 بدون وابستگی (Dependency-free)

🛠️ قابل تنظیم و توسعه‌پذیر

📦 نصب
از طریق CDN:
html
<script src="https://cdn.jsdelivr.net/npm/pynotify@latest/dist/pynotify.min.js"></script>
از طریق NPM:
bash
npm install pynotify
javascript
import PyNotify from 'pynotify';
const pynotify = new PyNotify();
🚀 شروع سریع
۱. پیام ساده (Alert)
javascript
pynotify.alert({
  title: "عملیات موفق",
  message: "تغییرات با موفقیت ذخیره شدند.",
  onClose: () => {
    console.log("کاربر پیام را بست");
  }
});
۲. پیام تأیید (Confirm)
javascript
pynotify.confirm({
  title: "حذف آیتم",
  message: "آیا مطمئن هستید می‌خواهید این آیتم را حذف کنید؟",
  onConfirm: () => {
    console.log("آیتم حذف شد");
  },
  onCancel: () => {
    console.log("عملیات لغو شد");
  }
});
📚 مستندات کامل
انواع نوتیفیکیشن‌های موجود:
متد	توضیحات
alert()	پیام ساده با دکمه OK
confirm()	پیام تأیید/لغو
toast()	پیام موقت (خودکار محو می‌شود)
prompt()	دریافت ورودی از کاربر
advanced()	پیام پیشرفته با دکمه‌های سفارشی
progress()	نمایش نوار پیشرفت
multiSelect()	انتخاب چندگزینه‌ای
timed()	پیام زمان‌دار
snackbar()	پیام سریع در پایین صفحه
fullscreen()	مدال تمام صفحه
تنظیمات مشترک:
پارامتر	نوع	پیش‌فرض	توضیحات
title	string	-	عنوان پیام
message	string	-	متن پیام
duration	number	3000	مدت زمان نمایش (میلی‌ثانیه)
onClose	function	-	تابع فراخوانی پس از بسته شدن
🎨 سفارشی‌سازی
می‌توانید استایل‌ها را از طریق CSS تغییر دهید:

css
/* تغییر رنگ تم */
.pynotify-container {
  --primary-color: #64ffda;
  --bg-color: #0a192f;
  --text-color: #ccd6f6;
}
🌐 دموی زنده
مشاهده دمو در عمل

🤝 مشارکت
مشارکت‌های شما خوش‌آمد است! لطفاً قبل از ارسال PR:

پروژه را Fork کنید

شاخه جدید ایجاد کنید (git checkout -b feature/AmazingFeature)

تغییرات را Commit کنید (git commit -m 'Add some AmazingFeature')

به شاخه Push کنید (git push origin feature/AmazingFeature)

Pull Request باز کنید

📜 مجوز
این پروژه تحت مجوز MIT منتشر شده است - برای جزئیات به فایل LICENSE مراجعه کنید.

📬 تماس با من
برای سوالات یا پیشنهادات می‌توانید با من تماس بگیرید:

ایمیل: your-email@example.com

توییتر: @your-handle

GitHub: your-username

✨ ممنون که از PyNotify استفاده می‌کنید! ✨