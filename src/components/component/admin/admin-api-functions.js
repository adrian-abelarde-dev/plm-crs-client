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

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('addActivity error:', error);
    return null;
  }
}

// getAllActivities function : `/activities/all`
export async function getAllActivities() {
  try {
    const response = await fetch(`${API}/activities/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();

    const updatedActivities = data?.activities.map((activity) => {
      const parsedDateRange = activity.dateRange
        ? JSON.parse(activity.dateRange)
        : null;

      return {
        ...data,
        activities: activity.activityName,
        dateCreated: new Date(activity.created_at).toLocaleString(),
        scheduleStart: `${new Date(
          parsedDateRange.from,
        ).toLocaleDateString()} - ${activity.startTime}`,
        scheduleEnd: `${new Date(parsedDateRange.to).toLocaleDateString()} - ${
          activity.endTime
        }`,
        status: activity.status,
        aysem: activity.aysem,
        activityId: activity.id,
      };
    });

    return updatedActivities;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('getAllActivities error:', error);
    return null;
  }
}

// addParticipant function : `/api/participants/1` -> inserts {participantType, participants, participantName, aysem, dateRange, startTime, endTime, activityId}
export async function addParticipant(
  participantType,
  participants,
  participantName,
  aysem,
  date,
  startTime,
  endTime,
  activityId,
) {
  try {
    const response = await fetch(`${API}/participants/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        participantType,
        participants,
        participantName,
        aysem,
        dateRange: JSON.stringify(date),
        startTime,
        endTime,
        activityId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();
    console.log(
      participantType,
      participants,
      participantName,
      aysem,
      date,
      startTime,
      endTime,
      activityId,
    );

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('addParticipant error:', error);
    return null;
  }
}

// getAllParticipants function : `/participants/all`
export async function getAllParticipants(activityId) {
  try {
    const response = await fetch(`${API}/participants/all/${activityId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();

    const updatedParticipants = data?.participants.map((participant) => {
      const parsedDateRange = participant.dateRange
        ? JSON.parse(participant.dateRange)
        : null;

      return {
        ...data,
        participant: `${participant.participantType} - ${participant.participants}`,
        participantName: participant.participantName,
        aysem: participant.aysem,
        scheduleStart: `${new Date(
          parsedDateRange.from,
        ).toLocaleDateString()} - ${participant.startTime}`,
        scheduleEnd: `${new Date(parsedDateRange.to).toLocaleDateString()} - ${
          participant.endTime
        }`,
        dateCreated: participant.created_at,
        activityId: participant.activityId,
        participantId: participant.id,
      };
    });

    return updatedParticipants;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('getAllParticipants error:', error);
    return null;
  }
}
