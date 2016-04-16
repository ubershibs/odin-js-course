class PuzzlesController < ApplicationController

  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
  end

  def check_character(id, x, y)
    @puzzle = Puzzle.fi     nd(params[:id])
    @character = puzzle.characters.find(:id)
    status = @character.check_location(x, y)
    render json: status
  end
end
