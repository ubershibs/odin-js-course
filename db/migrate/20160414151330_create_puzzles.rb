class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.string :image
      t.string :title
      t.string :level

      t.timestamps null: false
    end
  end
end
