# Hostinger Deployment Guide (GMC Web)

Aapka Next.js project successfully static build ho chuka hai aur deployment ke liye ready hai! 
Hostinger par website ko deploy karna bahut aasan hai. Humne aapke project root directory me ek file **`deploy.zip`** create ki hai jisme saari built files hain.

Niche diye gaye steps ko follow karke aap apni website ko Hostinger par deploy kar sakte hain.

---

### Step 1: `deploy.zip` File ko Locate Karein
Humne aapke project folder (`gmc-web`) ke andar ek **`deploy.zip`** name ki file generate kar di hai. 
- Path: `c:\Users\Faizan\Desktop\gmc-web\deploy.zip`
- Is file ke andar aapki website ke saare static HTML, CSS, Images, aur JS files present hain.

---

### Step 2: Hostinger hPanel par Login Karein
1. Browser me [Hostinger hPanel](https://hpanel.hostinger.com) open karein.
2. Apne login credentials (email/password ya Google login) se login karein.

---

### Step 3: Apne Domain ke File Manager me Jaayein
1. Dashboard par aapko aapka Domain aur Hosting plan dikhega.
2. Apne hosting plan ke samne **Manage** button par click karein.
3. Left sidebar ya control panel me scroll karke **File Manager** par click karein.
4. Ek naya window/tab open hoga jisme files dikh rahi hongi.
5. **`public_html`** folder ke double-click karke uske andar jaayein.

---

### Step 4: Purani Files ko Delete Karein (Optional)
Agar `public_html` ke andar pehle se koi default file hai (jaise `default.php` ya Hostinger ka placeholder index page), toh use select karein aur delete kar dein taaki koi conflict na ho.

---

### Step 5: `deploy.zip` ko Upload Karein
1. File Manager me top-right me **Upload** icon (upward arrow) hoga. Uspar click karein aur **File** select karein.
2. Apne computer me `c:\Users\Faizan\Desktop\gmc-web\deploy.zip` file ko select karke upload kar dein.
3. Upload complete hone ka wait karein. (File size sirf ~4.4 MB hai, toh 5-10 seconds me upload ho jayegi).

---

### Step 6: Zip File ko Extract Karein
1. File Manager me uploaded `deploy.zip` par right-click karein.
2. Menu me se **Extract** option ko select karein.
3. Extract location pucha jayega, wahan sirf `.` (dot) ya `public_html` hi rehne dein (taaki files directly `public_html` ke andar extract hon).
4. **Extract** button par click karein.
5. Extract hone ke baad aapko `public_html` ke andar direct `index.html`, `about.html`, `_next` folder etc. dikhne lagenge.

---

### Step 7: Zip File ko Delete Karein
1. Extraction ke baad server par space clean rakhne ke liye `deploy.zip` file par right-click karke use **Delete** kar dein.

---

### 🎉 Badhai Ho! Aapki Website Live Hai!
Ab apne web browser me apna domain name (jaise `www.goldenmanpower.com`) enter karke open karein. Aapki website successfully load ho jayegi!

---

## Future Updates (Naya Code Deploy Kaise Karein?)
Jab bhi aap project me koi change karenge aur naye changes ko website par upload karna chahenge:

1. Apne local system (VS Code terminal ya CMD) me ye command run karein:
   ```cmd
   npm run build
   ```
2. Build complete hone ke baad, files ko zip karne ke liye PowerShell me ye command run karein:
   ```powershell
   Compress-Archive -Path .\out\* -DestinationPath .\deploy.zip -Force
   ```
3. Hostinger File Manager me jaakar `public_html` ki purani files ko delete karein aur naye `deploy.zip` ko upload karke extract kar dein.
