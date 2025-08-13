
# 🚀 QUICKSTART - GitHub Flow دليل العمل الجماعي

هذا الملف يرشد أعضاء الفريق لكيفية البدء باستخدام GitHub Flow في المشروع، خطوة بخطوة.

---

## 📥 1. استنساخ المشروع (Clone Repository)

```bash
git clone https://github.com/<team-name>/<repo-name>.git
cd <repo-name>
```

---

## 🔄 2. تحديث الفرع الرئيسي (main)

```bash
git checkout main
git pull origin main
```

---

## 🌿 3. إنشاء فرع جديد للمهمة

```bash
git checkout -b feature/اسم-المهمة
```

---

## 🧠 4. تنفيذ التعديلات والرفع

```bash
git add .
git commit -m "feat: وصف قصير لما تم"
git push origin feature/اسم-المهمة
```

---

## 🔃 5. فتح Pull Request

- من GitHub: افتح PR من `feature/...` إلى `main`.
- ضع عنوان ووصف واضح.
- انتظر المراجعة من القائد أو الزملاء.

---

## 🌱 قواعد تسمية الفروع

| النوع       | الصيغة                        |
|------------|-------------------------------|
| ميزة جديدة | `feature/login-page`          |
| إصلاح خطأ  | `bugfix/fix-button-alignment` |
| تعديل طارئ | `hotfix/deploy-issue`         |

---

✅ **تذكير مهم**:
- لا تعدل على `main` مباشرة.
- كل مهمة يجب أن تكون في فرع منفصل.
- لا تدمج Pull Request قبل مراجعته من الآخرين.

