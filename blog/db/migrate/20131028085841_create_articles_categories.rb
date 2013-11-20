class CreateArticlesCategories < ActiveRecord::Migration
  def change
    create_table :articles_categories, :id => false do |t|
      # use the references method in the create_table block instead of 
      # using integer. It's just another notation that uses the association
      # name as a parameter
      
      t.references :article
      # both has the same meaning
      # t.integer :article_id 
      t.references :category
    end
  end
  
  def self.down
    drop_table :articles_categories
  end
end
