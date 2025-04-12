export default {
  async email(message, env, ctx) {
    // Criteria for identifying unwanted emails (e.g., specific sender domain)
    const badSenderDomains = ['badactor.com', 'unwantedmail.org'];
    
    try {
      // Check if the email is from a known bad sender
      if (isBadActorEmail(message.from, badSenderDomains)) {
        // Reject the email with SMTP 571 status code
        message.reject(571, "Message refused by recipient server");
        return;
      }
      
      // Default action: forward or process as usual for legitimate emails
      await message.forward("inbox@kheiden.com");
    } catch (error) {
      // Log errors for monitoring
      ctx.log.error(`Error processing email: ${error.message}`);
      // Optionally, reject the email if an error occurs
      message.reject(503, "Service unavailable temporarily");
    }
  },
};

// Helper function to check if the sender is from a bad domain
function isBadActorEmail(senderEmail, badDomains) {
  const senderDomain = senderEmail.split('@').pop();
  return badDomains.includes(senderDomain.toLowerCase());
}