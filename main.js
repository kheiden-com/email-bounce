export default {
  async email(message, env, ctx) {
      message.setReject("Message refused by recipient server");
      return;
  }
}