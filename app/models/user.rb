class User < ApplicationRecord
     has_secure_password 
     #testing change for commit author
     has_many :todos
end
