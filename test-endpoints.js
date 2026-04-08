// Test script to verify server endpoints
const axios = require('axios');

// Replace with your actual Vercel deployment URL
const BASE_URL = 'https://your-domain.vercel.app'; // Replace with your actual URL

async function testEndpoints() {
  console.log('🧪 Testing CRM Server Endpoints...\n');

  try {
    // Test 1: Health Check
    console.log('1. Testing Health Check...');
    const healthResponse = await axios.get(`${BASE_URL}/health`);
    console.log('✅ Health Check:', healthResponse.data);
    console.log('');

    // Test 2: Test Endpoint
    console.log('2. Testing Debug Endpoint...');
    const testResponse = await axios.get(`${BASE_URL}/test`);
    console.log('✅ Test Endpoint:', testResponse.data);
    console.log('');

    // Test 3: Admin Count (should work without auth)
    console.log('3. Testing Admin Count...');
    const adminCountResponse = await axios.get(`${BASE_URL}/adminCount`);
    console.log('✅ Admin Count:', adminCountResponse.data);
    console.log('');

    // Test 4: Employee Count (should work without auth)
    console.log('4. Testing Employee Count...');
    const employeeCountResponse = await axios.get(`${BASE_URL}/employeeCount`);
    console.log('✅ Employee Count:', employeeCountResponse.data);
    console.log('');

    // Test 5: User Count (should work without auth)
    console.log('5. Testing User Count...');
    const userCountResponse = await axios.get(`${BASE_URL}/userCount`);
    console.log('✅ User Count:', userCountResponse.data);
    console.log('');

    console.log('🎉 All basic endpoints are working!');
    console.log('\n📝 Next Steps:');
    console.log('1. Set up environment variables in Vercel');
    console.log('2. Test authentication endpoints (/jwt, /logout)');
    console.log('3. Test protected endpoints with proper authentication');

  } catch (error) {
    console.error('❌ Error testing endpoints:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the tests
testEndpoints(); 