require 'test_helper'

class NotifierTest < ActionMailer::TestCase
  test "email_friend" do
    article = articles(:welcome_to_rails)
    message = Notifier.email_friend(article, 'Johnson', 'johnson@example.com')
    assert_equal "Interesting article", message.subject
    assert_equal ['Johnson'], message.from
    assert_equal ['johnson@example.com'], message.to
  end
  
end
