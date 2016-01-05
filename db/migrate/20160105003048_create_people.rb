class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.boolean :bio_visible

      t.timestamps null: false
    end
  end
end
