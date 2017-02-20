class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :upvotes
  belongs_to :post
end
