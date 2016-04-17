class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.references :puzzle, index: true, foreign_key: true
      t.integer :top
      t.integer :bottom
      t.integer :left
      t.integer :right
      t.string :name

      t.timestamps null: false
    end
  end
end
