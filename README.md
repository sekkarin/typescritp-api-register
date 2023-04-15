### API การเข้าสู่ระบบ ใช้ตัว Express ภาษา TypeScript
### คลิปสอนจาก
> https://www.youtube.com/watch?v=b8ZUb_Okxro&ab_channel=CodeWithAntonio

#### ติดตั้ง 
npm install

#### run
> npm start

#### variable .env
* **MONGODB_URL** สมัครใช้งาน *https://www.mongodb.com/
* **PORT** พอร์ท
* **SECRET** คัย์ลับในการเข้ารหัส

#### Endpoints
> POST:localhost:<PORT>/auth/register
> POST:localhost:<PORT>/auth/login
> GET:localhost:<PORT>/users
> PATCH:localhost:<PORT>/users/<ID>
> DELELTE:localhost:<PORT>/users/<ID>