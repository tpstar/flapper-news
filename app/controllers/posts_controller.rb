class PostsController < ApplicationController

  before_action :authenticate_user!, only: [:create, :upvote]

  def index
    posts = Post.all
    render json: posts, status: 201
  end

  def create
    post = Post.create(post_params)
    render json: post
  end

  def show
    render json: Post.find(params[:id])
  end

  def upvote
    # binding.pry
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:link, :title)
  end

end
