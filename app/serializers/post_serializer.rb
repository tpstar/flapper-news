class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :upvotes
  has_many :comments
  belongs_to :user

end
