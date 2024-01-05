export const sendEmail = (email, handleResponse, handleError) => {
  fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: email.email,
      subject: 'PLM Email Activation',
      text: `<h4>Dear ${email.fullName},</h4>
        <p>
          I hope this message finds you well. We are pleased to inform you that
          your PLM email account has been successfully created and is now ready
          for your use.
        </p>
        <div>
          Here's your PLM email account details:<br/>
          <strong>PLM email address is:</strong> ${email.email}<br/>
          <strong>Password:</strong> ${email.userId}
        </div>
        <p>
          <strong><i>Change your password immediately</i></strong>
        </p>
        <p>
          This email account will serve as an essential communication tool for
          official school announcements, updates, and correspondence with faculty
          members. We would like to highlight that your PLM email will be used as
          the primary account for accessing Microsoft services such as Outlook,
          Teams, and other related platforms.
        </p>
        <p>
          Please ensure that you use this email for all official communications
          and activities related to your academic journey with us. If you
          encounter any issues or have questions regarding your PLM email account,
          feel free to reach out to our IT support team at
          <a href='mailto:ITSupport@plm.edu'>ITSupport@plm.edu</a>.
        </p>
        <p>
          Thank you for your attention to this matter, and we wish you a
          successful and productive academic year.
        </p>`,
    }),
  })
    .then((data) => handleResponse(data, email))
    .catch((err) => handleError(err, email.fullName));
};
