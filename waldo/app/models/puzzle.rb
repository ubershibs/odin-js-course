class Puzzle < ActiveRecord::Base
  has_many :characters

  def record_time
    unless record_time == nil
      minutes = self.toptime / 60
      seconds = self.toprecord % 60
      return "#{minutes} minutes and #{seconds} seconds"
    end
  end
end
