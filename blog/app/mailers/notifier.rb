class Notifier < ActionMailer::Base
  default from: "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.notifier.email_friend.subject
  #
  def email_friend(article, sender_name, receiver_email)
    @article = article
    @sender_name = sender_name
    mail :to => receiver_email, :from => @sender_name , :subject => "Interesting article"
    
    # Adding attachments have bugs, users can't receive the attachment file but binary code, fix it
    # attachments["hello.png"] = File.read(Rails.root.join("public/images/hello.png"))
  end

  def comment_added(comment)
    @article = comment.article
    mail :to => @article.user.email, :subject => "New comment for '#{@article.title}'"
  end
end
