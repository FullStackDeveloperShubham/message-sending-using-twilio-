# 📩 SMS Sending API (Node.js + Express + Twilio)

A simple and secure SMS sending API built using **Node.js**, **Express**, and **Twilio**.  
This project allows you to send SMS messages via a REST endpoint, with environment variable configuration for security.

---

## 🚀 Features
- ✅ Env-secure setup with **dotenv**
- ✅ Twilio client integration
- ✅ `/sendSMS` REST endpoint
- ✅ Error handling included
- ✅ Postman-ready for testing

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **Twilio**
- **dotenv**

---

## 📂 Project Setup

### 1. Clone the repository
```bash
git clone : https://github.com/FullStackDeveloperShubham/message-sending-using-twilio-
```

# twilio configuration 
## Add your configuration

ACCOUNT_SID=

AUTH_TOKEN=

TWILIO_PHONE_NUMBER=

---

🧪 Testing with Postman

Open Postman.

Set request type to POST.

Use the endpoint: http://localhost:5000/sendSMS.

Add JSON body (as shown above).

Send request and check response.

---

📡 API Usage
POST /sendSMS

Send an SMS message.

```bash
Request Body:
{
  "to": "+1234567890",
  "message": "Hello! This is a test SMS."
}
```
```bash
Response (Success):
{
  "success": true,
  "message": "SMS sent successfully",
  "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

```bash
Response (Error):
{
  "success": false,
  "error": "Invalid phone number"
}
```


---

👨‍💻 Author

Shubham

📌 Connect with me:

🔗 GitHub : https://github.com/FullStackDeveloperShubham/message-sending-using-twilio-

💼 LinkedIn : https://www.linkedin.com/in/shubham-gaikwad-62499329a/

🐦 Twitter : https://x.com/ItsDevShubham

🔗 Instgram : https://www.instagram.com/developer_shubham_/


