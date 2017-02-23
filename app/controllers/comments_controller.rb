class CommentsController < ApplicationController

  before_action :authenticate_user!, only: [:create, :upvote]

  def create
    post = Post.find(params[:post_id])
    comment = post.comments.create(comment_params)
    comment.user = current_user
    render json: comment
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])
    comment.increment!(:upvotes)

    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
