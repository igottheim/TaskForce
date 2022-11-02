class User < ApplicationRecord
    has_secure_password

    validates_uniqueness_of :username
    scope :all_except, ->(user) { where.not(id: user) }
    
end
