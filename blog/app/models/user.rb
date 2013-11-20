class User < ActiveRecord::Base
  validates_uniqueness_of :email
  validates_length_of :email, :within => 5..50 
  # validates_format_of :email, :with => /^[^@][\w.-]+@[\w.-]+[.][a-z]{2, 4}$/i
  
  has_one :profile
  # has_many :articles， -> { order('published_at DESC') }, :dependent => :destroy
  # :dependent => :destroy would delete all articles when the user is deleted
  # if you want to delete user and just set article's user_id attribute to null
  # do the following ...
  has_many :articles, ->{ order('published_at DESC') }, :dependent => :nullify
  has_many :replies, :through => :articles, :source => :comments
  
  def password
    @password
  end
  
  def password=(pass)
    @password=pass
    encrypt_new_password(pass)
  end
  
  def self.authenticate(email, password)
    user = find_by_email(email)
    return user if user && Digest::SHA256.hexdigest(password + user.salt) == user.hashed_password
  end

  private
    def encrypt_password(password, salt)
      Digest::SHA256.hexdigest(password + salt) 
    end

    def encrypt_new_password(pass)
      salt = Array.new(10){ rand(1024).to_s(36) }.join
      self.salt, self.hashed_password = salt, encrypt_password(pass, salt)
    end
  
  
end
