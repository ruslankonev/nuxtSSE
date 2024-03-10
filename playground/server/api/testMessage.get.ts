export default defineEventHandler((event) => {
  const msg = "This is a different message"
  const { send, sendSingle } = useServerEvents();
  const { clientId } = getQuery(event)


  if (clientId) {
    sendSingle(clientId, { data: msg, event: 'someEvent' })
  }
  else {
    send(msg);
  }


  return { done: true }
})
