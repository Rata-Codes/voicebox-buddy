const API_BASE_URL = 'http://localhost:3001';

export interface CallResponse {
  success: boolean;
  callSid?: string;
  status?: string;
  to?: string;
  from?: string;
  message?: string;
  error?: string;
  code?: string;
}

export interface CallStatusResponse {
  success: boolean;
  callSid?: string;
  status?: string;
  direction?: string;
  duration?: string;
  startTime?: string;
  endTime?: string;
  error?: string;
}

export class TwilioService {
  /**
   * Make an outbound call using Twilio
   * @param phoneNumber - The phone number to call
   * @returns Promise<CallResponse>
   */
  static async makeCall(phoneNumber: string): Promise<CallResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/make-call`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to make call');
      }

      return data;
    } catch (error) {
      console.error('Error making call:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Get the status of a call
   * @param callSid - The Twilio Call SID
   * @returns Promise<CallStatusResponse>
   */
  static async getCallStatus(callSid: string): Promise<CallStatusResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/call-status/${callSid}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get call status');
      }

      return data;
    } catch (error) {
      console.error('Error getting call status:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  /**
   * Check if the backend server is running
   * @returns Promise<boolean>
   */
  static async checkServerHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return response.ok;
    } catch (error) {
      console.error('Backend server is not running:', error);
      return false;
    }
  }
}
