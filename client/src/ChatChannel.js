import consumer from "./consumer"

function ChatChannel()

{
     consumer.subscriptions.create
    (
      {
        channel: 'ChatsChannel',
        user_id: user.id,
      },
      {
        
        received: (data) => {
        console.log(data)
        }
      }
    )

    
}




export default ChatChannel()