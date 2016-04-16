class PuzzlesController < ApplicationController

  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
  end

  def check_character
    @character = Character.find(params[:c])
    status = @character.check_location(params[:x], params[:y])
    render json: status
  end
end
