

function showAlert() {
  pynotif.alert({
    title: "توجه!",
    message: "این یک پیام هشدار است.",
    onClose: () => {
      console.log("کاربر روی OK کلیک کرد");
    }
  });
}
function successNotif(){
  pynotif.toast({
    title: "موفقیت آمیز",
    message: "عملیات با موفقیت انجام شد.",
    type: "success",
    duration: 3000 // 3 ثانیه
});
}
function showConfirm() {
  pynotif.confirm({
    title: "تأیید",
    message: "آیا مطمئن هستید؟",
    onConfirm: () => console.log("تأیید شد"),
    onCancel: () => console.log("لغو شد")
  });
}

function showProgress(){
  pynotif.progress({
    title: "در حال پردازش",
    message: "لطفاً منتظر بمانید...",
    duration: 3000, // 3 ثانیه
    onComplete: () => {
        console.log("پردازش کامل شد");
    }
});
}
function multiSelect(){
  pynotif.multiSelect({
    title: "انتخاب علاقه‌مندی‌ها",
    message: "لطفاً موارد مورد علاقه خود را انتخاب کنید:",
    options: [
        { label: "برنامه‌نویسی", value: "programming", selected: true },
        { label: "طراحی", value: "design" },
        { label: "هوش مصنوعی", value: "ai" }
    ],
    onConfirm: (selected) => {
        console.log("موارد انتخاب شده:", selected);
    }
});
}
function progressTime(){
  pynotif.timed({
    title: "پیام خودکار",
    message: "این پیام پس از 5 ثانیه بسته می‌شود.",
    duration: 5000,
    showProgress: true
});
}

function snackBar(){
  pynotif.snackbar({
    message: "تغییرات با موفقیت ذخیره شد.",
    actionText: "بازگشت",
    duration: 5000,
    onAction: () => {
        console.log("کاربر روی بازگشت کلیک کرد");
    }
});
}

function fullScreen(){
  pynotif.fullscreen({
    title: "به PyCourse خوش آمدید!",
    message: "ما یک پلتفرم آموزشی پیشرفته برای یادگیری برنامه‌نویسی هستیم. برای شروع سفر یادگیری خود، روی دکمه ادامه کلیک کنید.",
    icon: "👋",
    buttonText: "شروع یادگیری",
    onClose: () => {
        console.log("کاربر آماده یادگیری است!");
    }
});
}

function customNotif(){
  pynotif.advanced({
    title: "عملیات موفق",
    message: "آیا می‌خواهید ادامه دهید؟",
    icon: "✓",
    buttons: [
        { text: "انصراف", action: "cancel", style: "cancel" },
        { text: "ذخیره", action: "save", style: "primary" },
        { text: "حذف", action: "delete", style: "cancel" }
    ],
    onClose: (action) => {
        console.log("کاربر انتخاب کرد:", action);
    }
});
}

function promptNotif(){
  pynotif.prompt({
    title: "ورود اطلاعات",
    message: "لطفاً نام خود را وارد کنید:",
    defaultValue: "کاربر مهمان",
    onConfirm: (value) => {
        console.log("کاربر وارد کرد:", value);
        // استفاده از مقدار وارد شده
    },
    onCancel: () => {
        console.log("کاربر انصراف داد");
    }
});
}