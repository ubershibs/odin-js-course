class PuzzlesController < ApplicationController

  def index
    @puzzles = Puzzle.all
  end

  def show
    @puzzle = Puzzle.find(params[:id])
    @characters = @puzzle.characters
    start_puzzle
  end

  def check_character
    @character = Character.find(params[:c])
    @puzzle = @character.puzzle
    response = {}
    response[:status] = @character.check_location(params[:x], params[:y])
    response[:solve_time] = 0

    if response[:status] == "found"
      found(@character.id)
    end

    if puzzle_solved?
      response[:solve_time] = (Time.now - Time.parse(session[:start_time])).floor
      if @puzzle.toptime == nil
        response[:new_toptime] = "yes"
      else
        response[:new_toptime] = response[:solve_time] < @puzzle.toptime ? "yes" : "no"
      end
      @puzzle.update_attribute(:toptime, response[:solve_time]);
    end

    render json: JSON.generate(response)
  end

  def start_puzzle
    session[:remaining] = @puzzle.characters.map(&:id)
    session[:start_time] = Time.now
  end

  def found(character)
    session[:remaining].delete(character)
  end

  def puzzle_solved?
    session[:remaining].empty?
  end

  def submit_toptime
    response = {}
    @puzzle = Puzzle.find(params[:id])
    @puzzle.update_attribute(:topholder, params[:n])
    if @puzzle.topholder == params[:n]
      response[:status] = "saved"
    else
      response[:status] = "failure"
    end

    render json: JSON.generate(response)
  end
end
