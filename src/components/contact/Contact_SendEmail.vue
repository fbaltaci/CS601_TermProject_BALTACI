<template>
  <h2 class="send-email__title">Send me an email</h2>
  <div class="send-email container">
    <form class="send-email-form" action="dummy@email.com">
      <input
        class="send-email-form-item"
        id="send-email__form-name"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        class="send-email-form-item"
        id="send-email__form-email"
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        class="send-email-form-item"
        id="send-email__form-subject"
        type="text"
        name="subject"
        placeholder="Subject"
      />
      <textarea
        name="message"
        id="send-email-form-item-message"
        cols="30"
        rows="5"
        placeholder="Type Your Message Here..."
      ></textarea>
      <input class="send-email-form-button btn" type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {};
</script>
