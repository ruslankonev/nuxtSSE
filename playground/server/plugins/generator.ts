export default defineNitroPlugin(() => {
  const { send } = useServerEvents();

  setInterval(() => {
    send("Test Message");
    //console.log("Sent stream message")
  }, 1000);
})
