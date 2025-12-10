const fetch = require('node-fetch');

async function testLogin() {
  try {
    console.log('Probando login en https://edu.distmah.com/api/auth/callback/credentials');

    const response = await fetch('https://edu.distmah.com/api/auth/callback/credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'instructor@distmah.com',
        password: 'Test123456!',
        redirect: false
      }),
      redirect: 'manual'
    });

    console.log('Status:', response.status);
    console.log('Headers:', response.headers.raw());

    const text = await response.text();
    console.log('Response body:', text.substring(0, 500));

    if (response.status === 200 || response.status === 302) {
      console.log('\n✅ LOGIN FUNCIONA');
    } else {
      console.log('\n❌ LOGIN FALLO');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testLogin();
