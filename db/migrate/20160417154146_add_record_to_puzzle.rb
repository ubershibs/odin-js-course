class AddRecordToPuzzle < ActiveRecord::Migration
  def change
    add_column :puzzles, :toptime, :integer
    add_column :puzzles, :topholder, :string
  end
end
