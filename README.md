### API การเข้าสู่ระบบ ใช้ตัว Express ภาษา TypeScript

### คลิปสอนจาก

> https://www.youtube.com/watch?v=b8ZUb_Okxro&ab_channel=CodeWithAntonio

#### ติดตั้ง

npm install

#### run

> npm start

#### variable .env

- **MONGODB_URL** สมัครใช้งาน \*https://www.mongodb.com/
- **PORT** พอร์ท
- **SECRET** คัย์ลับในการเข้ารหัส

#### Endpoints

> POST:localhost:PORT/auth/register

> POST:localhost:PORT/auth/login

> GET:localhost:PORT/auth/logout

> GET:localhost:PORT/users

> PATCH:localhost:PORT/users/ID body -> username

> DELELTE:localhost:PORT/users/ID

### Create project

- npm install

### step

1. ไหว้ครู 
2. config typescript ✅
3. config package.json ✅
4. config nodemon.json ✅
5. config .gitinore ✅
6. setup db and set env ✅
7. structure project ✅
8. defind Model Schema  ✅
9. create method the model  ✅

10. build authntication system
11. build mange user system

12. use middleware
13. ...

HTTP status code ได้เป็นหมวดหมู่ดังนี้:

* 1xx (Informational): รับทราบข้อมูล แต่ยังไม่เสร็จสมบูรณ์
* 2xx (Successful): การร้องขอสำเร็จและได้รับการตอบกลับเรียบร้อย
* 3xx (Redirection): การเรียกใช้งานต้องไปยังสถานที่ต่างหาก
* 4xx (Client Error): เกิดข้อผิดพลาดจากข้อมูลที่ส่งมาจากผู้ใช้งาน
* 5xx (Server Error): เกิดข้อผิดพลาดที่เซิร์ฟเวอร์

HTTP status code ที่นิยมใช้ในการพัฒนาแอปพลิเคชันเว็บได้แก่:

* 200 OK: การร้องขอสำเร็จและได้รับข้อมูลเรียบร้อย
* 201 Created: การร้องขอสำเร็จและได้สร้างข้อมูลใหม่
* 400 Bad Request: ข้อมูลที่ส่งมาไม่ถูกต้อง
* 401 Unauthorized: ไม่ได้รับอนุญาตให้เข้าถึงข้อมูล
* 404 Not Found: ไม่พบข้อมูลที่ร้องขอ
* 500 Internal Server Error: มีข้อผิดพลาดบางอย่างเกิดขึ้นในเซิร์ฟเวอร์
* 503 Service Unavailable: เซิร์ฟเวอร์ไม่พร้อมให้บริการขณะนั้น

### Cookie และ Session 
Cookie และ Session เป็นเทคโนโลยีที่ใช้ในการจัดเก็บข้อมูลที่ต้องการจำไว้ในเว็บเบราว์เซอร์ของผู้ใช้ โดยทั่วไปแล้ว Cookie ใช้สำหรับการจัดเก็บข้อมูลบนเครื่องลูกข่ายของผู้ใช้ ส่วน Session จัดเก็บข้อมูลบนเซิร์ฟเวอร์ของเว็บไซต์

Cookie จะถูกสร้างขึ้นโดยเว็บเซิร์ฟเวอร์และส่งไปยังเบราว์เซอร์ของผู้ใช้ เมื่อผู้ใช้กระทำการเข้าชมเว็บไซต์อีกครั้ง Cookie จะถูกส่งกลับไปยังเว็บเซิร์ฟเวอร์เพื่อตรวจสอบว่าผู้ใช้เคยเข้าชมเว็บไซต์นี้มาก่อนหรือไม่ และจะนำข้อมูลใน Cookie ไปใช้งานต่อไป

Session จะถูกสร้างขึ้นโดยเว็บเซิร์ฟเวอร์เมื่อผู้ใช้เข้าสู่ระบบหรือเริ่มใช้งานเว็บไซต์ และจะถูกเก็บไว้บนเซิร์ฟเวอร์ของเว็บไซต์ และเมื่อผู้ใช้ทำการติดต่อกับเว็บไซต์อีกครั้ง Session จะถูกดึงขึ้นมาและใช้งานต่อไป
ข้อแตกต่างระหว่าง Cookie กับ Session คือ

* ข้อมูลใน Cookie จะถูกจัดเก็บบนเครื่องลูกข่ายของผู้ใช้ ส่วนข้อมูลใน Session จะถูกจัดเก็บบนเซิร์ฟเวอร์ของเว็บไซต์
* ข้อมูลใน Cookie จะถูกเก็บไว้จนกว่าจะถึงวันหมดอายุ ส่วนข้อมูล ในบางกรณีการใช้ Cookie และ Session สามารถใช้งานร่วมกันได้ เช่น เมื่อผู้ใช้เข้าสู่ระบบ และต้องการจำค่าต่างๆ ของผู้ใช้ไว้ เพื่อให้ผู้ใช้ไม่ต้องเข้าสู่ระบบใหม่ทุกครั้งที่เข้าชมหน้าเว็บไซต์

การเลือกใช้ Cookie หรือ Session ขึ้นอยู่กับลักษณะของข้อมูลที่ต้องการจัดเก็บ และการเข้าถึงข้อมูลดังกล่าวโดยผู้ใช้ โดยทั่วไปแล้ว Cookie ใช้สำหรับการจัดเก็บข้อมูลที่ไม่เป็นความลับ เช่น ค่าการตั้งค่าของผู้ใช้ ส่วน Session จะถูกใช้สำหรับการจัดเก็บข้อมูลที่เป็นความลับ เช่น ข้อมูลการเข้าสู่ระบบของผู้ใช้ และสิทธิ์การเข้าถึงทรัพยากรต่างๆ ในเว็บไซต์

Token คือ ข้อมูลเล็กน้อยที่ถูกสร้างขึ้นมาเพื่อใช้ในการรับรองตัวตนของผู้ใช้ในระบบ เมื่อผู้ใช้เข้าสู่ระบบหรือทำการยืนยันตัวตน ระบบจะสร้าง Token ขึ้นมาและส่งกลับไปยังผู้ใช้ ผู้ใช้จะใช้ Token นี้ในการสื่อสารกับระบบ เพื่อรับรองตัวตนและเข้าถึงทรัพยากรต่างๆในระบบ โดย Token จะถูกสร้างขึ้นด้วยข้อมูลที่เป็นความลับเช่นเดียวกับรหัสผ่าน (password) ของผู้ใช้ เพื่อป้องกันการถูกขโมยและการใช้งานโดยไม่ได้รับอนุญาต

### Token
Token สามารถสร้างได้ด้วยวิธีการต่างๆ เช่น JWT (JSON Web Token) หรือ OAuth Token โดยทั่วไปแล้ว Token จะถูกส่งมาในรูปแบบของ string ที่มีรูปแบบที่กำหนดไว้ก่อนหน้านั้นๆ และสามารถเก็บได้ในหลายๆแพลตฟอร์ม เช่น localStorage, sessionStorage หรือใน cookies ของเว็บไซต์ เป็นต้น การใช้ Token เป็นวิธีที่ปลอดภัยและสามารถทำงานร่วมกับหลายๆระบบได้โดยง่ายดาย

### .env
.env คือไฟล์ที่ใช้สำหรับเก็บตัวแปรสภาพแวดล้อม (environment variables) ซึ่งเป็นตัวแปรที่ใช้ในการกำหนดค่าต่างๆในระบบ เช่น ค่าการเชื่อมต่อฐานข้อมูล, คีย์ API, รหัสลับ และอื่นๆ โดยมักจะเก็บข้อมูลเช่น username, password, API key หรือค่าอื่นๆที่ต้องการทำให้เป็นความลับเพื่อป้องกันการเปิดเผยข้อมูลสำคัญ

การใช้งาน .env มีประโยชน์ในการจัดการสภาพแวดล้อมในการพัฒนาระบบโดยเฉพาะอย่างยิ่งเมื่อมีการใช้แพลตฟอร์มหลายๆรูปแบบ เช่น การพัฒนาระบบบนเครื่อง localhost, staging environment และ production environment โดยการใช้ .env จะช่วยให้เราสามารถกำหนดค่าต่างๆ ได้อย่างสะดวกและมีประสิทธิภาพ

ในการใช้งาน .env จะต้องมีไฟล์ .env ในโฟลเดอร์ของโปรเจ็กต์ และมักใช้กับแพ็กเกจที่จัดการตัวแปรสภาพแวดล้อมอย่างเช่น dotenv ซึ่งเป็นแพ็กเกจสำหรับโหลดค่าของ environment variables จากไฟล์ .env และเรียกใช้เมื่อเราต้องการใช้งานตัวแปรสภาพแวดล้อมดังกล่าวในโค้ดของเรา

### Middleware

Middleware ใน Express เป็นฟังก์ชันที่สามารถใช้งานกับแอปพลิเคชัน Express ได้ โดยเราสามารถเขียน middleware เพื่อทำหน้าที่รับ-ตอบ HTTP Request ก่อนถึงจะถูกส่งต่อไปยัง endpoint หรือ route ต่างๆ ที่เราตั้งค่าไว้ในแอปพลิเคชัน

Middleware ใน Express นั้นถูกเรียกใช้งานด้วยฟังก์ชัน use() ซึ่งสามารถรับ argument เป็นฟังก์ชัน middleware หรือเป็นชุดของ middleware เพื่อทำหน้าที่รับ-ตอบ request และประมวลผลข้อมูลก่อนถึงจะส่งต่อไปยัง route ที่ต้องการ

Middleware สามารถทำหน้าที่ในอีกหลายๆ เรื่อง เช่น ตรวจสอบความถูกต้องของข้อมูลที่รับเข้ามา, ตรวจสอบสิทธิ์การเข้าถึงข้อมูล, ตรวจสอบความถูกต้องของ token และ session, การบันทึก log การใช้งาน, การเปลี่ยนแปลง response ก่อนส่งกลับไปยัง client และอื่นๆ

ดังนั้น Middleware เป็นส่วนสำคัญที่มีอยู่ใน Express และมีความสำคัญในการปรับแต่งและสร้าง Application ให้มีความยืดหยุ่นและมีประสิทธิภาพในการใช้งาน
