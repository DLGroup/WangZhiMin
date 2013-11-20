class CommentsController < ApplicationController
  before_filter :load_article, :except => :destroy
  before_filter :authenticate, :only => :destroy

  def create
    @comment = @article.comments.new(comment_params)
    if @comment.save
      # redirect_to @article, notice: 'Thanks for your comment'
      respond_to do |format|
        format.html { redirect_to @article, notice: 'Thanks for your comment' }
        format.js # when no code is added to a block, Rails look for a template named after the view
      end
    else 
      # redirect_to @article, alert: 'Unable to add comment'
      respond_to do |format|
        format.html { redirect_to @article, notice: 'Unable to add comment' }
        format.js { render 'fail_create.js.erb' }
      end
    end
  end

  def destroy
    @article = current_user.articles.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to @article, notice: 'Comment Deleted' }
      format.js
    end
  end

  private
    def load_article
      @article = Article.find(params[:article_id])
    end

    def comment_params
      params.require(:comment).permit(:name, :email, :body)
    end
end