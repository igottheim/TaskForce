module ApplicationCable
  class Connection < ActionCable::Connection::Base
    rescue_from StandardError, with: :report_error
    identified_by :current_user

    private


    def report_error(e)
      SomeExternalBugtrackingService.notify(e)
    end

      def find_verified_user
        if verified_user = User.find_by(id: cookies.encrypted['_session']['user_id'])
          verified_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
