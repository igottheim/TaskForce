class RoomsController < ApplicationController
# before_action :authenticate_user!

    def index
        @current_user = current_user
        redirect_to '/signin' unless @current_user
        @rooms = Room.public_rooms
        @users = User.all_except(@current_user)
        render json: @rooms
      end

end
