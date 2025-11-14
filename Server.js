const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();
const path = require('path');
const { PrismaClient } = require('./prisma/generated/prisma-client');
const prisma = new PrismaClient();

// Middleware to parse JSON data
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.static(path.join(__dirname, "Components")));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'Home_Page.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'About_Us.html'));
});

app.get('/connect', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'Lets_Connect.html'));
});

app.get('/service', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'Our_Services.html'));
});

app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'Our_Work.html'));
});

// Handle form submission
// Handle form submission
app.post(
  '/connect',
  [
    check('fullName').notEmpty().withMessage('Full name is required'),
    check('phone')
      .isLength({ min: 10, max: 10 })
      .withMessage('Phone number must be 10 digits'),
    check('email').isEmail().withMessage('Please enter a valid email address'),
    // Remove the message validation
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log("Form submission data:", req.body); // Log the received data
    console.log("Validation errors:", errors.array()); // Log validation errors

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    

    const { fullName, phone, email } = req.body; // 'message' is no longer part of the request body

    try {
      const newUser = await prisma.user.create({
        data: {
          fullName,
          phone,
          email
        }
      });

      console.log('✅ User created:', newUser);
      res.send("Thank you! We'll get in touch shortly.");
    } catch (error) {
      console.error('❌ Error saving user:', error);

      // Handle duplicate email
      if (error.code === 'P2002') {
        res.status(409).send('This email is already registered.');
      } else {
        res.status(500).send(`Server Error: ${error.message}`);
      }
    }
  }
);

// Start server
const PORT = 1250;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
