class Article < ActiveRecord::Base
  validates_presence_of :title, :body, :on => :create, :message => "can't be blank"

  belongs_to :user
  has_many :comments
  has_and_belongs_to_many :categories
  
  scope :published, -> { where("articles.published_at IS NOT NULL") }
  scope :draft, -> { where("articles.published_at IS NULL") }
  scope :recent, -> { where("articles.published_at > ?", 1.week.ago.to_date) }

  # the following code is not working, because in ruby 2.0 scope parameter should write outside the block
  # scope :where_title, -> { |term| where("articles.title like ?", "%#{term}%") }
  scope :where_title, -> (term) { where("articles.title like ?", "%#{term}%") }

  def long_title
    "#{title} - #{published_at}"
  end
  
  def published?
    published_at.present?
  end
  
  def owned_by?(owner)
    return false unless owner.is_a?(User)
    user == owner
  end
end
