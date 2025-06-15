# ktu-result
# 🎓 KTU Result Portal Clone (Fake)

A fake clone of the official KTU (APJ Abdul Kalam Technological University) result portal.  
This is a **frontend + backend** demo project for educational purposes, allowing users to enter a register number and view a **mock result**.

---

## 🖥️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript templates)
- **HTML/CSS**
- **JSON** (for mock result data)

---

## 📁 Project Structure

ktu-result-clone/
├── public/ # Static CSS
│ └── style.css
├── views/ # EJS templates
│ ├── index.ejs
│ └── result.ejs
├── data/
│ └── mockResults.json
├── server.js # Main server file
├── package.json
├── README.md


2. Install Dependencies
bash
npm install

3. Start Server
bash
node server.js

Go to your browser and open:
📍 http://localhost:3000
4. Test Data
Enter the register number:
CEM23CS001

It will show a mock result with name and grades.
