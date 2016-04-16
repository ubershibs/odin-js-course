class Character < ActiveRecord::Base
  belongs_to :puzzle
  validates :top, numericality: { only_integer: true }, presence: true
  validates :bottom, numericality: { only_integer: true, greater_than: :top }, presence: true
  validates :left, numericality: { only_integer: true }, presence: true
  validates :right, numericality: { only_integer: true, greater_than: :left }
  validates :name, presence: true

  def check_location(x, y)
    x_range = [self.left, self.right]
    y_range = [self.top, self.bottom]
    valid = []

    if x >= x_range[0] && x<= x_range[1]
      valid << true
    else
      valid << false
    end

    if y >= y_range[0] && y<= y_range[1]
      valid << true
    else
      valid << false
    end

    if valid == [true, true]
      return "true"
    else
      return "false"
    end
  end
end
