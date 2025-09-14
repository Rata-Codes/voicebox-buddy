import express from 'express';
import cors from 'cors';
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'ACf511c147392551501d5897c5694b44bb';
const authToken = process.env.TWILIO_AUTH_TOKEN || '6253ffd99c5566c709784703ba001e7b';
const twilioNumber = process.env.TWILIO_NUMBER || '+16163104535';

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Twilio Call Server is running' });
});

// Make outbound call endpoint
app.post('/api/make-call', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Validate phone number
    if (!phoneNumber || !phoneNumber.trim()) {
      return res.status(400).json({ 
        success: false, 
        error: 'Phone number is required' 
      });
    }

    // Clean and format phone number
    const cleanNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits
    const formattedNumber = cleanNumber.startsWith('+') ? cleanNumber : `+${cleanNumber}`;

    console.log(`Making call from ${twilioNumber} to ${formattedNumber}`);

    // Create the call using Twilio
    const call = await client.calls.create({
      to: formattedNumber,
      from: twilioNumber,
      url: 'http://demo.twilio.com/docs/voice.xml', // Default TwiML for testing
      // You can also use TwiML directly:
      // twiml: '<Response><Say>Hello! This is a test call from your VoiceBox Buddy application.</Say></Response>'
    });

    console.log(`Call created with SID: ${call.sid}`);

    res.json({
      success: true,
      callSid: call.sid,
      status: call.status,
      to: call.to,
      from: call.from,
      message: 'Call initiated successfully'
    });

  } catch (error) {
    console.error('Error making call:', error);
    
    // Handle specific Twilio errors
    if (error.code) {
      res.status(400).json({
        success: false,
        error: `Twilio Error: ${error.message}`,
        code: error.code
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Internal server error',
        message: error.message
      });
    }
  }
});

// Get call status endpoint
app.get('/api/call-status/:callSid', async (req, res) => {
  try {
    const { callSid } = req.params;
    
    const call = await client.calls(callSid).fetch();
    
    res.json({
      success: true,
      callSid: call.sid,
      status: call.status,
      direction: call.direction,
      duration: call.duration,
      startTime: call.startTime,
      endTime: call.endTime
    });
  } catch (error) {
    console.error('Error fetching call status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch call status',
      message: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Twilio Call Server running on port ${PORT}`);
  console.log(`📞 Twilio Account SID: ${accountSid}`);
  console.log(`📱 Twilio Number: ${twilioNumber}`);
});
