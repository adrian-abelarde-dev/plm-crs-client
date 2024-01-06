'use server';

import { API } from '@/lib/utils';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');

export async function getUserRoles({ plmEmail }) {
  try {
    // Fetch roles from the backend
    const response = await fetch(`${API}/login/${plmEmail}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('getUserRoles error:', error);
    return null; // or throw the error if you want to propagate it
  }
}
