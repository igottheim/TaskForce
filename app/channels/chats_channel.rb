class ChatsChannel < ApplicationCable::Channel
  rescue_from 'MyError', with: :deliver_error_message


  def subscribed
    stop_all_streams
    # stream_from "chat_#{params[:user_id]}#{params[:recipient_id]}"    
    stream_for "chat_#{params[:user_id]}"      
  end

  def unsubscribed
    stop_all_streams
  end
end

private

def deliver_error_message(e)
  broadcast_to(...)
end


# class ChatRoomChannel < ApplicationCable::Channel
#   def subscribed
#     stop_all_streams
#     stream_from "chat_#{room_id}"       
#   end

#   def unsubscribed
#     stop_all_streams
#   end
# end