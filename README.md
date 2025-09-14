# VoiceBox Buddy - Twilio Integration

A React-based dashboard application with Twilio outbound call functionality, built with Lovable.

## Features

- **Real-time Dashboard**: Interactive dashboard with call statistics and management
- **Twilio Integration**: Make outbound calls using Twilio API
- **Server Status Monitoring**: Real-time backend server health monitoring
- **Call Status Tracking**: Monitor call progress and status updates
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Twilio Account with:
  - Account SID
  - Auth Token
  - Verified Phone Number

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Twilio Credentials

The Twilio credentials are already configured in the `.env` file:

```
TWILIO_ACCOUNT_SID=ACf511c147392551501d5897c5694b44bb
TWILIO_AUTH_TOKEN=6253ffd99c5566c709784703ba001e7b
TWILIO_NUMBER=+16163104535
```

### 3. Start the Backend Server

In one terminal, start the Twilio backend server:

```bash
npm run server
```

The server will start on `http://localhost:3001`

### 4. Start the Frontend

In another terminal, start the React development server:

```bash
npm run dev
```

The frontend will start on `http://localhost:8080`

### 5. Alternative: Start Both Together

You can also start both frontend and backend together:

```bash
npm run dev:full
```

## Usage

1. **Open the Dashboard**: Navigate to `http://localhost:8080/dashboard`
2. **Check Server Status**: The dashboard shows a server status indicator in the top-right
3. **Make a Call**: 
   - Enter a phone number in the format `+1234567890` or `1234567890`
   - Click "Make Call" button
   - Monitor the call status in real-time

## API Endpoints

### Backend Server (`http://localhost:3001`)

- `GET /health` - Check server health
- `POST /api/make-call` - Make an outbound call
  ```json
  {
    "phoneNumber": "+1234567890"
  }
  ```
- `GET /api/call-status/:callSid` - Get call status

## Project Structure

```
voicebox-buddy/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── services/           # API services
│   └── ...
├── server.js               # Backend server
├── .env                    # Environment variables
└── package.json           # Dependencies
```

## Features Implemented

✅ **Backend Server**: Express.js server with Twilio integration  
✅ **API Endpoints**: RESTful endpoints for call management  
✅ **Frontend Integration**: React dashboard with real-time updates  
✅ **Error Handling**: Comprehensive error handling and user feedback  
✅ **Server Monitoring**: Real-time server health checks  
✅ **Call Status Tracking**: Monitor call progress and completion  
✅ **Toast Notifications**: User-friendly notifications for all actions  

## Troubleshooting

### Server Offline Error
If you see "Server Offline" in the dashboard:
1. Make sure the backend server is running (`npm run server`)
2. Check that port 3001 is not being used by another application
3. Verify the server logs for any error messages

### Call Failed Error
If calls are failing:
1. Verify your Twilio credentials in `.env`
2. Ensure your Twilio account has sufficient balance
3. Check that the phone number is in the correct format
4. Verify the Twilio number is properly configured

### CORS Issues
If you encounter CORS errors:
1. Make sure you're accessing the frontend from `http://localhost:8080`
2. The backend server is configured to allow CORS from the frontend

## Development

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory with:

```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_NUMBER=your_twilio_number
PORT=3001
NODE_ENV=development
```

## Security Notes

- Never commit your `.env` file to version control
- The Twilio credentials are exposed in this example for demonstration purposes
- In production, use environment variables or a secure secrets management system
- Consider implementing authentication and authorization for the API endpoints

## License

This project is for demonstration purposes. Please ensure you comply with Twilio's terms of service and applicable regulations when making calls.