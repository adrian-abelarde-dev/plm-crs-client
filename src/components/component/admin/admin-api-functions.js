'use server';

import { API } from '@/lib/utils';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

export async function addActivity(
  activityName,
  date,
  startTime,
  endTime,
  aysem,
) {
  try {
    const response = await fetch(`${API}/activities/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityName,
        aysem,
        dateRange: JSON.stringify(date),
        startTime,
        endTime,
        status: 'Active',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();
    console.log(activityName, date, startTime, endTime, aysem);

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('addActivity error:', error);
    return null;
  }
}
