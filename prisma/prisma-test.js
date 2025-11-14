const { PrismaClient } = require('./prisma/generated/prisma-client');
const prisma = new PrismaClient();

async function test() {
  try {
    const user = await prisma.user.create({
      data: {
        fullName: "Test User",
        phone: "1234567890",
        email: "testuser@example.com",
        message: "Test message from prisma-test.js"
      }
    });
    console.log("User created:", user);
  } catch (err) {
    console.error("❌ Error creating user:", err);
  }
}

test();
