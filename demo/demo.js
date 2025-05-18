
if (typeof pynotify === 'undefined') {
  console.error('PyNotify is not loaded!');
} else {
  console.log('PyNotify is ready:', pynotify);
}

function showAlert() {
  pynotify.alert({
    title: "توجه!",
    message: "این یک پیام هشدار است.",
    onClose: () => {
      console.log("کاربر روی OK کلیک کرد");
    }
  });
}

function showConfirm() {
  pynotify.confirm({
    title: "تأیید",
    message: "آیا مطمئن هستید؟",
    onConfirm: () => console.log("تأیید شد"),
    onCancel: () => console.log("لغو شد")
  });
}