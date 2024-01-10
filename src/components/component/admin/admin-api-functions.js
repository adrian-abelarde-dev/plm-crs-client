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
      cache: 'no-store',
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
      cache: 'no-store',
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

// addUser function : `/user` -> inserts userId, array of userType, firstname, middlename, lastname, emailAddress
export async function addUser(
  userId,
  userType,
  firstName,
  middleName,
  lastName,
  emailAddress,
) {
  try {
    const response = await fetch(`${API}/user/1/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userType: [userType],
        firstName,
        middleName,
        lastName,
        plmEmail: emailAddress,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('addUser error:', error);
    return null;
  }
}

// getAllUsers function : `/user/all`
export async function getAllUsers() {
  try {
    const response = await fetch(`${API}/user/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();

    const updatedUsers = data?.users.map((user) => {
      return {
        ...data,
        userid: user.id,
        type: user.userType.toString(),
        fullname: `${user.firstName} ${user.middleName} ${user.lastName}`,
        email: user.plmEmail,
        status: user.status,
        datecreated: new Date(user.created_at).toLocaleString(),
      };
    });

    return updatedUsers;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('getAllUsers error:', error);
    return null;
  }
}

// getOneUser function : `/user/1/{userId}`
export async function getOneUser(userId) {
  try {
    const response = await fetch(`${API}/user/1/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
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
    console.error('getOneUser error:', error);
    return null;
  }
}

// updateUser function : `/user/1/{userId}` -> updates userType[array], firstname, middlename, lastname, emailAddress
export async function updateUser(
  userId,
  userType,
  firstName,
  middleName,
  lastName,
  emailAddress,
) {
  try {
    const response = await fetch(`${API}/user/1/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userType: [userType],
        firstName,
        middleName,
        lastName,
        plmEmail: emailAddress,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('updateUser error:', error);
    return null;
  }
}

// addMeeting function : `/meeting/1/{meetingId}` --> inserts label, meetingType, college, status
export async function addMeeting(
  meetingId,
  label,
  meetingType,
  college,
  status,
) {
  try {
    const response = await fetch(`${API}/meeting/1/${meetingId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        label,
        meetingType,
        college,
        status,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('addMeeting error:', error);
    return null;
  }
}

// getAllMeetings function : `/meeting/all`
export async function getAllMeetings() {
  try {
    const response = await fetch(`${API}/meeting/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the response
      console.log(errorText);
      throw new Error(
        `HTTP error! Status: ${response.status}. Details: ${errorText}`,
      );
    }

    const data = await response.json();

    const updatedMeetings = data?.data.map((meeting) => {
      return {
        ...data,
        meetingId: meeting.meetingId,
        label: meeting.label,
        meetingType: meeting.meetingType,
        college: meeting.college,
        status: meeting.status,
        dateCreated: new Date(meeting.created_at).toLocaleString(),
      };
    });

    return updatedMeetings;
  } catch (error) {
    // Handle fetch errors, JSON parsing errors, or server errors
    console.error('getAllMeetings error:', error);
    return null;
  }
}
