class MessagesController < ApplicationController
  
  def create_message
    message = Message.new_message(params)
    render json: message, status: :created
  end

 
end
