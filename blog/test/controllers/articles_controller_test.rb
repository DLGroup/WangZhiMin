require 'test_helper'

class ArticlesControllerTest < ActionController::TestCase
  setup do
    @article = articles(:welcome_to_rails)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:articles)
  end

  test "should get new" do
    login_as :eugene
    get :new
    assert_response :success
  end

  test "should create article" do
    login_as :eugene
    assert_difference('Article.count') do
      post :create, article: { title: "hello,world", body: "This is just a test, if i was missing, the test should past" }
    end
    assert_response :redirect
    assert_redirected_to article_path(assigns(:article))
  end

  test "should show article" do
    get :show, id: @article
    assert_response :success
    assert_template 'show'
  end

  test "should get edit" do
    login_as :eugene
    get :edit, id: @article
    assert_response :success
  end

  test "should update article" do
    login_as :eugene
    patch :update, id: @article, article: { title: "Nihao" }
    assert_redirected_to article_path(assigns(:article))
  end

  test "should destroy article" do
    login_as :eugene
    assert_nothing_raised { Article.find(@article) }

    assert_difference('Article.count', -1) do
      delete :destroy, id: @article
    end
    assert_response :redirect
    assert_redirected_to articles_path
    assert_raise(ActiveRecord::RecordNotFound) { Article.find(@article) }
  end
end
