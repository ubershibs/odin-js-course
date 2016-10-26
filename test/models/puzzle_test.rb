require 'test_helper'

class PuzzleTest < ActiveSupport::TestCase
  def setup
    @puzzle = Puzzle.new(title: "Waldo at the Beach", level: "Easy", image: "waldo1.jpg")
    @puzzle.save
  end


end
