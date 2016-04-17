class Character < ActiveRecord::Base

  belongs_to :puzzle
  validates :top, numericality: { only_integer: true }, presence: true
  validates :bottom, numericality: { only_integer: true, greater_than: :top }, presence: true
  validates :left, numericality: { only_integer: true }, presence: true
  validates :right, numericality: { only_integer: true, greater_than: :left }
  validates :name, presence: true

  def check_location(x, y)
    valid = []

    if x.to_i >= self.left && x.to_i <= self.right && y.to_i >= self.top && y.to_i <= self.bottom
      return "found"
    else
      return "tryagain"
    end
  end

end
